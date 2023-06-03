import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import base_url from './Apis';
const Signup = () => {

  const handleChange=(e)=>{
    const value=e.target.value;
    setUser({...User,[e.target.name]:value});
   }
   const [User, setUser] = useState([]);
   const handleForm=(e)=>{
    e.preventDefault();
    console.log(User);
    postDataToServer(User);

    
   }

   const postDataToServer=(data)=>{
    axios.post(`/register`,data).then((response)=>{console.log(response);
      if(response.code==="ERR_BAD_REQUEST") {
        toast.error(response.response.data);
      }
    else{
      toast.success("Signup Successful!");
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }});
   }
   const navigate=useNavigate();
  


    return <div>  <ToastContainer/>
        <div className="container-fluid position-relative" style={{backgroundColor:"#4E6C50",height:"90vh"}}>
        <div className="card position-absolute top-50 start-50 translate-middle align-items-center w-50 h-auto " style={{backgroundColor:"#FAECD6"}}>
  <div className="card-body ">
    <h4 className="card-title ps-5 text-secondary mx-5">Signup</h4>
    <form onSubmit={handleForm}>
    <div className="mb-3">
    <label for="name" className="form-label">Enter Your Name:</label>
    <input type="text" className="form-control" id="name" name="name"value={User.name} onChange={(e)=>handleChange(e)} aria-describedby="name"/>

  </div>
  <div className="mb-3">
    <label for="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" value={User.email}onChange={(e)=>handleChange(e)} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="password" className="form-label">Confirm-Password</label>
    <input type="password" className="form-control" id="password"name="password" value={User.password} onChange={(e)=>handleChange(e)}/>
  </div>
  <button type="submit" className="btn btn-primary ms-5 mx-5" style={{backgroundColor:"#4E6C50"}}>Submit</button>
  
</form>
  </div>
</div> </div>
    </div>;
}

export default Signup;