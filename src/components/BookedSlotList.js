//dispatch
import {useDispatch} from 'react-redux';

//axios
import axios from 'axios';
const BookedSlotList=(props)=>{
    let sampledata=props.date.split('T');
    let newDate='';
    for(let i=0;i<1;i++){
        newDate+=(sampledata[i])+' ';
    }
//DELETE Feature
const dispatch=useDispatch();

const onDeleteHandler=()=>{
    const confirmBox=window.confirm('WARNING: This will delete this booking');
    if(confirmBox===true){
        axios.delete(`http://localhost:8080/api/v1/bookings/${props.id}`)
        .then(res =>{
            if( typeof res.data === 'object' ){
                dispatch({
                    type:'DELETE_BOOKING',
                    payload:{id:props.id}
                })
            }
            //reload page after action is done
            window.location.reload();
        })
    }
}
    return(
        <>
            <tr>
                <td>{newDate}</td>
                <td>{props.time}</td>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.email}</td>
                <td>{props.cubicle}</td>
                <td>{props.status}</td>
                <td>

                    <button 
                        onClick={onDeleteHandler}
                        >DELETE</button>
                </td>
            </tr>
        </>
    )
}

export default BookedSlotList;
