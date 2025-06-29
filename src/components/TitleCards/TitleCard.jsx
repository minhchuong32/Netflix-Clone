import React, { useEffect, useRef } from "react";
import "./TitleCard.css";
import cards_data from "../../assets/cards/Cards_data";

const TitleCard = () => {
  const cardsRef = useRef();
  useEffect(() => {
    cardsRef.current.addEventListener("wheel", (e) => {
      e.preventDefault(); // Prevent the default scrolling behavior
      cardsRef.current.scrollLeft += e.deltaY; // Scroll horizontally based on vertical scroll
    });
  }, []);
  return (
    <div className="title-cards">
      <h1>Popular on Netflix</h1>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img className="card" src={card.image} alt={card.title} />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCard;
