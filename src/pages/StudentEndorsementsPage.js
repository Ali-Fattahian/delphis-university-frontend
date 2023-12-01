import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const studentImage1 = require("../assets/images/student endorsements - 1.jpeg");
const studentImage2 = require("../assets/images/student endorsements - 2.jpeg");
const studentImage3 = require("../assets/images/student endorsements - 3.jpeg");
const studentImage4 = require("../assets/images/student endorsements - 4.jpeg");
const studentImage5 = require("../assets/images/student endorsements - 5.jpeg");

const StudentEndorsementsPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full bg-neutral-100 p-1 mt-[36px] min-[720px]:mt-0">
        <div className="w-full max-w-[1200px] m-auto">
          <ul className="flex flex-col gap-4 px-2 py-4">
            <li className="self-start flex flex-col min-[400px]:flex-row justify-between gap-4 bg-white p-2 border-neutral-200 shadow-sm max-w-[540px]">
              <img
                alt="student"
                src={studentImage1}
                className="object-cover flex-1 aspect-square max-w-[320px] w-full"
              />
              <p className="text-sm flex-1 text-neutral-700 p-2 min-[400px]:px-0">
                Delphis has a high number of international students that love to
                explore and are experiencing similar shocks in new environments.
                This makes it easier to blend in and learn a lot because we all
                tend to help each other out.
                <span className="ml-1 text-xs text-vgred font-bold">
                  Hasibullah Zhowandai
                  <span className="ml-1 text-vgblue text-xs">
                    ,MSc Marketing
                  </span>
                </span>
              </p>
            </li>
            <li className="self-end flex flex-col min-[400px]:flex-row justify-between gap-4 bg-white p-2 border-neutral-200 shadow-sm max-w-[540px]">
              <img
                alt="student"
                src={studentImage2}
                className="object-cover flex-1 aspect-square max-w-[320px] w-full"
              />
              <p className="text-sm flex-1 text-neutral-700 p-2 min-[400px]:px-0">
                I have gotten a lot of support from my application stage to this
                current stage of my placement. The International Team provided
                me a lot of support during my application and travel to Delphis
                City. Thereafter, the employability team assisted me with my
                placement search, writing a good CV, interview preparation and
                meetings with employability advisors. The library and academic
                English team was always available to provide support when I had
                difficulties with my academic writing and research for my essays
                and reports.
                <span className="ml-1 text-xs text-vgred font-bold">
                  Humphrey Muleba
                  <span className="ml-1 text-vgblue text-xs">
                    ,MSc Project Management
                  </span>
                </span>
              </p>
            </li>
            <li className="self-start flex flex-col min-[400px]:flex-row justify-between gap-4 bg-white p-2 border-neutral-200 shadow-sm max-w-[540px]">
              <img
                alt="student"
                src={studentImage3}
                className="object-cover flex-1 aspect-square max-w-[320px] w-full"
              />
              <p className="text-sm flex-1 text-neutral-700 p-2 min-[400px]:px-0">
                The lecturers are very well organised and they always make sure
                we are aware of everything that is coming up at the start of the
                year. They are helpful and very responsive via email, and
                willing to arrange individual consultation sessions for students
                who need extra support. There are also library student mentors
                who help us with any difficulties we encounter with our studies
                and coursework.
                <span className="ml-1 text-xs text-vgred font-bold">
                  Andrea Picquadio
                  <span className="ml-1 text-vgblue text-xs">
                    ,MSc Civil Engineering
                  </span>
                </span>
              </p>
            </li>
            <li className="self-end flex flex-col min-[400px]:flex-row justify-between gap-4 bg-white p-2 border-neutral-200 shadow-sm max-w-[540px]">
              <img
                alt="student"
                src={studentImage4}
                className="object-cover flex-1 aspect-square max-w-[320px] w-full"
              />
              <p className="text-sm flex-1 text-neutral-700 p-2 min-[400px]:px-0">
                I have benefited immensely from the multi-dimensional approach
                to learning at NBS. The education here equips one to be more
                independent and autonomous, while being personalised to one's
                needs and plans for the future. Workshops, seminars, projects,
                and various activities form part of the learning process and it
                is entirely up to us how much we use it to our advantage.
                <span className="ml-1 text-vgred font-bold text-xs">
                  Jeffrey Reed
                  <span className="ml-1 text-vgblue text-xs">
                    ,MBA Digital Marketing
                  </span>
                </span>
              </p>
            </li>
            <li className="self-start flex flex-col min-[400px]:flex-row justify-between gap-4 bg-white p-2 border-neutral-200 shadow-sm max-w-[540px]">
              <img
                alt="student"
                src={studentImage5}
                className="object-cover flex-1 aspect-square max-w-[320px] w-full"
              />
              <p className="text-sm flex-1 text-neutral-700 p-2 min-[400px]:px-0">
                Delphis has great employability ratings for graduates and it was
                a good location for me. I also liked the layout and feel of the
                campus, I knew I would be comfortable and feel safe.
                <span className="ml-1 text-vgred font-bold text-xs">
                  Daniel Xavier
                  <span className="ml-1 text-vgblue text-xs">
                    ,BSc Psychology
                  </span>
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentEndorsementsPage;
