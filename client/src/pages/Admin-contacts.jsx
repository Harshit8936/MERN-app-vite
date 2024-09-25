import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';


export const AdminContacts = ()=>{
    const Base_URL = import.meta.env.VITE_FRONTEND_BASE_URL;
    const {authToken} = useAuth();
    const[contact,setContact] = useState([]);
    const allContacts = async()=>{
                try {
                    const response = await fetch(`${Base_URL}/api/admin/contacts`,{
                        method:'GET',
                        headers:{
                            'Authorization':authToken
                        }
                    })
                    if(response.ok){
                        const res_data = await response.json();
                        setContact(res_data.contacts)
                        // console.log(contact);
                    }else{
                        toast.error("Sonething went wrong!")
                    }

                } catch (error) {
                    toast.error(error)
                }
    }
    const handleContact = async(id)=>{
        try {
            const response = await fetch(`${Base_URL}/api/admin/contacts/delete/${id}`,{
                method:'DELETE',
                headers:{
                    'Authorization':authToken
                }
            })
            if(response.ok){
                const data = await response.json();
                allContacts()
                toast.success(data.message ? data.message : "Deleted success !")
            }
        } catch (error) {
            toast.error(error)
        }
    }
    useEffect(()=>{
        allContacts()
    },[])
    return(
        <>
        <div className="container">
                <h1>Admin Contacts data</h1>
                </div>
                <div className="container admin-users">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contact && contact.length>0 && contact.map((value,index)=>{
                            const {username,email,message,_id} = value
                            return <tr key={index}>
                                    <td>{index}</td>
                                    <td>{username}</td>
                                    <td>{email}</td>
                                    <td>{message}</td>
                                    <td><button className="btn" onClick={()=>{handleContact(_id)}}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
                </div>
        
        </>

    )
}