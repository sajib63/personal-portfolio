import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';


import Navbar from '../Components/Navbar';



const Main = () => {
    return (
        <div className='container mx-auto'>
           <Navbar></Navbar>
           <Outlet></Outlet>
           
           
            
        </div>
    );
};

export default Main;