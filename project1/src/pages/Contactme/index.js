
import { Box, CircularProgress, Typography } from '@mui/material';
    import axios from 'axios';
import { useEffect,useState} from 'react';



export default function Contactme(){
    let[loader,setLoader]=useState(true);
    let[Contactme,setContactme]=useState(null);

    const getContactmeData = async () => axios.get("http://localhost:8000/Contactme")

                                             .then(res=>{
                                                setContactme(res.data)
                                                setLoader(false)
                                             }).catch(err => console.log(err))
        useEffect(()=>{
            getContactmeData();
        },[]) 

console.log("Contactme",Contactme)

    return(
        <>
        {
            
        }
       <Typography>Phone:9014562031</Typography>
      <Typography> Emailid:myakalaramya33@gmail.com</Typography> 
        
        
        
        </>
    )
 }