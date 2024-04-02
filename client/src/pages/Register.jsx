import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

export const Register = ()=>{
    const [user,setUser] = useState({
        username:"",
        email:"",
        password:"",
        phone:""
    });
    const navigate = useNavigate();
    const {storeTokeninLS} = useAuth();
    const handleInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value
        })
    }
    const handleForm = async (e)=>{
        e.preventDefault();
       try {
       const response = await fetch(`http://localhost:5000/api/auth/register`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
       })
       const res_data = await response.json();
    //    console.log("RESPONSE",res_data)
       if(response.ok){
            storeTokeninLS(res_data.token)
            setUser({username:"",email:"",password:"",phone:""});
            toast.success(res_data.message ? res_data.message:"Register Success");
            navigate('/')
       }else{
        toast.error(res_data.message ? res_data.message:"Invalid Input")
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
                                <img src="/images/register.png" alt="Register" width={500} height={500} />
                            </div>
                            {/* lets registration form */}
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Registration Form</h1>
                                <br />
                                <form method="post" onSubmit={handleForm}>
                                    <div>
                                        <label htmlFor="username">Username</label>
                                        <input type="text" name="username" id="username" placeholder="Enter username" autoComplete="off" required value={user.username} onChange={handleInput}/>
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" placeholder="Enter email" autoComplete="off" required value={user.email} onChange={handleInput}/>
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" id="password" placeholder="Enter password" autoComplete="off" required value={user.password} onChange={handleInput}/>
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Phone</label>
                                        <input type="number" name="phone" id="phone" placeholder="Enter phone" autoComplete="off" required value={user.phone} onChange={handleInput} maxLength="10"/>
                                    </div>
                                    <br />
                                    <button className="btn btn-submit" type="submit">Register</button>
                                </form>
                            </div>
                    </div>
                </div>
            </main>
        </section>
        </>
    )
}