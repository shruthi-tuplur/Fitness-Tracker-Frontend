import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { fetchFromAPI } from "../api";


const Login = ({setToken, setUser}) => {

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState('');
    
    const history = useHistory();

    const handleSubmit = async (event) => {

        event.preventDefault()

        
        const requestBody = { 
            username,
            password 
    }

        const data = await fetchFromAPI({
            path: "/users/login",
            method: "POST",
            body: requestBody,
        });

        console.log("data: ", data);   
    

        const { token } = data;

        if(!token) {
           alert("Invalid username or password")
        }

        if (token) {
            const data = await fetchFromAPI({
                path: "/users/me",
                token
            })

            const user = data;
            if (token) {
                setUsername('');
                setPassword('');
                setToken(token);
                setUser(user);
                localStorage.setItem("token", token)
                history.push('/');
            }
        }
    }
    

return(

    <div>
        <div id='login-main-div'>
        <form onSubmit={handleSubmit}>
           <h2 id='login-page-header'>Login</h2> 
           <div id='username'>
           <label htmlFor='username'  className='login-label' >Username </label>
                    <input required type='text' name='username' onChange ={(event) => {
                        setUsername(event.target.value)
                        }}></input>
            
           </div>
           <div id='password-div'>
                   
                        <label htmlFor='password'  className='login-label' >Password </label>
                        <input required type='password' name='password' onChange ={(event) => {
                            setPassword(event.target.value)
                            }}></input>
                  
                    
                </div>   
                <div id='login-button-div'>    
                <button id='login-button'>Login</button>
                </div>
                <div id='register-link-div'> 
                    <Link to='/users/register'> <p id='register-link'>Don't have an account yet? Click here to create one.</p></Link>
                </div>     
        </form>


    </div>

    </div>
)


}

export default Login;