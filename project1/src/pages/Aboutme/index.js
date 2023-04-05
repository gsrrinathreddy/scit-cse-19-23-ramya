import { Box, CircularProgress, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect,useState} from 'react';



export default function Aboutme(){
    
    let[loader,setLoader]=useState(true);
    let[aboutme,setaboutme]=useState(null);

    const getAboutmeData = async () => axios.get("http://localhost:8000/Aboutme")

                                             .then(res=>{
                                                setaboutme(res.data)
                                                setLoader(false)
                                             }).catch(err => console.log(err))
        useEffect(()=>{
            getAboutmeData();
        },[]) 

console.log("aboutme",aboutme)


        return(
        <>
        
<Typography>Name: RAMYA MYAKALA</Typography>
<Typography>Father Name: NARSAIAH</Typography>
<Typography>Mother Name: LAXMI</Typography>
<Typography>Email:myakalaramya33@gmail.com</Typography>
<Typography>Phone No.: 9014562031</Typography>
        </>
     
    )
    }