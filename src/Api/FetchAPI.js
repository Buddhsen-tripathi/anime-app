import React, { useState, useEffect } from "react";
import AnimeCard from '../Api/AnimeCard';
 function FetchAPI() {
  const [posts, setPosts] = useState([]);
  let realData;
  const joke = useState("");
  const fetchPost = async () => {
    console.log("frtching post");
  const response = await fetch(
      "https://ghibliapi.herokuapp.com/films"
    );
  var data = await response.json();
  console.log(data);
  realData  = JSON.parse(data);
  console.log(realData);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div >
    <p>  </p>
      <button onClick={fetchPost}> get new joke </button>
      <ul>
      {realData.map((animeData) =>(
        <AnimeCard animeInfo = {animeData} />
      ))}
      </ul>
    </div>
  );
}
export default FetchAPI;