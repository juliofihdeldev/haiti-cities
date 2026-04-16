import NewsCard from '../news-card/NewsCard'
import './NewSection.styles.css'

const NewsSection = () => {
    return (
        <>
            <section className="news-section">
                <div className="section-container">
                    <div className="section-header">
                        <div>
                            <h2>Latest News</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                        </div>
                    </div>
                    <div className="news-grid">

                        <NewsCard
                            url={"https://preview.lsvr.sk/pressville/wp-content/uploads/sites/2/2017/05/Guidelines-for-Holding-a-Garage-Sale.jpg"}
                            news_meta={"July 4, 2021 in GOVERNMENT"}
                            title={"Guidelines for Holding a Garage Sale"}
                        />

                        <NewsCard
                            url={"https://preview.lsvr.sk/pressville/wp-content/uploads/sites/2/2017/05/Summer-Nights-at-the-Library.jpg"}
                            news_meta={"June 22, 2021 in GOVERNMENT"}
                            title={"Guidelines for Holding a Garage Sale"}
                        />

                        <NewsCard
                            url={"https://preview.lsvr.sk/pressville/wp-content/uploads/sites/2/2017/05/Guidelines-for-Holding-a-Garage-Sale.jpg"}
                            news_meta={"June 18, 2021 in TOURISM"}
                            title={"Summer Nights at the Library"}
                        />

                    </div>
                </div>
            </section>

        </>
    )
}

export default NewsSection