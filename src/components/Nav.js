import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Nav = ({isLogin,handleLogout}) => {
  const handleLogin=()=>{
    toast.error("Please Login First");
  }
    return <div> <ToastContainer/>
      <nav className="navbar navbar-dark navbar-expand-lg  "style={{backgroundColor:"#820000"}}>
    <div className="container-fluid">
      <a className="navbar-brand" to="#">CourseApp</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {isLogin && <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/viewCourses">ViewCourses</Link>
          </li>}
          {!isLogin && <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/"onClick={handleLogin}>ViewCourses</Link>
          </li>}
          {isLogin && <li className="nav-item">
            <Link className="nav-link" to="/addCourse">AddCourses</Link>
          </li>}
         {!isLogin &&  <li className="nav-item">
            <Link className="nav-link" to="/" onClick={handleLogin}>AddCourses</Link>
          </li>}
          {!isLogin && <li className="nav-item fixed-right">
            <Link className="nav-link" to="/" >Login/SignUp</Link>
          </li>}
          {isLogin && <li className="nav-item fixed-right">
            <Link className="nav-link" to="/" onClick={handleLogout}>Logout</Link>
          </li>}
        </ul>
      </div>
    </div>
  </nav></div>;
}



export default Nav;