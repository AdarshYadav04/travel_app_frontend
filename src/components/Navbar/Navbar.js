import "./Navbar.css"
import { useDate } from "../../Context/date-context"
const Navbar=()=>{
    const {destination,checkInDate,checkOutDate,guests,dateDispatch}=useDate()

    const handleSearchClick=()=>{
        dateDispatch({
            type:"OPEN_SEARCH_MODAL"
        })
          
    }
    return (
        <header className="heading d-flex align-center">
            
                <h1 className="heading-1">
                    <a className="link" href="/">Travel1O</a>
                </h1>
                <div  className="form-container d-flex align-center cursor-pointer shadow" onClick={handleSearchClick}>
                    <span className="form-option">{destination || "Any Where"}</span>
                    <span className="border-right-1px"></span>
                    <span className="form-option">
                        {checkInDate && checkOutDate ?`${checkInDate.toLocaleDateString("en-us",{day: "numeric",month:"short",})}-${checkOutDate.toLocaleDateString("en-us",{day: "numeric",month:"short"})}`:"any Week"}
                    </span>
                    <span className="border-right-1px"></span>
                    <span className="form-option">{guests>0 ? `${guests} guests`:"Add Guests"}</span>
                    <span class="search material-symbols-outlined">search</span>
                </div>
            
            <nav className="d-flex align-center gap-large">
                <div className="nav d-flex align-center cursor-pointer">
                    <span class="material-symbols-outlined profile-option menu">menu</span>
                    <span class="material-symbols-outlined profile-option person">person</span>
                </div>
                
            </nav>
        </header>
    )
}

export default Navbar