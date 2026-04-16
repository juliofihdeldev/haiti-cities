
import './EventDetails.styles.css'

const EventDetails = () => {
    return (
        <main className="eventDetail content">
            <div className="event-header">
                <a href="#" className="event-category">HEALTH & SPORT</a>
                <h1 className="event-title">Morning Yoga</h1>
            </div>

            <img src="/api/placeholder/1200/500" alt="Morning Yoga" className="hero-image" />

            <section className="event-details">
                <div className="details-grid">
                    <div className="detail-item">
                        <i>📅</i>
                        <div className="detail-content">
                            <h3>Date</h3>
                            <p>February 3, 2025</p>
                        </div>
                    </div>
                    <div className="detail-item">
                        <i>⏰</i>
                        <div className="detail-content">
                            <h3>Time</h3>
                            <p>7:00 am - 8:45 am</p>
                        </div>
                    </div>
                    <div className="detail-item">
                        <i>📍</i>
                        <div className="detail-content">
                            <h3>Community Centre</h3>
                            <p>300 Senior Dr NE,<br />Pressville, VT 24305, USA</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="event-description">
                <p>Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India. There is a broad variety of Yoga schools, practices, and goals in Hinduism, Buddhism, and Jainism. Among the most well-known types of yoga are Hatha yoga and Raja yoga.</p>
            </section>

            <section className="map-container">
                <div className="map-nav">
                    <button className="active">Map</button>
                    <button>Satellite</button>
                </div>
                <iframe
                    className="map-frame"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0"
                    loading="lazy">
                </iframe>
            </section>
        </main>
    )
}
export default EventDetails