import React from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Header = (props) => {
    const {token, setToken, logout} = props;

    const history = useHistory()
    
    if(token){
        return(
            <div id='header-main-div'>
                <div id='header-top-row'>
                    <Link to='/'><h1 id='site-main-logo'>FITNESSTRAC.KR</h1></Link>
                    <button id="logout-button" onClick={(event) => {
                        event.preventDefault();
                        logout();
                        history.push('/');
                    }}>Logout</button>
                </div>
                <div id='nav-bar'>
                <Link to='/'><button className="nav-bar-link" >Home</button></Link>
                <Link to='/routines/publicroutines'><button className="nav-bar-link" >Routines</button></Link> 
                <Link to='/routines/myroutines'><button className="nav-bar-link" >My Routines</button></Link> 
                <Link to='/activities' ><button className="nav-bar-link" >Activities</button></Link>
                </div>
            </div>
        )

    } else {
        return(
            <div id='header-main-div'>
                <div id='header-top-row'>
                    <Link to='/'><h1 id='site-main-logo'>FITNESSTRAC.KR</h1></Link>
                    <Link to='/users/login'><button id="login-link">Hi! Log in or sign up</button></Link>
                </div>
                <div id='nav-bar'>
                    <Link to='/'><button className="nav-bar-link" >Home</button></Link>
                   <Link to='/routines/publicroutines'><button className="nav-bar-link" >Routines</button></Link> 
                   <Link to='/activities' ><button className="nav-bar-link" >Activities</button></Link>
                   
                </div>
            </div>
        )
    }




}
export default Header;