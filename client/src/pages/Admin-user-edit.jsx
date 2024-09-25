import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const AdminEditUser = ()=>{
    const Base_URL = import.meta.env.VITE_FRONTEND_BASE_URL;
    const {id} = useParams(); 
    const[update,setUpdate] = useState({
        username:"",email:"",phone:""
    })
    const navigate = useNavigate();
    const {authToken} = useAuth();
    const getUser = async()=>{
       try {
            const response = await fetch(`${Base_URL}/api/admin/user/edit/${id}`,{
                method:'GET',
                headers:{
                    'Authorization':authToken
                }
            })
            if(response.ok){
                const data = await response.json();
                setUpdate(data.data)
            }
       } catch (error) {
            console.log(error);
       }
    }
    const handleInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setUpdate({
            ...update,
            [name]:value
        })

    }
    useEffect(()=>{
        getUser();
    },[]);
    const handleEditForm = async(e)=>{
        e.preventDefault();
        console.log("calling update API");
        console.log(update);
        try {
            const response = await fetch(`${Base_URL}/api/admin/user/update?id=${id}`,{
                method:'PATCH',
                headers:{
                    "Content-type":"application/json",
                    'Authorization':authToken
                },
                body:JSON.stringify(update)
            })
            if(response.ok){
                const res_data = await response.json();
                toast.success(res_data.message ? res_data.message:"Updated!")
                navigate("/admin/users");
            }else{
                toast.error("Something went wrong!")
            }
        } catch (error) {
            toast.error(error)
        }
    }


    return (
        <section>
                <div className="section-contact">
                    <div className="contact-content container">
                        <h1 className="main-heading mb-3">Update User</h1>
                    </div>
                    {/* main page contact */}
                    <div className="container grid grid-two-cols">
                        <section className="contact-form">
                        <form method="post" onSubmit={handleEditForm}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" id="username" placeholder="Enter username" autoComplete="off" required value={update.username} onChange={handleInput} />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="Enter email" autoComplete="off" required value={update.email} onChange={handleInput} />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone</label>
                                <input type="number" name="phone" id="phone" placeholder="Enter phone" autoComplete="off" required value={update.phone} onChange={handleInput} maxLength="10"/>
                            </div>  
                            <div>
                            <button className="btn btn-submit" type="submit">Update</button>
                            </div>
                        </form>
                    </section>
                    </div>
                </div>
    </section >
    )
}