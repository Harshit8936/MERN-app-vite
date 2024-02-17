import { useState } from "react"

export const Login = ()=>{
    const [login,setLogin] = useState({
        email:"",
        password:""
    })
    const handleInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setLogin({
            ...login,
            [name]:value
        })
    }
    const handleLoginForm = (e)=>{
        e.preventDefault();
        console.log(login)
    }

    return(
        <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src="/images/login.png" alt="Fill the Login form" width={500} height={500} />
                            </div>
                            {/* lets login form */}
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Login Form</h1>
                                <br />
                                <form method="post" onSubmit={handleLoginForm}>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" placeholder="Enter email" autoComplete="off" required value={login.email} onChange={handleInput}/>
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" id="password" placeholder="Enter password" autoComplete="off" required value={login.password} onChange={handleInput}/>
                                    </div>
                                    
                                    <br />
                                    <button className="btn btn-submit" type="submit">Login</button>
                                </form>
                            </div>
                    </div>
                </div>
            </main>
        </section>
        </>
    )
}