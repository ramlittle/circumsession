// link
import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
//import
import Footer from '../components/Footer';
import Header from '../components/Header';
//css 
import '../css/LandingPage.css';

const LandingPage =()=>{

    // Scroll to top upon reload or navigation
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <>

            <Header></Header>

            <section className='landingpage-container'>
                <div className='landingpage-content-1'>
                    <h1 className='landingpage-content-1-h1'>Book your son for a free circumcision</h1>
                    <h2 className='landingpage-content-1-h2'>Getting your son for a free circumcision is now one-click away! Fast circumcision with clean results. Book your appointment now.</h2>
                    <Link to='/booknowpage'><button className='landingpage-button-1'>BOOK NOW!</button></Link>
                    <p className='landingpage-content-1-p'>LEARN MORE</p>
                    <a href='#landingpage-content-2'><img className='landingpage-content-1-image' src={require('../images/down-landing.png')} alt='down landing image'></img></a>
                </div>
                <div className='landingpage-content-2' id='landingpage-content-2'>
                    <h1 className='landingpage-content-2-h1'>HOW TO BOOK WITH JUST THREE EASY STEPS</h1>
                    <h2 className='landingpage-content-2-h2'>STEPS:</h2>
                    <div className='landingpage-steps-container'>
                        <div className='landingpage-steps-cards'>
                            <div className='landingpage-steps-card-number-1'>1</div>
                            <div className='landingpage-steps-card-description'>CHOOSE YOUR SCHEDULE</div>
                        </div>
                        <div className='landingpage-steps-cards'>
                            <div className='landingpage-steps-card-number-2'>2</div>
                            <div className='landingpage-steps-card-description'>FILL UP FORM</div>
                        </div>
                        <div className='landingpage-steps-cards'>
                            <div className='landingpage-steps-card-number-3'>3</div>
                            <div className='landingpage-steps-card-description'>CONFIRM YOUR APPOINTMENT</div>   
                        </div>
                    </div>
                    <Link to='/booknowpage'><button className='landingpage-button-2'>BOOK NOW!</button></Link>
                </div>
            </section>

            <Footer></Footer>

        </>
    )
}
export default LandingPage;