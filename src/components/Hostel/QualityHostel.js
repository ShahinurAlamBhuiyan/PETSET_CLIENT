import React from 'react';
import './Hostel.css';

import img1 from '../../assets/hostel/qualityHostel/qualityHostel1.jpg';
import img2 from '../../assets/hostel/qualityHostel/qualityHostel2.jpg';
import img3 from '../../assets/hostel/qualityHostel/qualityHostel3.jpg';

const QualityHostel = () => {
    return (
        <div className='qualityHostel'>
            <div className='qualityHostel-images'>
                <div className='qualityHostel-singleImage'>
                    <img src={img1} alt="Hostel Logo" />
                </div>
                <div className='qualityHostel-doubleImages'>
                    <img src={img2} alt="Cat at hostel" />
                    <img src={img3} alt="Pet home counter" />
                </div>
            </div>
            <div className='qualityHostel-content'>
                <h2>QUALITY PET HOSTEL IN DHAKA</h2>
                <p>Furryghor Foster Home is a 5-star quality hotel for your animal companions. When you are away, we take care of your furbabies with safety, security, privacy, and ensure a wonderful playful time for them.</p>
            </div>
        </div>
    );
}

export default QualityHostel;
