import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import './AddContact.css';
const AddContacts = ({Contacts, setContacts}) => {
    
    useEffect(() => {
        document.title="Add Courses";
        }, []);

       const [Contacts1, setContacts1] = useState({title:"",description:""});

       const handleForm=(e)=>{
        e.preventDefault();
        console.log(Contacts);
       setContacts(Contacts=>[...Contacts,Contacts1])
        postDataToServer(Contacts1);
setContacts1({title:"",description:""});
// console.log(Course);
       }

       const postDataToServer=(data)=>{
          axios.post(`/courses`,data).then(
            (response)=>{
         console.log(response);
         toast.success("Course added sucessfully");
            },
            (error)=>{
        toast.error(error.response.data);
            }
          )
       }

       const handleChange=(e)=>{
        const value=e.target.value;
        setContacts1({...Contacts1,[e.target.name]:value});
       }


    return <>
         <ToastContainer/>
        <div className="maincon">
        <div className="box1">
    <h4 className="">Add-Contacts</h4>

    <form onSubmit={handleForm}>

    <div className="">
    <label for="title" className="form-label">Name:</label>
    <input type="text" className="form-control" id="title"name="title" value={Contacts1.title} onChange={(e)=>handleChange(e)} aria-describedby="name"/>
  </div>

  <div class="">
  <label for="desc" class="form-label">Mobile No:</label>
  <input type="number" className="form-control" id="desc" name="description"value={Contacts1.description}onChange={(e)=>handleChange(e)}></input>
</div>

  <button type="submit" className="btn btn-primary mt-2" style={{backgroundColor:"#4E6C50"}}>Submit</button>
  <button type="button" className="btn btn-primary ms-5 mt-2" onClick={()=>{setContacts1({title:"",description:""})}}style={{backgroundColor:"#4E6C50"}}>Clear</button>
</form>
 
</div> </div>
    </>;
}

export default AddContacts;