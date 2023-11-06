import React from "react";
import CardNoBorder from "./CardNoBorder";

const CardNoBorderContainer = ({ cardsArr }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6 justify-center">
      {cardsArr.map((card) => (
        <CardNoBorder
          key={card.key}
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
