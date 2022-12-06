//css
import '../css/SearchResult.css';

//dispatch
import {useDispatch} from 'react-redux';

//axios
import axios from 'axios';

const SearchResult=(props)=>{
    //convert date to readable format
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
            <tr className='search-result-row'>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.email}</td>
                <td>{newDate}</td>
                <td>{props.time}</td>
                <td>{props.cubicle}</td>
                <td>{props.address}</td>
                <td>{props.status}</td>
                <td>{props.age}</td>
                <td>{props.mobileNumber}</td>
            <button 
                        className='action-buttons'
                        onClick={onDeleteHandler}
                        >DELETE</button>
            </tr>
        </>
    )
}

export default SearchResult;