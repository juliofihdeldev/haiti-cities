import './BusinessList.styles.css'
const BusinessList = () => {
    return (
        <div className="businessList">
            <h1>Business</h1>
            <div className="filters">
                <div className="category all">ALL</div>
                <div className="category">Hotel</div>
                <div className="category">Resto bar</div>
                <div className="category">Store</div>
                <div className="category">Market</div>
                <div className="category">others</div>
            </div>

            <div className="date-filters">
                <div className="date-input">
                    <input type="text" placeholder="Search by name" />
                </div>
                <button className="filter-btn">FILTER</button>
                <a href="#" className="reset-filter">Reset filter</a>
            </div>

            <div className="timeline">
                <div className="business">
                    <div className="business-image">
                        <img src="/api/placeholder/100/100" alt="Business Workshop" />
                    </div>
                    <div className="business-content">
                        <h2><a href="#" className="business-title">Business Workshop</a></h2>
                        <p className="business-info">4:30 pm - 6:00 pm at <a href="#">Community Centre</a></p>
                        <a href="../businesss-details/businesss-details.html" className="more-info">Visitez</a>
                    </div>
                </div>


                <div className="business">
                    <div className="business-image">
                        <img src="/api/placeholder/100/100" alt="Computer Training Workshop" />
                    </div>
                    <div className="business-content">
                        <h2><a href="#" className="business-title">Computer Training Workshop</a></h2>
                        <p className="business-info">5:00 pm - 7:30 pm at <a href="#">Community Centre</a></p>
                        <a href="../businesss-details/businesss-details.html" className="more-info">MORE INFO</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BusinessList
