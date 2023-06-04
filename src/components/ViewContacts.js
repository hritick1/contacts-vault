import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Contact from './Contact';
import { CircularProgress } from '@mui/material';
import AddContact from './AddContact'
import './ViewContacts.css'

const ViewContacts = ({Contacts,setContacts}) => {

  const [id, setId] = useState(null);

    const getAllContactsFromServer=()=>{
    axios.get(`/contacts`).then(
    (response)=>{console.log(response.data);setContacts(response.data);
   setLoading(false)},
    (error)=>{console.log(error);}
  );  }


    const updateData=(Id)=>{
     const newContacts= Contacts.filter((c)=>(c._id!==Id));
     setContacts(newContacts); 
    }


    const updateContact=(Id)=>{   
// console.log(Id);
setId(Id);
    }

    const [loading, setLoading] = useState(true);

    useEffect(() => {
    document.title="View Contacts";
    getAllContactsFromServer();
    }, []);
   
    return (
    <div className="container1">
      <div className="contacts">   
      <h4 className='con'>Contact Details</h4>
        {loading && <CircularProgress
        color='inherit'
        size={150}
        thickness={1}/>}
      {  !loading && Contacts!=null?Contacts?.map((item,index) =>{return(
      <div className="items">
        
       { <Contact key={index.toString()} id={item._id} Id={id}setContacts={setContacts} setId={setId} Contacts={Contacts} index={index} updateData={updateData} name={item.name}updateContact={updateContact}  number={item.number}/>
      }</div>
        )}):<h4 style={{backgroundColor:"#FAECD6"}}>{!loading && ("No-Contacts-Available")}</h4>
       }
      </div>
      <div className="addContacts">
      <AddContact  Contacts={Contacts} setContacts={setContacts}/>
      </div>
    </div>);
}

export default ViewContacts;