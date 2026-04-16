import './Footer.styles.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div className="footer-column first-column">
                    <h3>About Fort liberte</h3>
                    <p>Pressville is a high quality WordPress theme specifically crafted for small to medium municipalities.</p>
                </div>
                <div className="footer-column">
                    <h3>Places</h3>
                    <ul>
                        <li>Bars & Restaurants</li>
                        <li>Hotels & Apartments</li>
                        <li>Public Services</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Galleries</h3>
                    <ul>
                        <li>Town of Pressville</li>
                        <li>Historic Buildings</li>
                        <li>Parks in Pressville</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>More Info</h3>
                    <ul>
                        <li>Documentation</li>
                        <li>Support</li>
                        <li>Demo Credits</li>
                    </ul>
                </div>

            </div>
            <div className='footer-text'>
                <p>
                    You can purchase Pressville - Municipal WordPress Theme on Themeforest.net
                </p>
            </div>

        </footer>
    )
}

export default Footer