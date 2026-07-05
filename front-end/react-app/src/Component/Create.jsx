import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'


const Create = () => {

    let [name,setName]=useState('')
    let [email,setEmail] =useState('')
    let [phone,setPhone] =useState('')
    let [website,setWebsite] =useState('')
 

    let navigate=useNavigate()

    // create functions 
    let handleChange = (e) =>{
        e.preventDefault()
        let demo ={
            name,
            email,
            phone,
            website
        }
        console.log(demo);

    
          axios.post("http://localhost:8383/users",demo)
         .then(()=>{
            console.log("data created successfully");
            navigate("/")
            toast.success("data created successfully")
            autoclose:1000
         })
         .catch(() =>{
            console.log("Error occured");
            
         })
        }

        

  return (
    <div>
        <form action="">
            <label htmlFor="text" >Username:</label>
            <input type="text" name="user" id="user" placeholder='enter your name' onChange={(e)=>{setName(e.target.value)} } />
            <br /> <br />
           
            <label htmlFor="text">Email:</label>
            <input type="text" name="email" id="email" placeholder='enter your email' onChange={(e)=>{setEmail(e.target.value)} } />
            <br /> <br /> 

            <label htmlFor="text">Phone:</label>
            <input type="text" name="phone" id="phone" placeholder='enter your phone number' onChange={(e)=>{setPhone(e.target.value)} } />
            <br /> <br /> 

            <label htmlFor="text">Website:</label>
            <input type="text" name="website" id="website" placeholder='enter your website' onChange={(e)=>{setWebsite(e.target.value)} } />
            <br /> <br /> 

            <button onClick={handleChange}>submit</button>
        
        </form>
    </div>
  )
}

export default Create