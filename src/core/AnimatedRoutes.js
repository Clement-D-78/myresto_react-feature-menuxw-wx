import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/home/Home'
import Profile from '../pages/users/Profile'
import Login from '../pages/users/Login'
import Logout from '../pages/users/Logout'
import Register from '../pages/users/Register'
import Header from '../layers/Header'
import Footer from '../layers/Footer'
import Sidebar from '../layers/Sidebar'
import Menu from '../pages/menu/Menu'
import Dashboard from '../pages/admin/Dashboard'
import Clients from '../pages/admin/Clients'
import AdmOrders from '../pages/admin/AdmOrders'
import AdmProfile from '../pages/admin/AdmProfile'
import { AnimatePresence } from 'framer-motion'


const AnimatedRoutes = () => {
    const location = useLocation()

    return (
        <AnimatePresence>
            {/* <Header /> */}
            {/* <Sidebar /> */}
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/menu" element={<Menu />} />
                <Route exact path="/commande" element="" />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/logout" element={<Logout />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/recap" element="" />
                <Route exact path="/administrateur" element={<Dashboard />} />
                <Route exact path="/administrateur/clients" element={<Clients />} />
                <Route exact path="/administrateur/comandes" element={<AdmOrders />} />
                <Route exact path="/administrateur/AdmProfile" element={<AdmProfile />} />
            </Routes>
            {/* <Footer /> */}
        </AnimatePresence>
    )
}

export default AnimatedRoutes