import { NavLink } from 'react-router-dom'
import './Header.styles.css'

const Header = () => {
    return (
        <div className='header-container'>
            <header className="header">
                <div className="header-content">
                    <div className="logo-container">

                        <img src={'	https://preview.lsvr.sk/pressville/wp-content/uploads/sites/2/2017/05/pressville-logo.png'}
                            alt="Pressville Logo" className="logo" />
                        <div>
                            <h1 className="site-title">Fort Liberte 🇭🇹</h1>
                            <p className="site-description">This is a Presentation of Fort Liberte - La ville de Fort Liberté
                                Département du Nord-Est, Haïti🇭🇹🇭🇹🇭🇹</p>
                        </div>
                    </div>
                </div>
            </header>
            <nav className="main-nav">
                <div className="nav-container">
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `${isActive ? 'active-link' : ''}`
                                }
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/events"
                                className={({ isActive }) =>
                                    `${isActive ? 'active-link' : ''}`
                                }
                            >
                                EVENTS
                            </NavLink>
                        </li>
                        <li><a href="./pages/news/news.html">NEWS</a></li>
                        <li>
                            <NavLink
                                to="/business"
                                className={({ isActive }) =>
                                    `${isActive ? 'active-link' : ''}`
                                }
                            >
                                BUSINESSES
                            </NavLink>
                        </li>
                        <li><a href="#">SCHOOL</a></li>
                        <li><a href="#">CHURCH</a></li>
                        <li><a href="#">GALLERIES</a></li>
                        <li><a href="#">PEOPLE</a></li>
                        <li><a href="./pages/Interesting-section/interesting.html"> PLACES</a></li>
                    </ul>
                    <button className="search-btn">&#128269;</button>
                </div>
            </nav>
        </div>
    )
}

export default Header