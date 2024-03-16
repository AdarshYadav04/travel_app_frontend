import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router"
import Navbar from "../../Navbar/Navbar"
import HotelImages from "../../HotelImages/HotelImages"
import HotelDetails from "../../HotelDetails/HotelDetails"
import FinalPrice from "../../FinalPrice/FinalPrice"
import "./SingleHotel.css"

const SingleHotel=()=>{
    const {id}=useParams()
    const[singleHotel,setSingleHotel]=useState({})
    useEffect(()=>{
        (async ()=>{
            try {
                const {data}=await axios.get(`http://localhost:3500/api/hotels/${id}`)
                setSingleHotel(data)
            } catch (error) {
                console.log(error)
                
            }
        })()

        

    },[id])

    const{name,state}=singleHotel
    return (
        <Fragment>
             <Navbar/>
            
            <main className="single-hotel-page">
                <p className="hotel-name-add">{name}, {state}</p>
                <HotelImages singleHotel={singleHotel}/>
                <div className="d-flex">
                    <HotelDetails singleHotel={singleHotel}/>
                    <FinalPrice singleHotel={singleHotel}/>
                </div>
            </main> 
        </Fragment>
    )
}
export default SingleHotel