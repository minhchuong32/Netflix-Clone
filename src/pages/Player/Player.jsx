import React, { use, useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Player = () => {

    const {id} = useParams();
  // Using useParams to get the movie ID from the URL

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWYyNGQzMjJjNzVlOTFlMGRhZTY0YjYyYmU1MWYwYyIsIm5iZiI6MTc1MTIxMDYzMy4zNzc5OTk4LCJzdWIiOiI2ODYxNWE4OTQ1NTNkNTU5MGEwZDkzYTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1_dPPDsXxygJ83LGAH6Geo25iXlTj8mZHO7CYYekJ6Q",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
        <Link to="/" className="back-link">
      <img src={back_arrow_icon} alt="Back" className="back-arrow" />
        </Link>
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
        frameborder="0"
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
