//css
import '../css/AdminNavigation.css';

//images
import CircumSessionLogo from '../images/cirsion.png';

//router link
import {Link, useNavigate} from 'react-router-dom';

const AdminNavigation = () => {

    const navigate = useNavigate();

    return(

        <nav className='admin-nav-container'>  

            <div>
                <img src ={CircumSessionLogo}/>
            </div>

            <div className='admin-navigation-links'>
                <div>
                    <Link className='admin-links'
                        to='/bookingpage'>
                        {/* Add Slot can be found in the admin section */}
                        Dashboard
                        </Link>
                </div>
                <div>
                <Link className='admin-links'
                    to='/bookings'
                    >Show All
                    </Link>
                </div>
                <div>
                    <Link className='admin-links'
                    to='/bookedslots'
                    >Booked
                    </Link>
                </div>
                <div>
                    <Link className='admin-links'
                        to='/availableslots'>
                        Available
                        </Link>
                </div>
            </div>

            <div>
                <button
                    className='admin-navigation-button'
                    onClick={() => {
                        if(window.confirm('Are you sure you want to logout?')){
                            window.localStorage.clear();
                            navigate('/login');
                        }
                      }}
        
                >Logout</button>
            </div>

        </nav>
    )
}
export default AdminNavigation;