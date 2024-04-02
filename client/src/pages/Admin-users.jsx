import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const AdminUsers = ()=>{
    const[admin,setAdmin] = useState([]);
    const {authToken} = useAuth();
    const getallUsers = async()=>{
        try {
            const response = await fetch('http://localhost:5000/api/admin/users',{
                method:'GET',
                headers:{
                    'Authorization':authToken
                }
            });
            if(response.ok){
                const data = await response.json();
                setAdmin(data.users);
                console.log(admin)
            }
        } catch (error) {
            console.log(error);
        }
    }
    // delete the user
    const deleteUser = async(id)=>{
        try {
            const response = await fetch(`http://localhost:5000/api/admin/user/delete/${id}`,{
                method:'DELETE',
                headers:{
                    'Authorization':authToken
                }
            });
            if(response.ok){
                const data = await response.json();
                toast.success(data.message ? data.message : 'Deleted !')
                getallUsers();
            }else{
                toast.error(data.message ? data.message : 'Something went Wrong !')
            }
        } catch (error) {
            toast.error(error)
        }
    }
    useEffect(()=>{
        getallUsers();
    },[])
            return(
                <>
                <div className="container">
                <h1>Admin users data</h1>
                </div>
                <div className="container admin-users">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {admin && admin.length>0 && admin.map((value,index)=>{
                    return <tr key={index}>
                    <td>{index}</td>
                    <td>{value.username}</td>
                    <td>{value.email}</td>
                    <td>{value.phone}</td>
                    <td><Link to={`/admin/users/${value._id}/edit`}>Edit</Link></td>
                    <td><button onClick={()=>{deleteUser(value._id)}}>Delete</button></td>
                </tr>
                })}
                    </tbody>
                </table>
                </div>
                
                </>
            )
}