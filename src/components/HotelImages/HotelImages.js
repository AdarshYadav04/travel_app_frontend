import "./HotelImages.css"

const HotelImages=({singleHotel})=>{
    console.log(singleHotel)
    const {image,imageArr}=singleHotel
    
    return(
        <div className="hotel-image-container d-flex gap-small">
            <div className="primary-image-container">
                <img className="hotel-img primary-img" src={image} alt="primary-image"/>
            </div>
            <div className="d-flex wrap gap-small">
                {
                    imageArr && imageArr.map(image=><img key={image} className="hotel-img" src={image} alt="hotel-image"/>)
                }
            </div>

        </div>
    )
}
export default HotelImages