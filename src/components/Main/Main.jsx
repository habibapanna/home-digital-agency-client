import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
import CustomizeButton from '../CustomizeButton/CustomizeButton';

const Main = () => {
    return (
        <div className='min-h-screen max-w-7xl mx-auto flex flex-col'>
            <Navbar></Navbar>
            <div className='flex-grow'>
            <Outlet></Outlet>
            </div>
            <CustomizeButton></CustomizeButton>
            <Footer></Footer>
        </div>
    );
};

export default Main;