import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import base_url from './Apis';
import { useNavigate } from 'react-router-dom/dist';
import {useParams} from 'react-router-dom'
import { CircularProgress } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
const UpdateCourse = () => {
       
    const navigate=useNavigate();
    const [loading, setLoading] = useState(true);
    const [Course, setCourse] = useState({title:"",description:""});
    const {id}=useParams();
    useEffect(() => {
        document.title="Update Courses";
        // console.log(id);

       axios.get(`/courses/${id}`).then((response)=>{console.log(response);setCourse(response.data);setLoading(false)},()=>{});
       setCourse(Course);
        },[id]);
       
   
       const handleForm=(e)=>{
        e.preventDefault();
        postDataToServer(Course);
        navigate(`/viewCourses`);
       }



       const postDataToServer=(data)=>{
          axios.put(`/courses/${id}`,data).then(
            (response)=>{
         console.log(response);
     
         toast.success("Course Updated sucessfully");
            },
            (error)=>{
                
            }
          )
       }


       const handleChange=(e)=>{
        const value=e.target.value;
        setCourse({...Course,[e.target.name]:value});
       }


    return <div>
         <ToastContainer/>
        <div className="container-fluid position-relative" style={{backgroundColor:"#4E6C50",height:"90vh"}}>
        <div className="card position-absolute top-50 start-50 translate-middle align-items-center w-50 h-auto " style={{backgroundColor:"#FAECD6"}}>
  <div className="card-body ">
    <h4 className="card-title ps-5 text-secondary mx-5 pe-5">UpdateCourse</h4>
    {loading &&<CircularProgress style={{margin:100}}
        color='inherit'
        size={150}
        thickness={1}/>}
   { !loading && <form onSubmit={handleForm}>
    <div className="mb-3">
    <label for="title" className="form-label">Enter Subject Title:</label>
    <input type="text" className="form-control" id="title"name="title" value={Course.title} onChange={(e)=>handleChange(e)} aria-describedby="name"/>
  </div>
  <div class="mb-3">
  <label for="desc" class="form-label">Enter Subject Description</label>
  <textarea class="form-control" id="desc" rows="3"name="description"value={Course.description}onChange={(e)=>handleChange(e)}></textarea>
</div>
  
  
  <button type="submit" className="btn btn-primary ms-5" style={{backgroundColor:"#4E6C50",marginLeft:"100px"}}>Save</button>
  <button type="button" className="btn btn-primary ms-5" onClick={()=>{setCourse({id:"",title:"",description:""})}}style={{backgroundColor:"#4E6C50"}}>Clear</button>
</form>}
  </div>
</div> </div>
    </div>;
}

export default UpdateCourse;