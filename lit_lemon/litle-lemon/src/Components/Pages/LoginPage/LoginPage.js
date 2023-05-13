import React from 'react';
import { StyledLogin } from  './LoginStyled'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill} from 'react-icons/ri'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <StyledLogin>
      <form>
        <img src='' alt=''/>
        <h3>LOG IN</h3>
        <div>
          <span><MdEmail /></span>
          <input type='email' placeholder='Email'/>
        </div>
        <div>
          <span><RiLockPasswordFill/></span>
          <input type='password' placeholder='Password'/>
        </div>
        <input type='submit' value='Login'/>
        <Link to='register'>You don't have an account? Register</Link>
        <p>Forget password?</p>
      </form>
      
    </StyledLogin>
  )
}

export default LoginPage;