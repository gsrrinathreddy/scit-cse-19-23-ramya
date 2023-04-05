
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import axios from 'axios';
import { useEffect,useState} from 'react';



export default function Hobbies(){
    let[loader,setLoader]=useState(true);
    let[Hobbies,setHobbies]=useState(null);

    const getHobbiesData = async () => axios.get("http://localhost:8000/Hobbies")

                                             .then(res=>{
                                                setHobbies(res.data)
                                                setLoader(false)
                                             }).catch(err => console.log(err))
        useEffect(()=>{
            getHobbiesData();
        },[]) 

console.log("Hobbies",Hobbies)


  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqwIXXwGPSuiJWedON-xC6yFQ2O-q47WWALQ&usqp=CAU',
    title: 'Reading Books',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLgZ_8UbIRA4tCR0yRS78MvHnnMII75LRoSA&usqp=CAU',
    title: 'singing',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmNTL_HFrYveiGGMw55n1mGl8C4c34ALSRKg&usqp=CAU',
    title: 'InternetSurfing',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYK8HrnvoHTGSoQtxwMKOh2pR4TS2EmMrCItDYLltmwP7O6A4weHU-3XvTdGIGE6bNphg&usqp=CAU',
    title: 'Drawing',
    
    cols: 2,
  
  },
];