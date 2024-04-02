import { useState } from "react"
import { useAuth } from "../store/auth"

export const Contact = () => {
    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: ""
    })
    const [userData,setUserData] = useState(true)
    const {user} = useAuth();
    if(userData && user){
        setContact({
            username:user.username,
            email:user.email,
            message: ""
        })
        setUserData(false)
    }
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setContact({
            ...contact,
            [name]: value
        })
    }
    const handleContactForm = async(e) => {
        e.preventDefault();
        console.log(contact)
        try {
            const response = await fetch(`http://localhost:5000/api/contact`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(contact)
            })
            if(response.ok){
                setContact({message:""})
                // navigate("/");
            }
        } catch (error) {
            console.log("Contact",error);
        }
    }

    return (
        <section>
                <div className="section-contact">
                    <div className="contact-content container">
                        <h1 className="main-heading mb-3">Contact Us</h1>
                    </div>
                    {/* main page contact */}
                    <div className="container grid grid-two-cols">
                        <div className="contact-image">
                        <img src="/images/contact.jpg" alt="Fill the Contact form" width={500} height={400} />
                        </div>
                        <section className="contact-form">
                        <form method="post" onSubmit={handleContactForm}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" id="username" placeholder="Enter username" autoComplete="off" required value={contact.username} onChange={handleInput} />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="Enter email" autoComplete="off" required value={contact.email} onChange={handleInput} />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" cols="30" rows="5" autoComplete="off" required value={contact.message} onChange={handleInput}></textarea>
                            </div>  
                            <div>
                            <button className="btn btn-submit" type="submit">Sent</button>
                            </div>
                        </form>
                    </section>
                        
                    </div>
                    
                </div>
                <section className="mb-3">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.854032860613!2d77.35126997457043!3d28.57414558673138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce54f9f9059e3%3A0xe745316aa9898ea5!2sLogix%20city%20centre!5e0!3m2!1sen!2sin!4v1707758884582!5m2!1sen!2sin" width="100%" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>
    </section >
    )
}