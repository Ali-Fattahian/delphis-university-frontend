import React from "react";

const ImageNextToParagraphMoreInfo = ({
  imageLink,
  text,
  title,
  subTitle = null,
  textColor,
  bgColor,
  buttonComponent = null,
  reverse = false,
  classes = {},
}) => {
  // A common pattern of an image being next to a paragraph, having a title and a button linking to more information about the topic
  return (
    <div className={`w-full p-8 bg-${bgColor} mt-6`} style={classes}>
      <div
        className="w-full max-w-[800px] flex flex-col
           md:flex-row gap-4"
      >
        <div className="flex flex-col gap-4">
          <h1
            className={`text-5xl overflow-hidden text-center font-bold text-${textColor} block sm:hidden mb-6`}
          >
            {title}
          </h1>
          {subTitle && (
            <p className={`text-xl text-${textColor}`}>{subTitle}</p>
          )}
        </div>
        <div
          className={`flex flex-col ${
            reverse ? "sm:flex-row-reverse" : "sm:flex-row"
          } justify-center items-center gap-6`}
        >
          <img src={imageLink} alt={title} className="flex-[0_0_50%]" />
          <div className="flex flex-col gap-6">
            <h1
              className={`text-4xl font-bold text-${textColor} hidden sm:block overflow-hidden`}
            >
              {title}
            </h1>
            <p className={`text-${textColor}`}>{text}</p>
            {buttonComponent && buttonComponent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageNextToParagraphMoreInfo;
