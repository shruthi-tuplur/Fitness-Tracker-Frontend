import React from "react";

const Register = () => {

return (

    <div id='register-main-div'>
        <form>
           <h2>Create an account</h2> 
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
                  
                        <label htmlFor='confirm-password'  className='login-label' id="confirm-password" >Confirm password </label>
                        <input required type='password' name='confirm-password' onChange ={(event) => {
                            console.log('')
                            }}></input>    
                      
                    
                </div>   
                <div id='register-button-div'>    
                <button id='register-button'>Register</button>
                </div>     
        </form>


    </div>


)


}

export default Register;