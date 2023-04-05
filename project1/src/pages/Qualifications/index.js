import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import {useState,useEffect} from 'react';
import axios from 'axios';



export default function Qualifications() {
  
const [loader,setLoader] = useState(true);
const [qualifications,setQualifications] = useState(null);

const connectToServer = async  () => axios.get('http://localhost:8000/Qualifications')
                                        .then(res=>{
                                    
                                            console.log(res.data);
                                            setQualifications(res.data);
                                            setLoader(false)
                                        }).catch(err=>console.log(err))
useEffect(()=>{
connectToServer();
},[])

console.log("Qualifications",Qualifications)
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="RGR Siddhanthi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLw280bskgQ322u6LAa4c5r_Ja2L9Nlx9ing&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institute Of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                70% CGPA
              </Typography>
              {" — Computer Science and Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sri Aadarsh" src="https://www.w3schools.com/howto/img_avatar.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Master Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                88% CGPA
              </Typography>
              {" — Mathematics,Physics,Chemistry"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sai SI" src="https://55knots.com.au/wp-content/uploads/2021/01/Zanj-Avatar-scaled.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="ZPHS,Rudraram"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                85% CGPA
              </Typography>
              {' — Higher Secondory Education with Computer Classes'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}