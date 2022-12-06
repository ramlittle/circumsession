//components
import BookedSlotList from '../components/BookedSlotList.js';
import AdminNavigation from './AdminNavigation.js';

//images
import DoctorTwo from '../images/doctor-2.jpg';
const BookedSlots =(props)=>{


    return (
        <>
            
            <AdminNavigation/>
        <section className='general-main-container'>
       
            <div className='general-table-container'>
            <h4>Showing Booked Slots ({props.bookedSlots.length})</h4>
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
                {/* <td>{testBook.date}</td> */}
                  
                {
                    props.bookedSlots.slice(0).reverse().map(list=>{
                    return <BookedSlotList  
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
           <div >
                <img src={DoctorTwo}/>
           </div>
           </section>
        </>
    )
}

export default BookedSlots;