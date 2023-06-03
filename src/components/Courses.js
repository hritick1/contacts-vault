import React, { useState,useEffect } from 'react';
import axios from 'axios';
import base_url from './Apis';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom/dist';

import './Card.css'


const Courses = (props) => {
const navigate=useNavigate();

const [data, setData] = useState({ title: props.subject, description: props.description });


const handleChange=(e)=>{
  const value=e.target.value;
  // console.log(value);
  setData({...data,[e.target.name]:value});
  console.log(data);
 }
 const saveData=()=>{
  const updateC=[...props.Course];
   updateC[props.index]=data;
  props.setCourse(updateC);
  props.setId(null);



  // console.log(data);
  // setData({ title: "", description: "" });
 }
  // const updateCourse=(e,id)=>{
  //   e.preventDefault();
  //   navigate(`/updateCourse/${id}`);
  // }

  const deleteCourse =(id)=>{
    var course="";
    axios.get(`/courses/${id}`).then((response)=>{console.log(response.data);course=response.data.title},()=>{});
    axios.delete(`/courses/${id}`).then((response)=>{console.log("delete Sucessfull");toast.success("Delete Successfull");{props.updateData(course)}},(error)=>{console.log("Error in deleting")});
}
    return <>
        <ToastContainer/>
        <div className="container"style={{backgroundColor:"#FAECD6"}} >
        { props.id!==props.Id &&  
       
  <div className="element">
    <h5 className="" >{props.subject}</h5>
    <p className="">{props.description}</p>
    <div className="button">
    <a href="#" className="btn btn-primary"onClick={()=>{  props.updateCourse(props.id)}}style={{backgroundColor:"#4E6C50"}}>Update</a>
    <a href="#" className="btn btn-primary" onClick={()=>{deleteCourse(props.id)}}style={{backgroundColor:"#4E6C50"}}>Delete</a>
    </div> </div>
}
{

props.id===props.Id  && 
 
  <div className='editContent'>
<input type="text" value={data.title} name="title" onChange={(e)=>handleChange(e)}/>
<input type="text" value={data.description} name="description" onChange={(e)=>handleChange(e)}/>
<a className='btn btn-primary' style={{backgroundColor:"#4E6C50"}} onClick={saveData}>Save</a>
  </div>
}</div>
    </>;
}


export default Courses;