
import EventCard from '../event-card/EventCard'
import './EventSection.styles.css'

const EventSection = () => {
    return (
        <section className="events-section">
            <div className="section-container">
                <h2>Events</h2>
                <div className="event-filters">
                    <button className="filter-btn active">ALL</button>
                    <button className="filter-btn">COMMUNITY</button>
                    <button className="filter-btn">CULTURE</button>
                    <button className="filter-btn">EDUCATION</button>
                    <button className="filter-btn">ENTERTAINMENT</button>
                    <button className="filter-btn">HEALTH & SPORT</button>
                </div>

                <div className="events-grid">
                    <EventCard
                        date={'28 January'}
                        name={'Karaoke Night'}
                        news_meta={'6:15 pm - 11:30 pm at PEPPER BAR & GRILL'}
                        imageUrl={'https://preview.lsvr.sk/pressville/wp-content/uploads/sites/2/2017/05/Karaoke-Night.jpg'}
                    />
                    <EventCard
                        date={'30 January'}
                        name={'Computer Training Workshop'}
                        news_meta={'5:00 pm - 7:30 pm at COMMUNITY CENTRE'}
                        imageUrl={'https://preview.lsvr.sk/pressville/wp-content/uploads/sites/2/2017/05/Computer-Training.jpg'}
                    />
                    <EventCard
                        date={'30 January'}
                        name={'Computer Training Workshop'}
                        news_meta={'5:00 pm - 7:30 pm at COMMUNITY CENTRE'}
                        imageUrl={'https://preview.lsvr.sk/pressville/wp-content/uploads/sites/2/2017/05/Computer-Training.jpg'}
                    />
                </div>
            </div>
        </section>
    )
}

export default EventSection