import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { fetchFromAPI } from "../api";


const Register = ({setToken, setUser}) => {

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    let unconfirmedPassword;


    const handleSubmit = async (event) => {

        event.preventDefault()

        const requestBody = { 
            username,
            password 
    }

        const data = await fetchFromAPI({
            path: "/users/register",
            method: "POST",
            body: requestBody,
        });

        console.log("data: ", data);   
    }
 
return (

    <div id='register-main-div'>
        <form onSubmit = {handleSubmit}>
           <h2 id='create-acc-header'>Create an account</h2> 
           <div id='username'>
           <label htmlFor='username'  className='login-label' >Username </label>
                    <input 
                    required 
                    type='text' 
                    name='username' 
                    onChange ={(event) => {
                        setUsername(event.target.value)
                        }}></input>
            
           </div>
           <div id='password-div'>
                   
                        <label htmlFor='password'  className='login-label' >Password </label>
                        <input required type='password' name='password' onChange ={(event) => {
                            setPassword(event.target.value)
                            }}></input>
                  
                        <label htmlFor='confirm-password'  className='login-label' id="confirm-password" >Confirm password </label>
                        <input required type='password' name='confirm-password' onChange ={(event) => {
                            if(event.target.value === unconfirmedPassword){
                                
                            }
                            }}></input>    
                      
                    
                </div>   
                <div id='register-button-div'>    
                <button id='register-button'>Register</button>
                </div>
                <div id='sign-in-link-div'> 
                    <Link to='/users/login'> <p id='sign-in-link'>Already have an account? Click here to sign in.</p></Link>
                </div>     
        </form>


    </div>


)


}

export default Register;