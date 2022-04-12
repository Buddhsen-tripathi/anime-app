import React from 'react'
import './AnimeCard.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AnimeCard = (animeData) => {
    
  return (
     
    // <span id = "element">
    //     <span className="per">
    //   <h3>{animeData.animeInfo.title}</h3>
    //   {animeData.animeInfo.original_title_romanised}
    //   {animeData.animeInfo.release_date}
    //   {<img src = {animeData.animeInfo.image}></img>}
    //   <p>{animeData.animeInfo.description}</p>
    // </span></span>
    <div className="ele" style={{display:'flex',margin:"2%"}}>
     <Card className="change" sx={{ maxWidth: 345 }} >
     <CardMedia
       component="img"
       height="140"
       image={animeData.animeInfo.image}
       alt={animeData.animeInfo.title}
       
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
       {animeData.animeInfo.title}
       </Typography>
       <Typography variant="body2" color="text.secondary">
       {animeData.animeInfo.description}
       </Typography>
     </CardContent>
     <CardActions>
       
     <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Details about the anime. Click Here!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Director:{animeData.animeInfo.director}<br/>
    Producer: {animeData.animeInfo.producer}<br/>
    Release Date: {animeData.animeInfo.release_date}<br/>
    Running Time: {animeData.animeInfo.running_time}<br/>
    Rt Score: {animeData.animeInfo.rt_score}<br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
     </CardActions>
   </Card>
   </div>
  )
}

export default AnimeCard
