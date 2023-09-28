import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate=useNavigate()
  const[error,setError]=useState([])
  const[data,setData]=useState([])
  


  const handleLogout=()=>{
    navigate("/signin")
  }


  const homedata=()=>{



    axios({
      url:"		https://random.dog/woof.json",
      method:'GET',
      
    })
    .then((res)=>{
      setData(res.data)
    })
    .catch((error)=>{
      setError(error)
    })

  }

  useEffect(()=>{
    homedata()
  },[])

  console.log(data,'hdata')

  return (
    <div>
      
      <h1>HomePage</h1>
      <button onClick={handleLogout}>LogOut</button><br/>
      


  
{/* {data?.measurements?.map((item)=>(
  <>
  {item?.elementName}
  </>
))} */}
     <img style={{width:500, height:500}}src={data.url}/>


      
      </div>
  )
}

export default HomePage