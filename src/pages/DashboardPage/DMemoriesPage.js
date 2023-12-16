import React, { useContext, useEffect, useState } from 'react'
import '../../components/Memories/Memories.css'
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
import { Button, Card, Pagination } from 'react-bootstrap';
import DMemoriesModal from '../../components/Dashboard/DMemoriesModal';
import Swal from 'sweetalert2'

const DMemoriesPage = () => {
  const { loggedInUser } = useContext(AuthContext);
  const [memories, setMemories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalView, setShowModalView] = useState(false);
  const [memoryId, setMemoryId] = useState('');

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;


  // Fetching all memories --->
  useEffect(() => {
    const fetchAllMemories = async () => {
      let res;
      try {
        if (loggedInUser.role === 'admin') res = await axios.get("http://localhost:8800/memories")
        else res = await axios.get(`http://localhost:8800/memories/user/${loggedInUser?.u_id}`);
        setMemories(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllMemories()
  }, [memories.length])

  // Pagination part --->
  const totalPages = Math.ceil(memories.length / itemsPerPage);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleEdit = (memory) => {
    setMemoryId(memory.m_id)
    setShowModalEdit(true);
  };
  const handleDetails = (memory) => {
    setMemoryId(memory.m_id)
    setShowModalView(true);
  };

  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "Deleted Memory can't be undo!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`http://localhost:8800/memories/${id}`)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          }).then(() => window.location.reload());
        }
      });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {loggedInUser.role === 'admin' ? <h2>All Memories shared by user.</h2> : <h2>My Memories -</h2>}

      <div className='memories_container'>
        {memories && memories.slice(startIndex, endIndex).map((memory) => (
          <div key={memory.m_id} className='memory_card'>
            <Card style={{ height: '100%' }}>
              <Card.Img style={{ objectFit: 'cover' }} height={200} variant="top" src={memory.img_URL} />
              <Card.Body>
                <Card.Title>{truncateText(memory.title, 30)}</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>{truncateText(memory.details, 90)}...</Card.Text>
              </Card.Body>
              <Card.Footer className='centering_items_flex' style={{ justifyContent: 'space-between' }}>
                <Button onClick={() => handleDetails(memory)} variant="outline-primary ">Details</Button>


                {
                  (loggedInUser.role === 'user' || loggedInUser.u_id === memory.u_id) &&
                  <Button onClick={() => handleEdit(memory)} variant="outline-primary ">Edit</Button>
                }

                <Button onClick={() => handleDelete(memory.m_id)} variant="outline-primary ">Delete</Button>

              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>

      <DMemoriesModal
        showModalEdit={showModalEdit}
        setShowModalEdit={setShowModalEdit}
        memoryId={memoryId}
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

export default DMemoriesPage