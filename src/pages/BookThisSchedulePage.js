//email feature
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
//state
import React, { useState,useEffect } from 'react';
//axios
import axios from 'axios';
//uselocation
import { useLocation,useNavigate } from 'react-router';

//import header and footer by JR
import Header from '../components/Header';
import Footer from '../components/Footer';
//import css by JR
import '../css/BookThisSchedulePage.css';
import CalendarImage from '../images/calend.png'

const BookThisSchedulePage = () =>{

    //emailfeature needs this to capture all entered fields
    const form = useRef();

    //navigator
    const navigate = useNavigate();
    //locator
    const location = useLocation();
    const booked = location.state.props;

    //states for submit booking
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [age, setAge] = useState();
    const [mobileNumber, setMobileNumber] = useState();
    const [address, setAddress] = useState();
    const [email, setEmail] = useState();

    //function to book schedule
    const onBookThisScheduleHandler = (e) => {
		// prevent the form from refreshing the whole page
		e.preventDefault();
	
		const configuration = {
			method: 'put',
			url: `http://localhost:8080/api/v1/bookings/bookthisschedule/${booked.id}`,
			data: {
				firstName,
				lastName,
				email,
				mobileNumber,
				age,
				address
			},
		};

		// make the API call
		axios(configuration)
			.then((result) => {
				alert(result.data.status);
				
			}).catch((error) => {
				alert(error.response.data.status);
			});

        //email feature
        emailjs.sendForm('service_xykuslm', 'template_aj1q97o', form.current, 'pTcReyc3M_O8uT4Tx')
        .then((result) => {
            // console.log(result.text);
            alert('Email Confirmation Sent! Please check your inbox!');
            //reload the page after sending email, then display to booknowpage again
            navigate('/booknowpage');
			window.location.reload(false);
        }, (error) => {
            console.log(error.text);
            alert('email sending failed');
        });
	};

    //format the date to readable
    let sampledata=booked.date.split('T');

    let newDate='';
    for(let i=0;i<1;i++){
        newDate+=(sampledata[i])+' ';
    }

    return(
        <>
            <Header/>

            <section className='scheduling-body'>

                <div className='bookthisschedulepage-scheduling-container'>
                    <div className='scheduling-top'>
                        <h2>BOOK THIS DATE</h2>
                        <div>Date: {newDate}</div>
                        <div>Time: {booked.time}</div>
                        <div>Cubicle: {booked.cubicle}</div>
                    </div>

                    <form
                        className='form-confirm'
                        ref={form}
                        onSubmit={(e)=>onBookThisScheduleHandler(e)}
                    >
                        {/* <label className='bookthisschedulepage-scheduling-header'>Book This Schedule</label> */}
                        <label>Date: </label>
                            <input type ='text' name = 'date'value={newDate} readOnly/>
                        <label>Time: </label>
                            <input type ='text' name='time'value={booked.time} readOnly/>
                        <label>Cubicle: </label>
                            <input type ='text' name='cubicle'value={booked.cubicle} readOnly/>               
                        <label htmlFor='firstName'>First Name: </label>
                            <input
                                required
                                type='text'
                                name="firstName"
                                value={firstName}
                                placeholder=' Enter your first name:'
                                onChange={(e) => setFirstName(e.target.value)}
                            ></input>
                        <label htmlFor='lastName'>Last Name: </label>
                            <input
                                required
                                type='text'
                                name="lastName"
                                value={lastName}
                                placeholder=' Enter your last name:'
                                onChange={(e) => setLastName(e.target.value)}
                            ></input>
                        <label htmlFor='age'>Age: </label>
                            <input
                                required
                                type='number'
                                name="age"
                                value={age}
                                placeholder=' Enter your age:'
                                onChange={(e) => setAge(e.target.value)}
                            ></input>
                        <label htmlFor='mobileNumber'>Mobile Number: </label>
                            <input
                                required
                                type='tel'
                                pattern="[0-9]{11}" //numbers from 0 to 9 is the only allowed; only 11 digits
                                name="mobileNumber"
                                value={mobileNumber}
                                placeholder=' Enter your mobile number:'
                                onChange={(e) => setMobileNumber(e.target.value)}
                            ></input>
                        <label htmlFor ='address'>Address:</label>
                            <input
                                required
                                type='text'
                                name="address"
                                value={address}
                                placeholder=' Enter your address:'
                                onChange={(e) => setAddress(e.target.value)}
                            ></input>
                        <label htmlFor ='email'>Email:</label>
                            <input
                                required
                                type='email'
                                name="user_email"
                                value={email}
                                placeholder=' Enter your email:'
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                            
                        <button className='confirm-button' type='submit'>Confirm</button>
                    </form>
                </div>

                <div className='schedule-image'>
                    <img src={CalendarImage}/>
                </div>

            </section>

            <Footer/>
        </> 
    )
}
export default BookThisSchedulePage;