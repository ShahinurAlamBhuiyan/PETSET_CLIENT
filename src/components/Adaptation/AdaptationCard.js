import React from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';

import './Adaptation.css';
import { Link } from 'react-router-dom';

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const AdaptationCard = ({ adaptationPosts, currentPage, itemsPerPage }) => {
    
    
    console.log(adaptationPosts.img_URL)

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className='adaptationPosts_container'>
      {adaptationPosts &&
        adaptationPosts.slice(startIndex, endIndex).map((post) => {
            const myArray = [
                {img_url: post.img_URL},
                {img_url: post.img_URL2},
                {img_url: post.img_URL3},
            ]
          return (
            <div key={post.m_id} className='memory_card'>
              <Card style={{ height: '100%' }}>
                {myArray.length > 0 ? (
                  <Carousel nextLabel={''} prevLabel={''} interval={null}>
                    {myArray.map((memory, index) => (
                      <Carousel.Item key={index}>
                        <img
                          className='d-block w-100'
                          src={memory.img_url}
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
                  <Card.Title>{truncateText(post.details, 30)}...</Card.Title>
                  <Card.Text style={{ textAlign: 'justify' }}>{truncateText(post.details, 90)}...</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to={`/adaptation/${post.a_id}`}>
                    <Button variant='outline-primary'>Details</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default AdaptationCard;
