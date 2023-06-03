import axios from 'axios';
import React,{useState,useEffect} from 'react';
import base_url from './Apis';
import Courses from './Courses';
import { CircularProgress } from '@mui/material';
import AddCourses from './AddCourses'
import './ViewCourses.css'

const ViewCourses = ({Course,setCourse}) => {
  
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);
var i=0;
    const getAllCoursesFromServer=()=>{
  axios.get(`/courses`).then(
    (response)=>{console.log(response.data);setCourse(response.data);
      setLoading(false)},
    (error)=>{console.log(error);}
  );
    }

    const updateData=(course)=>{
      setCourse(Course.filter((c)=>(c.title!==course)));
     
    }
    const updateCourse=(Id)=>{   
// console.log(Id);
setId(Id);
console.log(id);
    }

    
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    document.title="View Courses";
    getAllCoursesFromServer();
    }, [])
    // !loading &&  console.log(Course);
    return (
    <div className="container1">
      <div className="courses">   
      <h4 className='con'>Contact Details</h4>
        {loading && <CircularProgress
        color='inherit'
        size={150}
        thickness={1}/>}
      {  !loading && Course!=null?Course?.map((item,index) =>{return(
      <div className="items">
        
       { <Courses key={index.toString()} id={item._id} Id={id}setCourse={setCourse} setId={setId} Course={Course} index={index} updateData={updateData}subject={item.title}updateCourse={updateCourse}  description={item.description}/>
      }</div>
        )}):<h4 style={{backgroundColor:"#FAECD6"}}>{!loading && ("No-Courses-Available")}</h4>
       }
      </div>
      <div className="addCourses">
      <AddCourses  Course={Course} setCourse={setCourse}/>
      </div>
    </div>);
}

export default ViewCourses;