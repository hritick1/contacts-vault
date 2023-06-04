import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import './AddContact.css';
const AddContacts = ({Contacts, setContacts}) => {
    
    useEffect(() => {
        document.title="Add Contacts";
        }, []);

       const [Contacts1, setContacts1] = useState({name:"",number:""});

       const handleForm=(e)=>{
        e.preventDefault();
        console.log(Contacts);
       setContacts(Contacts=>[...Contacts,Contacts1]);
      // setContacts(Contacts1);
        postDataToServer(Contacts1);
setContacts1({name:"",number:""});
// console.log(Course);
       }

       const postDataToServer=(data)=>{
          axios.post(`/contacts`,data).then(
            (response)=>{
         console.log(response);
         toast.success("Contacts added sucessfully");
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
    <input type="text" className="form-control" id="title"name="name" value={Contacts1.name} onChange={(e)=>handleChange(e)} aria-describedby="name"/>
  </div>

  <div class="">
  <label for="desc" class="form-label">Mobile No:</label>
  <input type="number" className="form-control" id="desc" name="number"value={Contacts1.number}onChange={(e)=>handleChange(e)}></input>
</div>

  <button type="submit" className="btn btn-primary mt-2" style={{backgroundColor:"#4E6C50"}}>Submit</button>
  <button type="button" className="btn btn-primary ms-5 mt-2" onClick={()=>{setContacts1({name:"",number:""})}}style={{backgroundColor:"#4E6C50"}}>Clear</button>
</form>
 
</div> </div>
    </>;
}

export default AddContacts;