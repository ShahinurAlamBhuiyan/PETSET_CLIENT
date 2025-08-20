import { Button, Card } from 'react-bootstrap';
import './Memories.css';
import { Link } from 'react-router-dom';

const MemoryCard = ({ memories, currentPage, itemsPerPage }) => {
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;



    return (
        <div className='memories_container '>
            {memories && memories.slice(startIndex, endIndex).map((post) => (
                <div key={post._id} className='memory_card'>
                    <Card style={{ height: '100%', borderRadius: '15px' }}>
                        <Card.Img style={{ objectFit: 'cover', borderRadius: '15px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0' }} height={200} variant="top" src={post.img_URL} />
                        <Card.Body>
                            <Card.Title>{truncateText(post.title, 30)}...</Card.Title>
                            <Card.Text style={{ textAlign: 'justify' }}>{truncateText(post.details, 90)}...</Card.Text>

                            {/* <Button onClick={() => handleDelete(post._id)} variant="outline-primary">Delete</Button> */}
                        </Card.Body>
                        <Card.Footer >
                            <Link to={`/memories/${post._id}`}>
                                <Button variant="outline-primary ">Details</Button>
                            </Link>
                            {/* details */}
                        </Card.Footer>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default MemoryCard;