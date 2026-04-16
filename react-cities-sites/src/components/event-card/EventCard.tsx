import './EventCard.styles.css'
const EventCard = ({ date, name, news_meta }: any) => {
    return (
        <article className="event-card">
            <img src="https://preview.lsvr.sk/pressville/wp-content/uploads/sites/2/2017/05/Business-Workshop.jpg" alt="Business Workshop" />
            <div className="event-content">
                <div className="event-date">{date}</div>
                <h3>{name}</h3>
                <p> {news_meta || '4:30 pm - 6:00 pm at COMMUNITY CENTRE'}</p>
            </div>
        </article>

    )
}

export default EventCard