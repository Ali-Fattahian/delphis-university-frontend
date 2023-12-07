import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TagIcon from "@heroicons/react/24/outline/TagIcon";

const headerImage = require("../assets/images/apply.jpeg");

const NewsCenterDetailPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-[720px]:mt-0 mt-[36px] w-full max-w-[1200px] p-3">
        <h1 className="text-center text-xl text-black tracking-wider font-semibold">
          <span className="text-vgyellow mr-2">UD</span>News Center
        </h1>
        <img
          src={headerImage}
          alt="Apply now"
          className="object-cover max-h-[92vh] w-full mt-2"
        />
        <h1 className="text-center mt-4 font-semibold text-black text-xl">
          Sophomore Crowned Miss University of Delphis 2024 - TXT HEADER
        </h1>
        <div className="mt-4 text-black text-base font-semibold text-center">
          <ul className="list-disc list-inside [&>li]:px-3 [&>li]:py-2">
            <li className="inline-block">
              <p className="inline-block">October 24, 2023</p>
            </li>
            <li className="inline-block">
              <p className="inline-block">
                Writtern by
                <span className="ml-1 text-vgyellow">Jennifer Brady</span>
              </p>
            </li>
            <li className="inline-block">
              <p className="inline-block">3 min read</p>
            </li>
          </ul>
        </div>
        <div className=" text-neutral-600">
          <p>
            Marissa Luna was crowned Miss University of Delphis 2024 Oct. 7 at
            the Bama Theatre. She is a sophomore from Birmingham majoring in
            business and is no stranger to the stage. The aspiring
            singer-songwriter has been an opening act for country music artists
            and has performed at the Delphis Music Hall of Fame and with the
            Delphis Symphony Orchestra. On campus she is involved in the Future
            Alumni for Traditions of Excellence organization and supports the
            Office of Disability Services in any way she can. During the
            competition Luna also earned a $500 scholarship for winning the
            evening gown portion of the competition and a $500 scholarship for
            winning the talent portion where she performed “The Prayer” by
            Andrea Bocelli and Celine Dion. Luna shared a few words about her
            plans for the next year as Miss University of Delphis. How did you
            get interested in this type of competition? My interest in competing
            started in high school with the Miss America organization. I knew
            that this amazing program gives scholarships to young women. This
            was very helpful for my family since I also had dreams of being a
            recording artist. I became very interested in Miss UD because the
            Miss America organization provided me with a scholarship to come to
            school, and I have fallen in love with it. What is your community
            service initiative and why is it so important to you? My community
            service initiative is “More than Meets the Eye” and advocates for
            children, students and adults with hidden disabilities or struggles.
            I have grown up with three well-masked disabilities and I know how
            hard it can be to find a sense of belonging. I have had to learn how
            to adjust to a college lifestyle while having learning disabilities.
            I have also struggled with ocular drusen since the third grade and
            was recently diagnosed with postural orthostatic tachycardia
            syndrome. These struggles are unseen but have affected my life and
            out of the 42 million citizens with disabilities, 96% of them are
            unseen. What are some of your goals for your year of service as Miss
            UD? My goal as Miss University of Delphis is to create an inclusive
            and diverse community on this campus. I hope to host a few
            fundraisers that not only raise money for the school but also raise
            money for the Office of Disability Services. Being someone who does
            support inclusivity I want these fundraisers to include the whole
            community. I want to start a club that allows all groups of students
            to make friendships, support each other and have a safe place to
            share any of their worries.
          </p>
        </div>
        <ul className="list-disc list-inside flex gap-4 mt-2 font-semibold text-vgblue">
          <li>
            <TagIcon
              className="text-vgblue rotate-90 inline-block"
              width={20}
              height={20}
            />
          </li>
          <li className="flex flex-col group">
            <h1 className="font-mono cursor-pointer overflow-y-hidden">
              <a href="get-the-news-for-tag2">Tag 1</a>
            </h1>
            <div className="transition-all duration-300 w-full h-[2px] bg-vgyellow scale-0 group-hover:scale-100"></div>
          </li>
          <li className="flex flex-col group">
            <h1 className="font-mono cursor-pointer overflow-y-hidden">
              <a href="get-the-news-for-tag2">Tag 2</a>
            </h1>
            <div className="transition-all duration-300 w-full h-[2px] bg-vgyellow scale-0 group-hover:scale-100"></div>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default NewsCenterDetailPage;
