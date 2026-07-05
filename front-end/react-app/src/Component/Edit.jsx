import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const Edit = () => {

    let [name,setName]=useState('')
    let [phone,setPhone] =useState('')
    let [email,setEmail] =useState('')
    let [website,setWebsite] =useState('')


    console.log(useParams());
     let {id}=useParams()
     console.log(id);

     let navigate=useNavigate()
     
     //read the data
     useEffect(() =>{
        axios.get(`http://localhost:8383/users/${id}`)
        .then(() =>{
            console.log(res);
            setName(res.data.name)
            setPhone(res.data.phone)
            setEmail(res.data.email)
            setWebsite(res.data.website)
            setState(res.data);
        })
        .catch(() =>{
            console.log("error occured");
            
        })
     },[])

    //update the data

     let updatedata=((e) =>{
            e.preventDefault()
            let demo={
                name,
                phone,
                email,
                website
            }
            axios.put(`http://localhost:8383/users/${id}`,demo)
            
            .then(() =>{
                console.log("data updated successfully");
                navigate("/")
                
                })
                // navigate("/")
            // })
            .catch(() =>{
                console.log("error occured");
                
            });
      })

  return (
    <div>
        <form action="">
            <label htmlFor="text" >Username:</label>
            <input type="text" name="user" id="user" placeholder='enter your name' value={name} onChange={(e)=>{setName(e.target.value)} } />
            <br /> <br />
            
            <label htmlFor="text">phone:</label>
            <input type="text" name="role" id="role" placeholder='enter your phone' value={phone} onChange={(e)=>{setPhone(e.target.value)} } />
            <br /> <br /> 

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder='enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)} } />
            <br /> <br />

            <label htmlFor="text">Website:</label>
            <input type="text" name="text" id="text" placeholder='enter your website' value={website} onChange={(e)=>{setWebsite(e.target.value)} }/>
            <button onClick={updatedata}>submit</button>
        
        </form>
    </div>
  )
}

export default Edit