import './InterestingSection.styles.css'
const InterestingSection = () => {
    return (
        <div className="intersting_container">
            <section>
                <h2 className="section-title">Interesting Places</h2>

                <div className="place-item">
                    <img src="https://preview.lsvr.sk/pressville/wp-content/uploads/sites/2/2017/05/Bowling-Point-200x200.jpg" alt="Bowling Point" className="place-image" />
                    <div className="place-content">
                        <h3><a href="#">Bowling Point</a></h3>
                        <p className="place-address">165 Valley St NE,<br />Pressville, VT 24305, USA</p>
                        <span className="place-category">in ENTERTAINMENT</span>
                    </div>
                </div>

                <div className="place-item">
                    <img src="https://preview.lsvr.sk/pressville/wp-content/uploads/sites/2/2017/05/Elementary-School-200x200.jpg" alt="Elementary School" className="place-image" />
                    <div className="place-content">
                        <h3><a href="#">Elementary School</a></h3>
                        <p className="place-address">297 Stanley St,<br />Pressville, VT 24305, USA</p>
                        <span className="place-category">in EDUCATION</span>
                    </div>
                </div>

                <div className="place-item">
                    <img src="https://preview.lsvr.sk/pressville/wp-content/uploads/sites/2/2017/05/Recreation-Centre-200x200.jpg" alt="Recreation Centre" className="place-image" />
                    <div className="place-content">
                        <h3><a href="#">Recreation Centre</a></h3>
                        <p className="place-address">300 Stanley St,<br />Pressville, VT 24305, USA</p>
                        <span className="place-category">in PUBLIC SERVICES</span>
                    </div>
                </div>

                <a href="#" className="more-btn">MORE PLACES</a>
            </section>


            <section>
                <h2 className="section-title">Latest Galleries</h2>

                <div className="gallery-item">
                    <img src="https://preview.lsvr.sk/pressville/wp-content/uploads/sites/2/2017/05/Town-of-Pressville-4-200x200.jpg" alt="Town of Pressville" className="gallery-image" />
                    <div className="gallery-content">
                        <h3><a href="#">Town of Pressville</a></h3>
                        <div className="gallery-meta">
                            May 4, 2018<br />
                            8 images
                        </div>
                    </div>
                </div>

                <div className="gallery-item">
                    <img src="https://preview.lsvr.sk/pressville/wp-content/uploads/sites/2/2017/05/Town-of-Pressville-200x200.jpg" alt="Historic Buildings" className="gallery-image" />
                    <div className="gallery-content">
                        <h3><a href="#">Historic Buildings</a></h3>
                        <div className="gallery-meta">
                            May 4, 2018<br />
                            8 images
                        </div>
                    </div>
                </div>

                <div className="gallery-item">
                    <img src="https://preview.lsvr.sk/pressville/wp-content/uploads/sites/2/2017/05/Parks-200x200.jpg" alt="Parks in Pressville" className="gallery-image" />
                    <div className="gallery-content">
                        <h3><a href="#">Parks in Pressville</a></h3>
                        <div className="gallery-meta">
                            May 4, 2018<br />
                            8 images
                        </div>
                    </div>
                </div>

                <a href="#" className="more-btn">MORE GALLERIES</a>
            </section>


            <section>
                <h2 className="section-title">Latest Documents</h2>

                <div className="document-item">
                    <div className="document-icon">📄</div>
                    <div className="document-content">
                        <a href="#">Application_for_Solar_Panel_Permit.doc</a>
                        <span className="document-size">571 kB</span>
                    </div>
                </div>

                <div className="document-item">
                    <div className="document-icon">📄</div>
                    <div className="document-content">
                        <a href="#">Short_Environmental_Assessment_Form.pdf</a>
                        <span className="document-size">274 kB</span>
                    </div>
                </div>

                <div className="document-item">
                    <div className="document-icon">📄</div>
                    <div className="document-content">
                        <a href="#">Facility_Use_Application.pdf</a>
                        <span className="document-size">271 kB</span>
                    </div>
                </div>

                <div className="document-item">
                    <div className="document-icon">🖼️</div>
                    <div className="document-content">
                        <a href="#">Water_Resources_Map.jpg</a>
                        <span className="document-size">70 kB</span>
                    </div>
                </div>

                <div className="document-item">
                    <div className="document-icon">📄</div>
                    <div className="document-content">
                        <a href="#">Application_for_Roofing_Permit.doc</a>
                        <span className="document-size">610 kB</span>
                        <span className="external-tag">EXTERNAL</span>
                    </div>
                </div>

                <div className="document-item">
                    <div className="document-icon">📄</div>
                    <div className="document-content">
                        <a href="#">Building_Permit_Application.doc</a>
                        <span className="document-size">610 kB</span>
                    </div>
                </div>

                <a href="#" className="more-btn">MORE DOCUMENTS</a>
            </section>
        </div>
    )
}
export default InterestingSection
