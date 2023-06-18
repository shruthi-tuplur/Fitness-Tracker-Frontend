import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Header = (props) => {
    const {token} = props;

    if(token){
        return(
            <div id='header-main-div'>
                <div id='header-top-row'>
                    <Link to='/'><h1 id='site-main-logo'>FITNESSTRAC.KR</h1></Link>
                    <button id="logout-button">Logout</button>
                </div>
                <div id='nav-bar'>
                <Link to='/'><button className="nav-bar-link" >Home</button></Link>
                <Link to='/routines/publicroutines'><button className="nav-bar-link" >Routines</button></Link> 
                    <button className="nav-bar-link" >My Routines</button>
                    <button className="nav-bar-link" >Activities</button>
                </div>
            </div>
        )

    } else {
        return(
            <div id='header-main-div'>
                <div id='header-top-row'>
                    <Link to='/'><h1 id='site-main-logo'>FITNESSTRAC.KR</h1></Link>
                    <Link to='/users/register'><button id="login-link">Hi! Log in or sign up</button></Link>
                </div>
                <div id='nav-bar'>
                    <Link to='/'><button className="nav-bar-link" >Home</button></Link>
                   <Link to='/routines/publicroutines'><button className="nav-bar-link" >Routines</button></Link> 
                   
                </div>
            </div>
        )
    }




}
export default Header;