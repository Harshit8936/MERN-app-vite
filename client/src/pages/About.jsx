import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export const About = () => {
    const {user} = useAuth(); 
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                        <p>Welcome, {user? user.username : `to our website !`}</p>
                            <h1>Why choose Us ?</h1>
                            <p>
                                Expertise our team consist of experienced IT professional who are passionate about staying up-to-date with the latest industry trends.
                            </p>
                            <p>
                                Expertise our team consist of experienced IT professional who are passionate about staying up-to-date with the latest industry trends.
                            </p>
                            <p>
                                Expertise our team consist of experienced IT professional who are passionate about staying up-to-date with the latest industry trends.
                            </p>
                            <p>
                                Expertise our team consist of experienced IT professional who are passionate about staying up-to-date with the latest industry trends.
                            </p>
                            <div className="btn btn-group">
                                <NavLink to="/contact">
                                    <button className="btn">Connect now</button>
                                </NavLink>
                                <button className="btn secondary-btn">Learn more</button>
                            </div>
                        </div>
                        {/* images */}
                        <div className="hero-image">
                            <img src="/images/home1.png" alt="HOME" width={600} height={400} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}