import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

const sampleImage = require("../assets/images/International Freshman  - header.jpeg");

const awardWinnerInfo = {
  title:
    "Top-Flight Performance on Her Base and in Her Community Earns Air Force Staff Sergeant UA Online’s Legendary Service Award",
  imageURL: sampleImage,
  text: `Air Force Staff Sgt. Sarah Neal comes from a long line of military
   service members, and now she’s charting her own path. The flight chief 
   has led her unit to new heights all while making time to serve her local community — and her commitment to service has been nothing short of legendary.
  The University of Alabama Online has named Staff Sgt. Neal the recipient of its 2022 Legendary Service Award. This award honors a past or present military service member who has demonstrated legendary service to their country and community. As the award winner, Neal will receive a tuition grant and was honored at Bryant-Denny Stadium during the Nov. 19 Alabama-Austin Peay game.
  “Staff Sgt. Neal has channeled her perseverance into a passion for helping others. Her commitment to excellence in her work with the military and her community while pursuing a degree through UA Online is truly inspiring. We’re proud to honor her as the recipient of the 2022 Legendary Services Award,” said Dr. Robert Hayes, interim associate provost for the Office of Teaching Innovation and Digital Education, which houses UA Online.
  Neal enlisted as a reservist when she was 22 as a way to pay for nursing school, but ultimately chose to put the military first. At Patrick Space Force Base in Brevard County, Florida, she was motivated by the base’s search and rescue mission to become active duty.
  “If there’s a cruise ship that needs help or someone overboard that needs [to be] rescued, we’re deployed. We protect our allies if a plane goes down and we support local hurricane search and rescue efforts,” Neal said. “Once I became part of this mission, that’s when I realized how amazing the military really is, and that’s what made me become active duty.”
  Neal became part of the airfield flight equipment crew in 2018, helping maintain critical equipment for air crews. As a supervisor on her team, she’s led her unit to become one of the top-performing shops. Her commitment to positively developing her airmen and her unit have earned her the title of flight chief and a promotion to the technical sergeant rank effective Dec. 1. She was also honored as the Noncommissioned Officer (NCO) of the Quarter at the wing level at her base and nominated for Aircrew Flight Equipment NCO of the Year across the entire U.S. Air Force.
  Providing good leadership is important to Neal, who wants her shop to feel like they have a shared vision and mission. “I want everybody to be proud of what they’re producing,” she said.
  Sarah Neal and FamilyHer military work and newborn son, Mason, keep her busy, but Neal still makes volunteering in her community a priority. During Neal’s childhood, her family faced many financial hardships, and their community stepped in and helped ensure meals were provided for them, as well as a roof over their head thanks to a local church. It’s this personal connection to volunteerism that drives her to give back to others however she can.
  “We had a lot of people step in and they volunteered. Growing up, we’ve had so many people that did so much for us,” Neal said. “There are so many easy ways to help people, and I feel like everybody should try to help if you can.”
  She has organized a local “Walk a Mile in Her Shoes” 5K — a race that raises awareness on rape, sexual assault and gender violence — as well as a 5K in support of the armed forces that raised over $4,000. She organizes volunteer opportunities between her unit and her local zoo and animal shelters and works to help others find volunteer opportunities in the community as well.
  “I’m big on things for the local community,” Neal said. “I feel like there’s so many organizations that I want everybody to be a part of, and I try to get as much coordinated as I can.”
  When she decided to start her master’s, Neal chose UA Online because of the University’s military-friendly reputation and flexible online programs. Neal has just three classes left until she graduates with her Master of Arts in Management with a concentration in Global Business. Balancing coursework with her service and family responsibilities has been a challenge, but Neal said her professors have been supportive and understanding.
  Sarah Neal and Husband When she and her husband, Justin, had their son in August, Neal debated whether she should drop a course. She reached out to her professor for advice and received compassion and understanding. “I said, ‘Please let me know if you don’t think it’s feasible to even try to take a course with a newborn.’ And he was like, ‘I’m actually in the pickup line to get my two kids right now. If you need any flexibility, please just let me know.’”
  Neal has encountered that same level of support throughout her degree program. “Every instructor has been super-willing to work with me and my schedule. It’s nice to feel like military service members still have the opportunity because [the instructors are] willing to work with us.”
  Sarah’s relative Ashlynn Neal, a senior at The University of Alabama, accepted the Legendary Service Award on her behalf during the Alabama-Austin Peay game on Nov. 19 at Bryant-Denny Stadium, as Sarah was unable to attend.
  `,
  dateCreated: "November 20th, 2022",
};

const AwardWinnerOnlineDetailsPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[36px] min-[720px]:mt-0 p-2">
        <div className="w-full max-w-[800px] mx-auto text-neutral-800">
          <div className="w-full py-4 px-2 my-4 border-y-[1px]">
            <h2 className="text-2xl font-bold">{awardWinnerInfo.title}</h2>
            <img
              src={awardWinnerInfo.imageURL}
              alt={awardWinnerInfo.title}
              className="object-cover aspect-square w-full mx-auto my-4 max-w-[800px]"
            />
            <p className="text-sm font-light mt-2">{awardWinnerInfo.text}</p>
          </div>
          <div className="w-full mt-4 mb-2 flex justify-end text-xs font-semibold">
            <p>Published:</p>
            <CalendarDaysIcon
              width={16}
              height={16}
              className="ml-1 text-neutral-800"
            />
            {awardWinnerInfo.dateCreated}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AwardWinnerOnlineDetailsPage;
