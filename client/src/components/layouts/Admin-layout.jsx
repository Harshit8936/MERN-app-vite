import { NavLink,Outlet } from "react-router-dom"
import { FaUsers } from "react-icons/fa";
import { AiFillContacts } from "react-icons/ai";


export const AdminLayout = ()=>{
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
        </header>
        <Outlet />
        </>
    )
}