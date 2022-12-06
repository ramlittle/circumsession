import React, {useLayoutEffect, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

// Import header and footer added by JR
import Header from '../components/Header';
import Footer from '../components/Footer';

// Css
import '../css/BookNowPage.css';

// Component
import AvailableSchedule from '../components/AvailableSchedule.js';

const BookNowPage = () => {

    // Initial load of data
    const bookings=useSelector(state=>state.bookings);

    // Scroll to top upon reload or navigation
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);  

    const dispatch = useDispatch();

    useEffect(()=>{
        axios.get('http://localhost:8080/api/v1/bookings')
        .then(res =>{
        //   setData(res.data);
        //dispatch the data into reducer
        dispatch({type:"POPULATE_BOOKINGS",payload:{bookings:res.data}})
        })
        .catch(err =>{
        console.log('error daw',err);
        })
    }, []) //initial load display only, if [] is not here, it will not stop displaying on console.


    // AVAILABLE SCHEDS

    //CUBICLE 1
    const availableAtCubicleOne=bookings.filter(list=>{
        return list.cubicle==='1' && list.status==='available';
    })

    //CUBICLE 2
    const availableAtCubicleTwo=bookings.filter(list=>{
        return list.cubicle==='2' && list.status==='available';
    })
    //CUBICLE 3
    const availableAtCubicleThree=bookings.filter(list=>{
        return list.cubicle==='3' && list.status==='available';
    })
    //CUBICLE 4
    const availableAtCubicleFour=bookings.filter(list=>{
        return list.cubicle==='4' && list.status==='available';
    })

    return(
        <>
            <Header></Header>

            <div className='choose-cubicle-header-container'>
                <h2>CHOOSE A CUBICLE TO BOOK</h2>
            </div>
            
            <section className='cubicles-container'>

                {/* CUBICLE ONE */}
                <div className='cubicle-cards'>
                    <label>Cubicle 1</label>
                    { availableAtCubicleOne.map(list=>{
                        return <AvailableSchedule  
                            key={list._id}
                            id={list._id}
                            date={list.date}
                            time={list.time}
                            cubicle={list.cubicle}
                            status={list.status}
                        />})
                    }
                </div>

                {/* CUBICLE TWO */}
                <div className='cubicle-cards'>
                    <label>Cubicle 2</label>
                        { availableAtCubicleTwo.map(list=>{
                            return <AvailableSchedule  
                                key={list._id}
                                id={list._id}
                                date={list.date}
                                time={list.time}
                                cubicle={list.cubicle}
                                status={list.status}
                            />})
                        }
                </div>

                {/* CUBICLE THREE */}
                <div className='cubicle-cards'>
                    <label>Cubicle 3</label>
                        { availableAtCubicleThree.map(list=>{
                            return <AvailableSchedule  
                                key={list._id}
                                id={list._id}
                                date={list.date}
                                time={list.time}
                                cubicle={list.cubicle}
                                status={list.status}
                            />})
                        }
                </div>

                {/* CUBICLE FOUR */}
                <div className='cubicle-cards'>
                    <label>Cubicle 4</label>
                        { availableAtCubicleFour.map(list=>{
                            return <AvailableSchedule  
                                key={list._id}
                                id={list._id}
                                date={list.date}
                                time={list.time}
                                cubicle={list.cubicle}
                                status={list.status}
                            />})
                        }
                </div>
            </section>

            <Footer></Footer>

        </>
    )
}

export default BookNowPage;