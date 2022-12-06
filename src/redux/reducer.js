
const initialState={
    bookings:[]
};

const reducer =(state=initialState, action)=>{
   switch(action.type){
    case 'POPULATE_BOOKINGS':
        return {...state,bookings:action.payload.bookings}
    case 'DELETE_BOOKING':
        return{
            ...state,
            mentors: state.bookings.filter(booking=>booking._id !==action.payload.id)
        }

    default:
        return state;
   }
}

export default reducer;