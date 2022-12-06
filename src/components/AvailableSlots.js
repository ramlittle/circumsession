//components
import AvailableSlotList from '../components/AvailableSlotList';
import AdminNavigation from './AdminNavigation';

//css
import '../css/General.css';

//images
import DoctorOne from '../images/doctor-1.jpg';
const AvailableSlots =(props)=>{
return(
    <>
        <AdminNavigation/>
    <section className='general-main-container'>

    
        <div className='general-table-container'>

        
        <h4>Showing Available ({props.availableSlots.length})</h4>
         <table className='table-data'>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>CUBICLE</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                </tr>  
                {
                    props.availableSlots.slice(0).reverse().map(list=>{
                    return <AvailableSlotList  
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
                    <img src={DoctorOne}/>
                </div>
        </section>
    </>

)
}

export default AvailableSlots;