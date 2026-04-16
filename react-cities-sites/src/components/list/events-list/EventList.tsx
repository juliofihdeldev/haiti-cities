import './EventList.styles.css'
const EventList = () => {
    return (
        <div className="eventList">
            <h1>Events</h1>
            <div className="filters">
                <div className="category all">ALL</div>
                <div className="category">COMMUNITY</div>
                <div className="category">CULTURE</div>
                <div className="category">EDUCATION</div>
                <div className="category">ENTERTAINMENT</div>
                <div className="category">HEALTH & SPORT</div>
            </div>

            <div className="date-filters">
                <div className="date-input">
                    <label>DATE FROM:</label>
                    <input type="text" placeholder="Choose Date" />
                    <span className="calendar-icon">📅</span>
                </div>
                <div className="date-input">
                    <label>DATE TO:</label>
                    <input type="text" placeholder="Choose Date" />
                    <span className="calendar-icon">📅</span>
                </div>
                <button className="filter-btn">FILTER</button>
                <a href="#" className="reset-filter">Reset filter</a>
            </div>

            <div className="timeline">
                <div className="event">
                    <div className="event-date">
                        <div className="event-day">27</div>
                        <div className="event-month">January</div>
                        <div className="event-year">2025</div>
                    </div>
                    <div className="event-image">
                        <img src="/api/placeholder/100/100" alt="Business Workshop" />
                    </div>
                    <div className="event-content">
                        <h2><a href="#" className="event-title">Business Workshop</a></h2>
                        <p className="event-info">4:30 pm - 6:00 pm at <a href="#">Community Centre</a></p>
                        <a href="../events-details/events-details.html" className="more-info">MORE INFO</a>
                    </div>
                </div>

                <div className="event">
                    <div className="event-date">
                        <div className="event-day">28</div>
                        <div className="event-month">January</div>
                        <div className="event-year">2025</div>
                    </div>
                    <div className="event-image">
                        <img src="/api/placeholder/100/100" alt="Karaoke Night" />
                    </div>
                    <div className="event-content">
                        <h2><a href="#" className="event-title">Karaoke Night</a></h2>
                        <p className="event-info">6:15 pm - 11:30 pm at <a href="#">Pepper Bar & Grill</a></p>
                        <a href="../events-details/events-details.html" className="more-info">MORE INFO</a>
                    </div>
                </div>

                <div className="event">
                    <div className="event-date">
                        <div className="event-day">30</div>
                        <div className="event-month">January</div>
                        <div className="event-year">2025</div>
                    </div>
                    <div className="event-image">
                        <img src="/api/placeholder/100/100" alt="Computer Training Workshop" />
                    </div>
                    <div className="event-content">
                        <h2><a href="#" className="event-title">Computer Training Workshop</a></h2>
                        <p className="event-info">5:00 pm - 7:30 pm at <a href="#">Community Centre</a></p>
                        <a href="../events-details/events-details.html" className="more-info">MORE INFO</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EventList
