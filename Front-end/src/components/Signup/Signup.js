import React,{useState} from 'react'
import axios from '../../axios';
import { useHistory } from 'react-router-dom';
import "./Signup.css"
function Signup() {
    let history = useHistory()
    const [userInfo,setUserInfo]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        repassword:"",
        birthday:"",
    })
    const [error,setError] = useState("");
    function handleChange(e){
        setUserInfo({...userInfo,[e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        if(userInfo.password!==userInfo.repassword) setError("Passwords don't match")
        else{
            axios.post("/users/signup",userInfo)
            .then(res=>{
                history.push("/signin")
                console.log(res)
            })
            .catch(err=>{
                //setError(err);
                console.log(err);
            })
        }
    }
    return (
        <div className="signin">
            <h1>Sign Up</h1>
           <form onSubmit={handleSubmit}>
                <input name="firstname" placeholder="FirstName"  onChange={handleChange} />
                <input name="lastname" placeholder="LastName"  onChange={handleChange} />
               <input name="email" placeholder="Email" onChange={handleChange}/>
               <input name="password" placeholder="Password" type="password" onChange={handleChange}/>
               <input name="repassword" placeholder="Retype-Password" type="password" onChange={handleChange} />
                <input name="birthday" type="date" onChange={handleChange}></input>
               <button type="submit">Sign Up</button>
           </form>
           <p>{error}</p>
        </div>
    )
}


export default Signup
