import React from "react";
import CardNoBorder from "./CardNoBorder";

const CardsNoBorderContainer = ({
  title,
  text,
  cardsArr,
  classes,
  bgColor,
  textColor,
}) => {
  return (
    <div
      className={`bg-${bgColor} p-10 flex flex-col justify-center gap-6 ${classes}`}
    >
      <h1
        className={`text-3xl sm:text-5xl text-center p-1 overflow-hidden text-${textColor}`}
      >
        {title}
      </h1>
      <p className={`text-center text-${textColor}`}>{text}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
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
    </div>
  );
};

export default CardsNoBorderContainer;
