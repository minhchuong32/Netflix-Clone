import React, { useEffect, useState, useRef } from "react";
import "./TitleCard.css";
import cards_data from "../../assets/cards/Cards_data";

const TitleCard = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWYyNGQzMjJjNzVlOTFlMGRhZTY0YjYyYmU1MWYwYyIsIm5iZiI6MTc1MTIxMDYzMy4zNzc5OTk4LCJzdWIiOiI2ODYxNWE4OTQ1NTNkNTU5MGEwZDkzYTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1_dPPDsXxygJ83LGAH6Geo25iXlTj8mZHO7CYYekJ6Q",
    },
  };
  
  fetch(
    `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
    options
  )
    .then((res) => res.json())
    .then((res) => setApiData(res.results))
    .catch((err) => console.error(err));
  useEffect(() => {
    cardsRef.current.addEventListener("wheel", (e) => {
      e.preventDefault(); // Prevent the default scrolling behavior
      cardsRef.current.scrollLeft += e.deltaY; // Scroll horizontally based on vertical scroll
    });
  }, []);
  return (
    <div className="title-cards">
      <h2>{title ? title : "Phổ biến trên Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img className="card" src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.title} />
              <p>{card.original_title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
