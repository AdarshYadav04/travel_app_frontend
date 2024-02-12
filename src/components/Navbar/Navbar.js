import "./Navbar.css"
const Navbar=()=>{
    return (
        <header className="heading d-flex align-center">
            
                <h1 className="heading-1">
                    <a className="link" href="/">Travel1O</a>
                </h1>
                <div  className="form-container d-flex align-center cursor-pointer shadow">
                    <span className="form-option">Any Where</span>
                    <span className="border-right-1px"></span>
                    <span className="form-option">Any Week</span>
                    <span className="border-right-1px"></span>
                    <span className="form-option">Add Guests</span>
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