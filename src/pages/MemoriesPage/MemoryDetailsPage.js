import React, { useEffect, useState } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';


const dummyImages = [
    {
        "imageUrl": "https://cms-lc.bestfriendspetcare.com/wp-content/uploads/2020/09/keep-your-pet-memories-alive-blog-featured.jpg",
    },
    {
        "imageUrl": "https://www.veterinarians.org/wp-content/uploads/2022/10/how-to-find-a-lost-dog.jpg",
    },
    {
        "imageUrl": "https://cms-lc.bestfriendspetcare.com/wp-content/uploads/2020/09/keep-your-pet-memories-alive-blog-featured.jpg",
    },
]

const MemoryDetailsPage = () => {
    const { id } = useParams();
    const [memory, setMemory] = useState(null);

    useEffect(() => {
        const fetchMemoryDetails = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const memoryData = await response.json();
                setMemory(memoryData);
            } catch (error) {
                console.error('Error fetching memory details:', error);
            }
        };

        fetchMemoryDetails();
    }, [id]);

    console.log(dummyImages[0].imageUrl)
    return (
        <div className='container' style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
            {!memory && <Spinner animation='border' />}
            {memory &&
                <div>
                    <Link to={'/memories'}>
                        <Button variant="outline-primary" className='mt-2'>{'<'} back</Button>
                    </Link>
                    <Card className="mt-1" style={{ maxWidth: '500px' }} >
                        <Card.Img variant="top" src="https://cms-lc.bestfriendspetcare.com/wp-content/uploads/2020/09/keep-your-pet-memories-alive-blog-featured.jpg" />
                        <Card.Body>
                            <Card.Title>{memory.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Shared by {memory.creatorName || 'Shahinur Alam Bhuiyan'}</Card.Subtitle>
                            <Card.Text>{memory.body}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Shared on {memory.createdDate || '02 November, 2023'}</Card.Footer>
                    </Card>
                </div>
            }

            {/* {dummyImages && (
                <>
                    <h4>Images</h4>
                    <div className="image-container">
                        <ImageSlider dummyImages={dummyImages} />
                    </div>
                </>
            )} */}



        </div>
    );
};

export default MemoryDetailsPage;
