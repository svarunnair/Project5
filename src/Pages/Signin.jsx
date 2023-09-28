import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signin() {

  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate()
  const[data,setData]=useState([])
  const[error,setError]=useState([])
  const[loading,setLoading]=useState(false)



  const handleEmail=(e)=>{
    let value=e.target.value 
    setEmail(value)
  }
  const handlePassword=(e)=>{
    let value=e.target.value
    setPassword(value)
  }
  const handleClick=()=>{
    navigate('/signup')
  }

  const handleSubmit=()=>{

    setLoading(true)

    axios({
      url:"https://reqres.in/api/login",
      method:'POST',
      data:{
        email:email,
        password:password
      }
    })
    .then((res)=>{
      setLoading(false)
      setData(res.data)
      if(res.data.token){
        localStorage.setItem('Token',res.data.token )
        navigate('/home')
      }
    })
    .catch((error)=>{
      
      setError(error)
      setLoading(false)
    })
    
  }


  return (
    <div>
<h1>Sign In</h1>
      <input onChange={handleEmail} placeholder='Email Id'/><br/>
      <input onChange={handlePassword} placeholder='Password'/><br/>
      <button onClick={handleSubmit}>Sign in</button><br/>
      <h6 onClick={handleClick}>For Sign Up</h6><br/>
      {loading&&<h4>loading...</h4>}


    </div>
  )
}

export default Signin