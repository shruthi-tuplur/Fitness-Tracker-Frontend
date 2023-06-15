import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {

return(

    <div>
        <div id='login-main-div'>
        <form>
           <h2 id='login-page-header'>Login</h2> 
           <div id='username'>
           <label htmlFor='username'  className='login-label' >Username </label>
                    <input required type='text' name='username' onChange ={(event) => {
                        console.log('')
                        }}></input>
            
           </div>
           <div id='password-div'>
                   
                        <label htmlFor='password'  className='login-label' >Password </label>
                        <input required type='password' name='password' onChange ={(event) => {
                            console.log('')
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