import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {

  const [users, setUsers] = useState([]);

  // Fetch data
  const fetchdata = async () => {
    try {
      const res = await axios.get("http://localhost:8383/users");
      console.log(res.data);

      setUsers(res.data); // Store data in users state
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  //delete the data
        let deletedata = (id)=>{
           console.log(id);
           if(window.confirm("want to delete data"))
            axios.delete(`http://localhost:8383/users/${id}`)
           .then(()=>{
            window.navigation.reload()
           })
           .catch(() =>{
            console.log("error occured");
            
           })
           
        }

  return (
   
    <div >
      <h1>PROJECT</h1>
       <h2><Link to= "/create">create new users</Link></h2>
     <div className='grid'>
      {users.map((users) => (
        <div className='card' key={users.id}>
          <img
            src={`https://api.dicebear.com/10.x/avataaars/svg?seed=${users.id}`}
            alt=""
            height="200px"
            width="200px"
          />
          <h3>{users.name}</h3>
          <p>✉️{users.email}</p>
          <p>📞{users.phone}</p>
          <p>🌐{users.website}</p> <br />
          <button>❤️</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   
          <Link to={`/edit/${users.id}`}> <button>📝</button></Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <button onClick={() =>{deletedata(users.id)}}>🗑️</button>
          
        </div>
      ))}
    </div>
    </div>
  );
};

export default Home;