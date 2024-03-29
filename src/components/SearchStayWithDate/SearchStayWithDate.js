import DateSelector from "../DateSelector/DateSelector"
import "./SearchStayWithDate.css"
import { useDate } from "../../Context/date-context"
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchStayWithDate=()=>{
    const {destination,guests,isSearchResultOpen,dateDispatch}=useDate()
    const[destinations,setDestinations]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        
        (async()=>{
            try {
                const {data}=await axios.get(`http://localhost:3500/api/destinations`)
                setDestinations(data)
                
                
            } catch (error) {
                console.log(error)
                
            }
            
        })()
    
    },[])
    const handleSearchResultClick=(address)=>{
        dateDispatch({
            type:"DESTINATION",
            payload:address
        })

    }
    const handleDestinationChange=(event)=>{
        dateDispatch({
            type:"DESTINATION",
            payload:event.target.value
        })

    }
    const handleGuestChange=(event)=>{
        dateDispatch({
            type:"GUESTS",
            payload:event.target.value
        })
    }
    const destinationOptions = destinations.filter(
        ({ address, city, state, country }) =>
          address.toLowerCase().includes(destination.toLowerCase()) ||
          city.toLowerCase().includes(destination.toLowerCase()) ||
          state.toLowerCase().includes(destination.toLowerCase()) ||
          country.toLowerCase().includes(destination.toLowerCase())
      );
    const handleDestinationFocus=()=>{
        dateDispatch({
            type:"SHOW_SEARCH_RESULT"
        })
    }
    const handleSearchButtonClick=()=>{
        dateDispatch({
            type:"CLOSE_SEARCH_MODAL"
        })
        navigate(`/hotels/${destination}`)

    }
    
    return(
        <div className="destination-container">
            <div className="destionation-options d-flex align-center absolute">
                <div className="location-container">
                    <label className="label">Where</label>
                    <input onFocus={handleDestinationFocus} value={destination} onChange={handleDestinationChange} className="input search-dest" placeholder="Search Destination" autoFocus/>
                </div>
                <div className="location-container">
                    <label className="label">Check In</label>
                    <DateSelector  checkInType="in"/>
                </div>
                <div className="location-container">
                    <label className="label">Check Out</label>
                    <DateSelector  checkInType="out"/>
                </div>
                <div className="location-container">
                    <label className="label">No. of Guests</label>
                    <input value={guests} className="input search-dest" placeholder="Add Guests" onChange={handleGuestChange}/>
                </div>
                <div className="search-container d-flex align-center cursor" onClick={handleSearchButtonClick}>
                    <span className="material-symbols-outlined">Search</span>
                    <span>Search</span>
                </div>
            </div>
            {
                isSearchResultOpen &&
                <div className="search-result-container absolute">
                    {
                        destinationOptions && destinationOptions.map(({address,city})=>(
                            <p className="p cursor-pointer" onClick={()=>handleSearchResultClick(address)}>{address},{city}</p>)
                        )
                    }
                </div>
            }
        </div>
    )
}
export default SearchStayWithDate