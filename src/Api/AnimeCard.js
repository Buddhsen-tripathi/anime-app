import React from 'react'
import './AnimeCard.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
    <div className="ele" style={{display:'flex'}}>
     <Card sx={{ maxWidth: 345 }} >
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
       <Button size="small">Share</Button>
       <Button size="small">Learn More</Button>
     </CardActions>
   </Card>
   </div>
  )
}

export default AnimeCard
