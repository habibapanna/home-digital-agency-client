import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
import CustomizeButton from '../CustomizeButton/CustomizeButton';

const Main = () => {
    const location = useLocation();
    const isDashboard = location.pathname.startsWith("/dashboard");

    return (
        <div className='min-h-screen max-w-7xl mx-auto flex flex-col'>
            {/* Conditionally render Navbar, Footer, and CustomizeButton */}
            {!isDashboard && <Navbar />}
            <div className='flex-grow'>
                <Outlet />
            </div>
            {!isDashboard && <CustomizeButton />}
            {!isDashboard && <Footer />}
        </div>
    );
};

export default Main;
