import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards_wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/delhi.jpg"
              text="Explore diversity of Delhi"
              label="adventure"
              path="/services"
            />
            <CardItem
              src="images/mumbai.jpg"
              text="Explore fascinating Mumbai"
              label="adventure"
              path="/services"
            />
            <CardItem
              src="images/kolkata.jpg"
              text="Get lost in streets of Kolkata"
              label="adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/chennai.jpg"
              text="Feel the warmth of Chennai"
              label="adventure"
              path="/services"
            />
            <CardItem
              src="images/kerala.jpg"
              text="Experience sunsets of Kerala"
              label="adventure"
              path="/services"
            />
            <CardItem
              src="images/kashmir.jpg"
              text="Get chills of Kashmir's winters"
              label="adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
