
    import { Typography } from '@mui/material';
import axios from 'axios';
    import { useEffect,useState} from 'react';

    export default function Workshop(){
    
    
    
   
        let[loader,setLoader]=useState(true);
        let[Workshop,setWorkshop]=useState(null);
    
        const getWorkshopData = async () => axios.get("http://localhost:8000/Workshop")
    
                                                 .then(res=>{
                                                    setWorkshop(res.data)
                                                    setLoader(false)
                                                 }).catch(err => console.log(err))
            useEffect(()=>{
                getWorkshopData();
            },[]) 
    
    console.log("Workshop",Workshop)
    return(
        <>
         
         <Typography>PowerBi</Typography>
        
        
        
        </>
    )
}