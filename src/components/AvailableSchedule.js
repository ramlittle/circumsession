//css
import '../css/AvailableSchedule.css';

//components
import {Link} from 'react-router-dom';



const AvailableSchedule=(props)=>{
  
let sampledata=props.date.split('T');
let newDate='';
for(let i=0;i<1;i++){
    newDate+=(sampledata[i])+' ';
}

    return(
        <>
            <div className='schedule-cards'>
                
                <div className='whitebox'>
                    <div className='new-date'>{newDate}</div>   
                    <div className='time-available'>{props.time}</div>
                </div>

                {/* <div>{props.firstName}</div>
                <div>{props.lastName}</div>
                <div>{props.email}</div>
                <div className='cubicle-number'>{props.cubicle}</div>
                <div className='cubicle-status'>{props.status}</div> */}

                {/* send this data to the next linked page */}
                <Link to='/bookthisschedule' state={{props}}>
                    <button className='book-button'>Book</button>
                </Link>

            </div>

        </>
    )
}

export default AvailableSchedule;