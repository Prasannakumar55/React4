import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='Nav'>
            <Link to='/Home'>Home</Link>
            <Link to='/Students'>Students</Link>
            <Link to='/Contact'>Contact Us</Link>
        </div>
    )
}

export default Navbar
