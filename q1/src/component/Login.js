
import { Link,useNavigate  } from 'react-router-dom';
import { React, useState,useEffect } from "react";


const Login = ({username,setUsername,login}) =>{

     //this is useNavigate() hooks for navigate while submit the form
     const navigate = useNavigate();

    const onSubmit = (e) => {

        e.preventDefault();

        if (!username) {
            alert("please text user username");
            return;
        }
        //api calling
        login();

        //nvigate hooks to  navigate details
        navigate ('/home');

    }

    

    return(
 <div className="login">
    <form className="form" onSubmit={onSubmit}>
        <div className="form-control">
            <label className="form-input-label">username</label>
            <input 
            type='text' 
            value={username}
            onChange={(e)=>setUsername( e.target.value)} 
            className="form-input-box"/>
        </div>
        <div className="form-control">
            <label className="form-input-label">password</label>
            <input type='password'  className="form-input-box"/>
        </div>
        
        <button type='submit'   className="button">Login</button>
        
    </form>
</div>

)}

export default  Login;