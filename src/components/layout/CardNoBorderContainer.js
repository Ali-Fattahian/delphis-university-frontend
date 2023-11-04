import React from "react";
import CardNoBorder from "./CardNoBorder";

const CardNoBorderContainer = ({ cardsArr }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6 justify-center">
      {cardsArr.map((card) => (
        <CardNoBorder
          imageURL={card.imageURL}
          title={card.title}
          text={card.text}
          maxWidth={400}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default CardNoBorderContainer;
