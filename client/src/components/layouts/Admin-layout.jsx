import { NavLink,Outlet,Navigate } from "react-router-dom"
import { FaUsers } from "react-icons/fa";
import { AiFillContacts } from "react-icons/ai";
import { useAuth } from "../../store/auth";
import { toast } from 'react-toastify';



export const AdminLayout = ()=>{
    const {user,isLoading} = useAuth();
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(!user.isAdmin){
        // toast.error("Sorry It's not for you")
        return <Navigate to="/"/>
    }
    return(
        <>
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><NavLink to="/admin/users"><FaUsers /> Users</NavLink></li>
                        <li><NavLink to="/admin/contacts"><AiFillContacts /> Contacts</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className="container">
            <h1>WELCOME to ADMIN PANEL !</h1>
            </div>
        </header>
        <Outlet />
        </>
    )
}