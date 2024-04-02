import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';



export const Login = ()=>{
    const [login,setLogin] = useState({
        email:"",
        password:""
    })
    const navigate = useNavigate();
    const {storeTokeninLS} = useAuth();
    const handleInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setLogin({
            ...login,
            [name]:value
        })
    }
    const handleLoginForm = async(e)=>{
        e.preventDefault();
        try {
        const response = await fetch(`http://localhost:5000/api/auth/login`,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(login)
        })
        const res_data = await response.json();
        if(response.ok){
            storeTokeninLS(res_data.token);
            setLogin({email:"",password:""})
            toast.success(res_data.message ? res_data.message:"Login Success")
            navigate("/");
        }else{
            toast.error(res_data.message ? res_data.message:"Invalid Creds")
        }
    } catch (error) {
        toast.error(error)
    }
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