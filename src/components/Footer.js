import { Link } from "react-router-dom";

import '../css/Footer.css';


const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-top-div'>
        <div>
          <h3>SERVICE HOURS</h3>
          <p>Monday to Friday, 8:00 AM - 5:00 PM</p>
          <br></br>
          <h3>CONTACT US</h3>
          <p>📞 (+63) 912 3456 789</p>
          <p>📧 circumsession@gmail.com</p>
          <br></br>
          <h3>LOCATION</h3>
          <p>🏠 Uplift x DICT Hospital, Baguio City, Benguet, Philippines</p>
        </div>
        <div className="header-menu">
          <h3>MENU</h3>
          <Link to='/'><p><u>Home</u></p></Link>
          <Link to='/about'><p><u>About</u></p></Link>
          <Link to='/faq'><p><u>FAQs</u></p></Link>
          <Link to='/booknowpage'><p><u>Book Now</u></p></Link>
        </div>
      </div>
      <div className='footer-bottom-div'>
        <span className='footer-bottom-span'>© 2022 Uplift x DICT CircumSession. All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer;