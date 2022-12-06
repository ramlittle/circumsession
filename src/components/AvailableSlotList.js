//dispatch
import {useDispatch} from 'react-redux';

//axios
import axios from 'axios';

const AvailableSlotList =(props)=>{
    //formatting of date to readable format
    // console.log('type ng date',typeof (props.date));
    let sampledata=props.date.split('T');
    // console.log(sampledata,'results')
    let newDate='';
    for(let i=0;i<1;i++){
        newDate+=(sampledata[i])+' ';
    }

//DELETE Feature
const dispatch=useDispatch();

const onDeleteHandler=()=>{
    const confirmBox=window.confirm('WARNING: This will delete the available Slot');
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
                <td>{props.cubicle}</td>
                <td>{props.status}</td>
                <td>
                <button 
                        className='action-buttons'
                        onClick={onDeleteHandler}
                        >DELETE</button>
                </td>
            </tr>
        </>
    )
}

export default AvailableSlotList;