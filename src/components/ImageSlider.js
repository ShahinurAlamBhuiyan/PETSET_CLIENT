import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ dummyImages }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === dummyImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? dummyImages.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="image-slider">
            <div
                className="image-container"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
                {dummyImages.map((imageUrl, index) => (
                    <img
                        alt='hello'
                        key={index}
                        src={imageUrl.imageUrl}
                        className="memory-image"
                    />
                ))}
            </div>
                <button style={{marginRight:'10px'}} onClick={prevImage}>Previous</button>
                <button onClick={nextImage}>Next</button>

        </div>
    );
};

export default ImageSlider;
