import React, { useContext, useEffect, useState } from 'react'
import '../../components/Adaptation/Adaptation.css'
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
import { Button, Card, Carousel, Pagination } from 'react-bootstrap';
import DAdoptionModal from '../../components/Dashboard/DAdoptionModal';
import Swal from 'sweetalert2'

const DAdoptionsPage = () => {
  const { loggedInUser } = useContext(AuthContext);
  const [adoptionPosts, setAdoptionPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalView, setShowModalView] = useState(false);
  const [adoptionId, setAdoptionId] = useState('');

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;


  // Fetching all adoptionPosts --->
  useEffect(() => {
    const fetchAllAdoptions = async () => {
      let res;
      try {
        if (loggedInUser.role === 'admin') res = await axios.get("http://localhost:8800/adaptions")
        else res = await axios.get(`http://localhost:8800/adaption/user/${loggedInUser?.u_id}`);
        setAdoptionPosts(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllAdoptions()
  }, [adoptionPosts.length])

  // Pagination part --->
  const totalPages = Math.ceil(adoptionPosts.length / itemsPerPage);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleEdit = (adoptionPost) => {
    setAdoptionId(adoptionPost.a_id)
    setShowModalEdit(true);
  };
  const handleDetails = (adoptionPost) => {
    setAdoptionId(adoptionPost.a_id)
    setShowModalView(true);
  };

  const handleDelete = async (adoptionId) => {
    try {
      await axios.delete(`http://localhost:8800/adoption/${adoptionId}`)
      alert('Deleted successfully!')
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div>
      {loggedInUser.role === 'admin' ? <h2>All Adoption posted by user.</h2> : <h2>Your Adoption Posts -</h2>}

      <div className='adaptationPosts_container'>
        {adoptionPosts &&
          adoptionPosts.slice(startIndex, endIndex).map((post) => {
            const myArray = [
              { img_url: post.img_URL },
              { img_url: post.img_URL2 },
              { img_url: post.img_URL3 },
            ]
            return (
              <div key={post.m_id} className='memory_card'>
                <Card style={{ height: '100%' }}>
                  {myArray.length > 0 ? (
                    <Carousel nextLabel={''} prevLabel={''} interval={null}>
                      {myArray.map((post_imgs, index) => (
                        <Carousel.Item key={index}>
                          <img
                            className='d-block w-100'
                            src={post_imgs.img_url}
                            alt={`Slide ${index}`}
                            style={{ objectFit: 'cover', height: '200px' }}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  ) : (
                    <Card.Img style={{ objectFit: 'cover' }} height={200} variant='top' src={post.img_URL} />
                  )}
                  <Card.Body>
                    <Card.Title>{truncateText(post.title, 30)}</Card.Title>
                    <Card.Text style={{ textAlign: 'justify' }}>{truncateText(post.details, 90)}...</Card.Text>
                  </Card.Body>
                  <Card.Footer className='centering_items_flex' style={{ justifyContent: 'space-between' }}>
                    <Button onClick={() => handleDetails(post)} variant="outline-primary ">Details</Button>


                    {
                      (loggedInUser.role === 'user' || loggedInUser.u_id === post.u_id) &&
                      <Button onClick={() => handleEdit(post)} variant="outline-primary ">Edit</Button>
                    }

                    <Button onClick={() => handleDelete(post.a_id)} variant="outline-primary ">Delete</Button>
                  </Card.Footer>
                </Card>
              </div>
            );
          })}
      </div>

      <DAdoptionModal
        showModalEdit={showModalEdit}
        setShowModalEdit={setShowModalEdit}
        adoptionId={adoptionId}
        showModalView={showModalView}
        setShowModalView={setShowModalView}
      />

      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  )
}

export default DAdoptionsPage