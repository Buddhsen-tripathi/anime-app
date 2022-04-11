



import React, { useState, useEffect } from "react";

 function FetchAPI() {
  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
  const response = await fetch(
      "https://ghibliapi.herokuapp.com/films"
    );
   const data = await response.json();
    setPosts(data);
    console.log(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div >
    <p>  </p>
      <button onClick={fetchPost}> get new joke </button>
    </div>
  );
}
export default FetchAPI;