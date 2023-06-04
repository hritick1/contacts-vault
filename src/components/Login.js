import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import { ToastContainer, toast } from 'react-toastify';

const Login = ({setisLogin}) => {
const navigate=useNavigate();
const [User, setUser] = useState([]);

const handleForm=async(e)=>{
  e.preventDefault();
  console.log(User);
login(User);
// console.log(tok)

 }
 const doAfterLogin=(response)=>{
  setTimeout(()=>{
    toast.success("Login Successfull");
    navigate('/viewContacts')},3000);
  axios.defaults.headers.common['Authorization']='Bearer '+response.data.accessToken;
setisLogin(true); sessionStorage.setItem("isLoggedIn", "true");
 }

 const login=(data)=>{
 axios.post(`/login`,data).then((response)=>{
  if(response.code!=="ERR_BAD_REQUEST"){
    doAfterLogin(response);
  }
  else{
    toast.error(response.response.data);
  }
}
)}

 


 const handleChange=(e)=>{
  const value=e.target.value;
  setUser({...User,[e.target.name]:value});
 }

       const signUp=()=>{
navigate(`/signUp`);
       }

    return <div>  <ToastContainer/>
        <div className="container-fluid position-relative" style={{backgroundColor:"#4E6C50",height:"90vh"}} >
        <div className="card position-absolute top-50 start-50 translate-middle align-items-center w-50 h-auto" style={{backgroundColor:"#FAECD6"}}>
  <div className="card-body ">
    <h4 className="card-title ps-5 text-secondary mx-5">Login</h4>
    <form onSubmit={handleForm}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="text" className="form-control" name="email"id="email"value={User.email} onChange={(e)=>handleChange(e)} aria-describedby="name"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password"value={User.password} onChange={(e)=>handleChange(e)} id="password"/>
  </div>
  <button type="submit" className="btn btn-primary ms-5" style={{backgroundColor:"#4E6C50"} }>Submit</button>
  <button type="button" className="btn btn-primary ms-5" onClick={signUp}style={{backgroundColor:"#4E6C50"}}>SignUp</button>
  
</form>
  </div>
</div> </div>
    </div>;
}

export default Login;