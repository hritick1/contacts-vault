import './App.css';
import Login from './components/Login';
import Nav from './components/Nav';
import Signup from './components/Signup';
import ViewContacts from './components/ViewContacts';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [Contacts, setContacts] = useState({title:"",description:""});
  const [isLogin, setisLogin] = useState(sessionStorage.getItem("isLoggedIn") === "true");
  const handleLogout=()=>{
     axios.get("/logout").then((response)=>{toast.success("Logout Successfull");setisLogin(false); axios.defaults.headers.common['Authorization']=null; sessionStorage.setItem("isLoggedIn", "false");;console.log(response)},(err)=>{toast.error("Error");});
  }
  return (
    <div ><ToastContainer/>
      <Router>
      <Nav isLogin={isLogin} handleLogout={handleLogout} />
      <Routes>
        <Route exact path="/" element={<Login setisLogin={setisLogin} isLogin={isLogin}/>}/>
        <Route exact path="/viewCourses" element={<ViewContacts Contacts={Contacts} setContacts={setContacts}/>}/>
        <Route exact path="/signUp" element={<Signup/>}/>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
