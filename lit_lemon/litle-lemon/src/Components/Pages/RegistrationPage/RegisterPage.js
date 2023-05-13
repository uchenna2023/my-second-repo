import React from 'react'
import { StyledRegistrationPage } from './RegistrationStyled'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from 'react'


const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isComplete, setIsComplete] = useState(false);

    const handleFirstName = (e)=>{
        setFirstName(e.target.value)
    }

    const handleLastName = (e)=>{
        setLastName(e.target.value)
    }

    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }

    const handlePasswordChange =(e)=>{
        setPassword(e.target.value)
    }


    const handlePassword = ()=>{
        setShowPassword(!showPassword)
    }

    const handleSubmit =(e)=>{
        e.preventDefault();

        let newUser = {
            Firstname: firstName,
            LastName: lastName,
            Email:email,
            Password:password
        }

        console.log(newUser)
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')

    }

  return (
    <StyledRegistrationPage>
        <form onSubmit={handleSubmit}>
            <h3>Creat Account</h3>
            <div>
                <input type='text' placeholder='First Name' value={firstName} onChange={handleFirstName}/>
            </div>
            <div>
                <input type='text' placeholder='Last Name' value={lastName} onChange={handleLastName}/>
            </div>
            <div>
                <input type='email' placeholder='Email' value={email} onChange={handleEmail}/>
            </div>
            <div>
                <input type={showPassword ? 'text' : "password"} placeholder='Password' value={password} onChange={handlePasswordChange}/> 
                <span onClick={handlePassword}>{ showPassword ? <FaEye /> : <FaEyeSlash /> }</span>
            </div>
            <input type='submit' value='Register'/>
        </form>
    </StyledRegistrationPage>
  )
}

export default RegisterPage