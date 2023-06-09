import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import './Card.css'


const Contact = (props) => {

const [data, setData] = useState({ name: props.name, number: props.number });


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
  axios.put(`/contacts/${Id}`,data);
 }
 

  const deleteContacts =(id)=>{
    axios.delete(`/contacts/${id}`).then((response)=>{console.log("delete Sucessfull");toast.success("Delete Successfull");},(error)=>{console.log("Error in deleting")});
}
    return <>
        <ToastContainer/>
        <div className="container"style={{backgroundColor:"#FAECD6"}} >
        { props.id!==props.Id &&  
       
  <div className="element">
    <h5 className="" >{props.name}</h5>
    <p className="">{props.number}</p>
    <div className="button">
    <a href="#" className="btn btn-primary"onClick={(e)=>{ e.preventDefault(); props.updateContact(props.id)}}style={{backgroundColor:"#4E6C50"}}>Update</a>
    <a href="#" className="btn btn-primary" onClick={(e)=>{e.preventDefault();props.updateData(props.id);deleteContacts(props.id)}}style={{backgroundColor:"#4E6C50"}}>Delete</a>
    </div> </div>
}
{

props.id===props.Id  && 
 
  <div className='editContent'>
<input type="text" value={data.name} name="name" onChange={(e)=>handleChange(e)}/>
<input type="number" value={data.number} name="number" onChange={(e)=>handleChange(e)}/>
<a className='btn btn-primary' style={{backgroundColor:"#4E6C50"}} onClick={saveData}>Save</a>
  </div>
}</div>
    </>;
}


export default Contact;