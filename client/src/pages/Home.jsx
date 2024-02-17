import { NavLink } from "react-router-dom"

export const Home = () => {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>We are world best IT Company</p>
                            <h1>Welcome to the Technical Guru</h1>
                            <p>
                                Are you ready to take your business to the next level with cutting-edge IT solutions ? Look no further! At Technical Guru, we specialize in providing innovative IT services and solutions tailored to meet your unique needs.
                            </p>
                            <div className="btn btn-group">
                                <NavLink href="/contact">
                                    <button className="btn">connect now</button>
                                </NavLink>
                                <NavLink href="/sevices">
                                    <button className="btn secondary-btn">learn more</button>
                                </NavLink>
                            </div>
                        </div>
                        {/* images */}
                        <div className="hero-image">
                            <img src="/images/home1.png" alt="HOME" width={600} height={400} />
                        </div>
                    </div>
                </section>
            </main>

    {/*2nd section */}
            <section className="section-analytics">
                    <div className="container grid grid-four-cols">
                        <div className="div1">
                            <h2>50+</h2>
                            <p>registered companies</p>
                        </div>
                        <div className="div1">
                            <h2>100,00+</h2>
                            <p>Happy clients</p>
                        </div>
                        <div className="div1">
                            <h2>500+</h2>
                            <p>well known developers</p>
                        </div>
                        <div className="div1">
                            <h2>24/7</h2>
                            <p>services</p>
                        </div>
                    </div>
            </section>
            {/* 3rd section */}
            <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        {/* images */}
                        <div className="hero-image">
                            <img src="/images/home.jpg" alt="HOME" width={600} height={400} />
                        </div>
                        <div className="hero-content">
                            <p>We are here to help you</p>
                            <h1>Get started today</h1>
                            <p>
                                Ready to take first step towards a more efficient and secure IT infrastructure? Connect us today for a free consultation. Technical Guru can help your business thrive in the digital age.
                                </p>
                            <div className="btn btn-group">
                                <NavLink href="/contact">
                                    <button className="btn">connect now</button>
                                </NavLink>
                                <NavLink href="/sevices">
                                    <button className="btn secondary-btn">learn more</button>
                                </NavLink>
                            </div>
                        </div>
                        
                    </div>
                </section>
        </>
    )
}
