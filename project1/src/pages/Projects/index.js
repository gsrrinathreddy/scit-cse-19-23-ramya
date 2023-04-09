import { Box, CircularProgress, Typography } from "@mui/material";
import axios from'axios';
import { useEffect,useState} from 'react';

export default function Projects(){
let [loader,setLoader]= useState(true);
let[projects,setProjects]=useState(null);

const getProjectsData=async () =>axios. get('http://localhost:8000/Projects')
                                       .then(res=>{
                                      
                                        setProjects(res.data)
                                        setProjects(false)
                                    }).catch(err=> console.log(err))
    useEffect(()=>{
        getProjectsData();  
    },[])
    console.log("projects",projects)                              
   
                      
                                   

return(
        <>
      <Typography> Miniproject:Mobile location proofs for privacy</Typography> 
       <Typography> Capstoneproject:E-Commerce website</Typography> 
      
               </>
    )
}