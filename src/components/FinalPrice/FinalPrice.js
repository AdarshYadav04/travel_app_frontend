import "./FinalPrice.css"
import { useDate } from "../../Context/date-context"
import DateSelector from "../DateSelector/DateSelector"

const FinalPrice=({singleHotel})=>{
    const {price,rating}=singleHotel
    const {guests,dateDispatch}=useDate()
    const handleGuestChange=(event)=>{
        dateDispatch({
            type:"GUESTS",
            payload: event.target.value,
        })

    }
    return (
        <div className="price-details-container d-flex direction-column gap shadow">
            <div className="d-flex align-center justify-space-between">
                <p><span fs-bold fs-large>Rs. {price}</span>night</p>
                <span className="rating d-flex align-center">
                <span className="material-symbols-outlined">star </span>
                <span>{rating}</span>
                </span>
            </div>
            <div className="d-flex direction-column">
                <div className="grid-container-two-col selected-dates">
                    <div className="checkin loc-container">
                        <label className="label">Check in</label>
                        <DateSelector checkInType="in"/>
                    </div>
                    <div className="checkin loc-container">
                        <label className="label">Check out</label>
                        <DateSelector checkInType="out"/>
                    </div>
                </div>
                <div className="guests gutter-sm">
                    <p>GUESTS</p>
                    {
                        guests<=0?(<input className="guest-count-input" type="number" placeholder="Add Guests" value={guests} onChange={handleGuestChange}/>):(<span>{guests} guests</span>)
                    }
                    
                </div>
            </div>
            <div>
                <button className="button btn-reserve btn-primary cursor">reserve</button>
            </div>
            <div className="price-distribution d-flex direction-column">
                <div className="final-price d-flex align-center justify-space-between">
                    <span className="span">Rs. {price} x 2 nights</span>
                    <span className="span">Rs. {price*2}</span>
                </div>
                <div className="final-price d-flex align-center justify-space-between">
                    <span className="span">Service fee</span>
                    <span>Rs. 200</span>
                </div>
                <div className="final-price d-flex align-center justify-space-between">
                    <span className="span">Total</span>
                    <span className="span">Rs. {price*2+200}</span>
                </div>

            </div>
        </div>
    )
}
export default FinalPrice