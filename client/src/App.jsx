import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Service } from './pages/Service';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Contact } from './pages/Contact';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Error } from './pages/Error';
import { Logout } from './pages/Logout';
import { AdminLayout } from './components/layouts/Admin-layout';
import { AdminUsers } from './pages/Admin-users';
import { AdminContacts } from './pages/Admin-contacts';
import { AdminEditUser } from './pages/Admin-user-edit';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Service/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='*' element={<Error/>}/>
      {/* Nested routes */}
      <Route path='/admin' element={<AdminLayout />}>
        <Route path='users' element={<AdminUsers />}/>
        <Route path='contacts' element={<AdminContacts/>}/>
        <Route path='edit/:id' element={<AdminEditUser/>}/>
      </Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  </>
  )
}

export default App
