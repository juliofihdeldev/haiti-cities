import './NewsCard.styles.css'
const NewsCard = ({ title, url, news_meta }: any) => {
    return (
        <article className="news-card">
            <img src={url} />
            <div className="news-content">
                <div className="news-meta">{news_meta}</div>
                <h3>{title}</h3>
            </div>
        </article>

    )
}

export default NewsCard