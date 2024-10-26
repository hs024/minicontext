import React from 'react'
import { useContext,useState } from 'react'
import UserContext from '../Context/UserContext'
function Login() {
const [username,setusername]=useState("")
const[password,setpassword]=useState("")

const {setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
            e.preventDefault()
setUser({username,password})
    }
  return (
    <div>
<h2>Login here</h2>
<input type='text' placeholder='here name' value={username} onChange={(e)=>setusername(e.target.value)}></input>

<br /><br />
<input type="password" name="" placeholder='password' id="" value={password} onChange={(e)=>setpassword(e.target.value)}/>
   <br /><br />
   <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login