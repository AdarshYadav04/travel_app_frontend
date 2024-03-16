import Categories from "../../Categories/Categories";
import Navbar from "../../Navbar/Navbar";
import HotelCard from "../../HotelCard/HotelCard";
import SearchStayWithDate from "../../SearchStayWithDate/SearchStayWithDate";

import { Fragment, useEffect, useState } from "react";
import { useCategory } from "../../../Context/category-context";
import { useDate } from "../../../Context/date-context";


import "./home.css"
import axios from "axios";
const Home=()=>{
    const[hotels,setHotels]=useState([])
    const{hotelCategory}=useCategory()
    const {isSearchModalOpen}=useDate()
    
    useEffect(()=>{
        
        const showHotels=async()=>{
            try {
                const {data}=await axios.get(`http://localhost:3500/api/hotels?category=${hotelCategory}`)
                setHotels(data)
                
            } catch (error) {
                console.log(error)
                
            }
            
        }
        showHotels()
    
    },[hotelCategory])
    return (
        <div className="relative">
            <Navbar/>
            <Categories/>
            <main className="main d-flex align-center wrap gap-larger">
                {
                hotels.map(hotel=>{
                    return(
                        <HotelCard key={hotel._id} hotel={hotel}/>
                    )
                })
            }
            </main>
            {isSearchModalOpen && <SearchStayWithDate/>}
        </div>
    )
}

export default Home