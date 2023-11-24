import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TextOnImage from "../components/layout/TextOnImage";
import ImageNextToParagraph from "../components/layout/ImageNextToParagraph.MoreInfo";

const headerImage = require("../assets/images/delphis city - header.jpeg");
const entertainmentImage = require("../assets/images/delphis city - entertainment.jpeg");
const locationImage = require("../assets/images/delphis city - location.jpeg");
const recreationImage = require("../assets/images/delphis city - recreation.jpeg");

const DelphisCityPage = () => {
  return (
    <>
      <Navbar />
      <TextOnImage
        title="Delphis City"
        text={`Delphis bridges the gap between academia and modern innovation. This vibrant city has many strings to its historically significant bow.`}
        imageURL={headerImage}
      />
      <ImageNextToParagraph
        title="Arts & Entertainment"
        subTitle={`The Delphis City's rich history of music continues to beat today, offering entertainment and cultural experiences year round.`}
        text={`The Delphis Cultural Arts Center pays homage to our native jazz queen while housing an art gallery that hosts local artists and national shows. From there, the music thrums in Government Plaza or rises from the Black Warrior riverbanks at the Delphis Amphitheater, setting the rhythm of the city through the warm summer evenings. Local shops and restaurants cater to our thriving young professional population, setting new standards for the South.`}
        imageLink={entertainmentImage}
        bgColor="white"
        textColor="black"
        classes={{ marginTop: 0 }}
        reverse={false}
      />
      <ImageNextToParagraph
        title="Location"
        subTitle={`Delphis is a vibrant university town located a little north of Siphled, a mere 35-minute train ride away.`}
        text={`Many locals chooses to live in Delphis, even if they work in other towns and cities. And it's easy to see why - the city is manageable in size yet has a lot to offer. Historically significant, centuries-old sights stud the townscape and its surroundings. No trip to Delphis is complete without getting to know its former resident John Smith, one of the world's most notable botanists and scientists. He's left plenty of marks - floral and otherwise - across the world.`}
        imageLink={locationImage}
        bgColor="vgblue"
        textColor="white"
        classes={{ marginTop: 0 }}
        reverse={true}
      />
      <ImageNextToParagraph
        title="Recreation"
        subTitle={`Wide open spaces. Wide open possibilities.`}
        text={`When it's time to unwind from the hustle of the day, Delphis provides UD students the spaces to relax, explore and have fun. The area offers a wide range of outdoor spaces with natural beauty. Anglers, climbers, hikers and beach-goers will find themselves at some of the world's premier venues for their interests and hobbies within a short drive. UD students are also very active in the thriving local sports scene.`}
        imageLink={recreationImage}
        bgColor="white"
        textColor="black"
        classes={{ marginTop: 0 }}
        reverse={false}
      />
      <Footer />
    </>
  );
};

export default DelphisCityPage;
