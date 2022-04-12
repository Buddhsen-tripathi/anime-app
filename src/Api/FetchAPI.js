import React, { useState, useEffect } from "react";
import AnimeCard from '../Api/AnimeCard';
 function FetchAPI() {
  const [posts, setPosts] = useState([""]);

  const fetchPost = async () => {
    console.log("frtching post");
  const response = await fetch(
      "https://ghibliapi.herokuapp.com/films"
    );
  
  
  let data= await response.json();
 setPosts(data);
  // realData  = JSON.parse(data);
  // // console.log("--------------------------------------------------------------------")
  // console.log(realData);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div >
    <p>  </p>
     
      <ul style={{display:"flex",flexDirection:'row,',flexWrap:'wrap', justifyContent:'space-evenly'}}>
      {posts.map((animeData) =>(
          
        <AnimeCard animeInfo ={animeData} />
        // console.log(animeData.title)
        ))}
      </ul>
      {/* <ul>{posts.id}</ul> */}
    </div>
  );
}
export default FetchAPI;