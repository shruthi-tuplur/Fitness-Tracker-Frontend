import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Header = () => {

return(
    <div id='header-main-div'>
        <div id='header-top-row'>
            <Link to='/'><h1 id='site-main-logo'>FITNESSTRAC.KR</h1></Link>
            <Link to='/users/register'><button id="login-link">Hi! Log in or sign up</button></Link>
        </div>
        <div id='nav-bar'>
            <button className="nav-bar-link" >Home</button>
            <button className="nav-bar-link" >Routines</button>
            <button className="nav-bar-link" >My Routines</button>
            <button className="nav-bar-link" >Activities</button>
        </div>
    </div>
)


}
export default Header;