import React,{ useState } from 'react'
import axios from '../../axios';
import { useHistory } from 'react-router-dom';
import "./Signin.css"
function Signin() {
    let history = useHistory()
    const [userInfo,setUserInfo]=useState({
        email:"",
        password:""
    })
    const [error,setError] =useState("");
    function handleChange(e){
        setUserInfo({...userInfo,[e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        axios.post("/users/signin",{email:userInfo.email,password:userInfo.password})
        .then(res=>{
            localStorage.setItem('token', res.data.token);
            history.push("/home")
        })
        .catch(err=>{
            //setError(err);
            console.log(err);
        })
    }
    return (
        <div className="signin">
            <h1>Sign In</h1>
           <form onSubmit={handleSubmit}>
               <input name="email" placeholder="Email" onChange={handleChange}/>
               <input name="password" placeholder="Password" type="password" onChange={handleChange} />
               <button type="submit">Sign In</button>
           </form>
        </div>
    )
}

export default Signin
