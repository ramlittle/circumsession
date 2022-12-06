import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

//css
import '../css/BookingPage.css';

//download package
import { CSVLink } from 'react-csv';

//images
import AdminPicture from '../images/CMPD.png';
import DownloadIcon from '../images/download.png';

//component
import AdminNavigation from '../components/AdminNavigation';
import Search from '../components/Search.js';

const BookingPage = () => {
	//initial load of data
	const bookings = useSelector((state) => state.bookings);

	const dispatch = useDispatch();
	useEffect(() => {
		axios
			.get('http://localhost:8080/api/v1/bookings')
			.then((res) => {
				//   setData(res.data);
				//dispatch the data into reducer
				dispatch({
					type: 'POPULATE_BOOKINGS',
					payload: { bookings: res.data },
				});
			})
			.catch((err) => {
				console.log('error daw', err);
			});
	}, []); //initial load display only, if [] is not here, it will not stop displaying on console.

	//AVAILABLE
	const availableSlots = bookings.filter((book) => {
		return book.status === 'available';
	});

	//BOOKED
	const bookedSlots = bookings.filter((book) => {
		return book.status === 'booked';
	});

	//states for submit booking
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [cubicle, setCubicle] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	//states for modal
	const [showForm, setShowForm] = useState(false);

	// Add new booking
	const addNewBooking = (e) => {
		e.preventDefault();

		//check if date is past due
		//to read
		//https://www.c-sharpcorner.com/UploadFile/8911c4/how-to-compare-two-dates-using-javascript/
		console.log(
			'this is the entered date',
			date,
			typeof date,
			'is type of date'
		);

		//split the string date to dateOne
		let dateOne = date.split('-');
		console.log('dateOne', dateOne);

		//split the time to timesplit
		let timeSplit = time.split(':');
		console.log('timeSplit', timeSplit);

		//set Date Two with Year, Date, Day, Hour and Minute
		let dateTwo = new Date(
			dateOne[0],
			dateOne[1] - 1,
			dateOne[2],
			timeSplit[0],
			timeSplit[1]
		);
		// let dateTwo=new Date('2022','11','30');
		console.log('dateTwo', dateTwo, 'date type is ', typeof dateTwo);

		//declare the date todaynow
		let dateThree = new Date();
		// dateThree.setDate(dateThree.getDate() + 1);
		console.log('dateThree here', dateThree);

		//dclared variable to compare dates
		let dateForChecking = date + 'T00:00:00.000Z';

		console.log('date for checking value', dateForChecking);
		console.log('datetwo is', dateTwo);
		console.log('booking[26].date', availableSlots);
		//check if the date is old
		if (dateTwo < dateThree) {
			console.log('date 2 is less than datethree', true);
			alert('Please Enter a Date that is not over yet');
			//check if the fields are filled out
		} else if (time == '' || cubicle == '') {
			setErrorMsg('Please fill out all fields');
			//check if there is a duplicate, by date, time and cubicle
		} else if (
			availableSlots.filter(
				(booking) =>
					booking.cubicle == cubicle &&
					booking.time == time &&
					// booking.date==dateForChecking
					booking.date == dateForChecking
			).length !== 0
		) {
			alert('Available Slot Already Exist!');
			//add new booking if no errors
		} else {
			const configuration = {
				method: 'post',
				url: 'http://localhost:8080/api/v1/bookings/addbooking',
				data: {
					// date: date,
					date: date,
					time: time,
					cubicle: cubicle,
				},
			};

			// make the API call
			axios(configuration)
				.then((result) => {
					alert(result.data.status);
					window.location.reload(false);
				})
				.catch((error) => {
					alert(error.response.data.status);
				});
		}
	};

	//search funtion
	function searchFunction(searchedEmail) {
		let searchedPatient = bookings.filter((booking) => {
			// console.log('label',booking.email)
			if (booking.status === 'booked') {
				return booking.email.includes(searchedEmail);
			}
		});
		// console.log('result ng function sa app js',searchedPatient);
		return searchedPatient;
	}

	//download headers
	const headers = [
		{ label: 'firstName', key: 'firstName' },
		{ label: 'lastName', key: 'lastName' },
		{ label: 'email', key: 'email' },
		{ label: 'date', key: 'date' },
		{ label: 'time', key: 'time' },
		{ label: 'cubicle', key: 'cubicle' },
		{ label: 'address', key: 'address' },
		{ label: 'status', key: 'status' },
		{ label: 'mobileNumber', key: 'mobileNumber' },
	];

	//declare CSVLink
	const csvLink = {
		filename: 'file.csv',
		headers: headers,
		data: bookings,
	};

	return (
		<>
			<AdminNavigation />

			{/* HERO SECTION */}

			<div className='admin-dashboard-container'>
				{/* admin details section */}
				<div className='admin-section-container'>
					<div className='admin-picture-container'>
						<img src={AdminPicture} />
					</div>
					<div className='admin-information-container'>
						<div className='admin-sub-information-container'>
							<p>Name: <span>Jojo Martinez</span></p>
						</div>
						<div className='admin-sub-information-container'>
							<p>Email: <span>admin@circumsession.com</span></p>
						</div>
						<div className='admin-sub-information-container'>
							<p>Role: <span>Administrator</span></p>
						</div>
					</div>
				</div>
				{/* Summary section */}
				<div className='bookings-summary-container'>

					<div>
						<button
							className='show-add-button'
							type='button'
							onClick={() => setShowForm(true)}
						>+ Add Slot</button>

						{/* MODAL */}
						{showForm && (
							<form className='add-form' onSubmit={(e) => addNewBooking(e)}>
								<label>Date: </label>
								<input
									required
									type='date'
									name='date'
									value={date}
									onChange={(e) => setDate(e.target.value)}
								></input>
								<label for='time'>Time: </label>
								<select value={time} onChange={(e) => setTime(e.target.value)}>
									<option>SELECT</option>
									<option>8:00</option>
									<option>9:00</option>
									<option>10:00</option>
									<option>11:00</option>
									<option>12:00</option>
									<option>13:00</option>
									<option>14:00</option>
									<option>15:00</option>
									<option>16:00</option>
								</select>
								<label for='cubicle'>Cubicle: </label>
								<select
									required
									value={cubicle}
									onChange={(e) => setCubicle(e.target.value)}
								>
									<option>SELECT</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
								</select>

								<button type='submit'>Confirm</button>
								<br />
								<small className='error-msg'>{errorMsg}</small>
							</form>
						)}
					</div>

					<div className='slots-summary-container'>
						<div className='slots-cards-container'>
							<div className='slot-title black-color'>Booked</div>
							<div className='slot-count'>{bookedSlots.length}</div>
						</div>
						<div className='slots-cards-container'>
							<div className='slot-title red-color'>Available</div>
							<div className='slot-count'>{availableSlots.length}</div>
						</div>
					  <div className='slots-cards-container'>
							<div className='slot-title'>Total</div>
							<div className='slot-count'>{bookings.length}</div>
						</div>
					</div>

					{/* search feature */}
					<div className='search-container'>
						<Search searchFunction={searchFunction} />
					</div>
					{/* DOWNLOAD FEATURE HERE */}
					<div className='download-link-container'>
						<CSVLink {...csvLink}>
							<img src={DownloadIcon} />
						</CSVLink>
					</div>
				</div>

			</div>
		</>
	);
};

export default BookingPage;
