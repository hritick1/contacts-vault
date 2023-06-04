import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import './Card.css'


const Contact = (props) => {

const [data, setData] = useState({ title: props.subject, description: props.description });


const handleChange=(e)=>{
  const value=e.target.value;
  // console.log(value);
  setData({...data,[e.target.name]:value});
  console.log(data);
 }

 const saveData=()=>{
  const updateC=[...props.Contacts];
   updateC[props.index]=data;
  props.setContacts(updateC);
  props.setId(null);
 update(props.id);
 toast.success("Contacts Updated successfully");
 }


 const update=(Id)=>{
  axios.put(`/courses/${Id}`,data);
 }
 

  const deleteContacts =(id)=>{
    axios.delete(`/courses/${id}`).then((response)=>{console.log("delete Sucessfull");toast.success("Delete Successfull");},(error)=>{console.log("Error in deleting")});
}
    return <>
        <ToastContainer/>
        <div className="container"style={{backgroundColor:"#FAECD6"}} >
        { props.id!==props.Id &&  
       
  <div className="element">
    <h5 className="" >{props.subject}</h5>
    <p className="">{props.description}</p>
    <div className="button">
    <a href="#" className="btn btn-primary"onClick={(e)=>{ e.preventDefault(); props.updateContact(props.id)}}style={{backgroundColor:"#4E6C50"}}>Update</a>
    <a href="#" className="btn btn-primary" onClick={(e)=>{e.preventDefault();props.updateData(props.id);deleteContacts(props.id)}}style={{backgroundColor:"#4E6C50"}}>Delete</a>
    </div> </div>
}
{

props.id===props.Id  && 
 
  <div className='editContent'>
<input type="text" value={data.title} name="title" onChange={(e)=>handleChange(e)}/>
<input type="number" value={data.description} name="description" onChange={(e)=>handleChange(e)}/>
<a className='btn btn-primary' style={{backgroundColor:"#4E6C50"}} onClick={saveData}>Save</a>
  </div>
}</div>
    </>;
}


export default Contact;