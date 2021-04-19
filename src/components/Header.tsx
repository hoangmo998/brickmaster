import React from 'react';
import {
    BrowserRouter as Router} from "react-router-dom";
const Header = () => {
    return (
        <div className='header'>
            <Router>
            <div className="sidebar">
                <a href="#home"><i className=""></i> Home</a>
                <a href="#services"><i className=""></i> Services</a>
                <a href="#clients"><i className=""></i> Clients</a>
                <a href="#contact"><i className="f"></i> Contact</a>
            </div>

            <div className="main">
                <div className='nav'>
                    <ul>
                        <li className='right'>
                            <div className="dropdown">
                                <button className="dropbtn">Dropdown
                                </button>
                                <div className="dropdown-content">
                                    <a href="/">English</a>
                                    <a href="/">Vietnam 2</a>
                                    <a href="/">french 3</a>
                                </div>
                            </div>
                        </li>
                        <a className="btn-signin" href="#open-modal"><button>Sign In</button></a>
                        <a className="btn-signup" href="#open-modal"><button>Sign Up</button></a>
                    </ul>
                </div>
                <div id = 'open-modal' className='modal-window'>
                    <a href="/" className='modal-close' title='Close'> close</a>
                    <h1>dang nhap</h1>
                    <h2>kjklslkjl</h2>
                </div>
                <div>
                    <h2>home Page</h2>
                </div>
                <div><h1>User Information</h1></div>
            </div>
            </Router>
            
        </div>
    )
}
export default Header