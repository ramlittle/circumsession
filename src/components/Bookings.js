//THIS IS THE SHOW ALL PAGE
//component
import BookingList from '../components/BookingList';
import AdminNavigation from './AdminNavigation';

//css
import '../css/General.css';

//images
import DoctorThree from '../images/doctor-3.jpg';
const Bookings =(props)=>{
    return(
        <>
        <AdminNavigation/>
        <section className='general-main-container'>

        <div className='general-table-container'>
            <h4>Showing All ({props.bookings.length})</h4>
        
                <table className='table-data'>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>EMAIL</th>
                        <th>CUBICLE</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                    </tr>
                   
                    {
                        props.bookings.slice(0).reverse().map(list=>{
                        return <BookingList
                                key={list._id}
                                id={list._id}
                                date={list.date}
                                time={list.time}
                                firstName={list.firstName}
                                lastName={list.lastName}
                                email={list.email}
                                cubicle={list.cubicle}
                                status={list.status}
                                />
                        })
                    }
                     
                    </table>
            </div>
            <div>
                <img src={DoctorThree}/>
            </div>
            </section>
        </>
    )
}
export default Bookings;