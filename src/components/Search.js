//usestate
import {useState}from 'react';

//css
import '../css/Search.css';
//component
import SearchResults from '../components/SearchResult.js';
const Search=(props)=>{
    //states
    const [searchEmail, setSearchEmail]=useState('');
    const [searchResult,setSearchResult]=useState([]);

    const onFormSearchHandler=(event)=>{
        event.preventDefault();
            // console.log('this is search handler from search js')
            // console.log(searchEmail);
            setSearchResult(props.searchFunction(searchEmail));
    }


    return(
        <>
        <form 
            className='search-form'
            onSubmit={onFormSearchHandler}>
            <input
                    type='search'
                    placeholder='enter email here'
                    value={searchEmail}
                    onChange={(e)=> {
                        setSearchEmail(e.target.value);
                        onFormSearchHandler(e);
                    }
                    }
                ></input>
                <button 
                    type='submit'
                >Search
                </button>
        </form>
            
            {/* search results here */}
           <table className='searched-table-result'>
            
            <tr className='searched-row-header'>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Time</th>
                <th>Cubicle</th>
                <th>Address</th>
                <th>Status</th>
                <th>Age</th>
                <th>Mobile Number</th>
                <th>Action</th>
            </tr>
            {
          
            searchResult.map(result=>{
                return <SearchResults
                    key={result._id}
                    id={result._id}
                    firstName={result.firstName}
                    lastName={result.lastName}
                    email={result.email}
                    date={result.date}
                    time={result.time}
                    cubicle={result.cubicle}
                    address={result.address}
                    status={result.status}
                    mobileNumber={result.mobileNumber}
                />
            })
            }
        </table>

        </>
    )
}

export default Search;