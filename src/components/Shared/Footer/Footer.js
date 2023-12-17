import React from 'react';
import logo from '../../../assets/petsetlogo.png';

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-white  py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
          <div className="col-lg-4 col-md-12 mb-5 pl-5">
            <a href="/" className="navbar-brand" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '5px' }}>
              <img height={50} width={165} src={logo} alt="petSetLogo" />
            </a>
            <p className="m-0 pt-2">PetSet: Your pet's ultimate haven. Elevate their experience with our exclusive services – from memory storing and lost pet assistance to gourmet cuisine and tailored care. Trust us for a world of joy, health, and unmatched pet delight</p>
          </div>
          <div className="col-lg-4 col-md-12 mb-5 pl-5">
            <h5 className="text-primary mb-4">Get In Touch</h5>
            <p><i className="fa fa-map-marker-alt mr-2"></i>United City, Madani Avenue, Badda, Dhaka 1212</p>
            <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
            <p><i className="fa fa-envelope mr-2"></i>contact@uiu.com</p>
            <div className="d-flex justify-content-start mt-4">
              <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '36px', height: '36px' }} href="https://twitter.com"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '36px', height: '36px' }} href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '36px', height: '36px' }} href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '36px', height: '36px' }} href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 mb-5 pl-5">
            <h5 className="text-primary mb-4">Popular Links</h5>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Home</a>
              <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Memories</a>
              <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Adoption</a>
              <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Services</a>
              <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Store</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-white py-4 px-sm-3 px-md-5" style={{ background: '#111111' }}>
        <div className="row">
          <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">
              &copy; <a className="text-white font-weight-bold" href="/">PetSet</a>. All Rights Reserved.

              Designed by <a className="text-white font-weight-bold" href="https://github.com/ShahinurAlamBhuiyan">Team Titans</a>
            </p>
          </div>
          <div className="col-md-6 text-center text-md-right ps-5">
            <ul className="nav d-inline-flex">
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="/">Privacy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="/">Terms</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="/">FAQs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="/">Help</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
