import { Link } from "react-router-dom";
import '../css/Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <Link to='/'><img className='header-logo' src={require('../images/landingpagelogo.png')} alt='login cartoon'></img></Link>
      <div className="header-links-container">
        <Link to='/faq'><button>FAQs</button></Link>
        <Link to='/about'><button>ABOUT</button></Link>
      </div>
    </header>
  )
}

export default Header;