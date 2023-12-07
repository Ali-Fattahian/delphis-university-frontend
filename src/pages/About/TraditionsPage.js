import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const familiesImage = require("../../assets/images/traditions - families.jpeg");
const raisinImage = require("../../assets/images/traditions - raisin weekend.jpeg");
const dipImage = require("../../assets/images/traditions - may dip.jpeg");
const soakingsImage = require("../../assets/images/traditions - soakings.jpeg");

const TraditionsPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[36px] min-[720px]:mt-0 w-full bg-neutral-100 text-neutral-800 text-sm">
        <div className="w-full max-w-[1200px] mx-auto p-6">
          <img
            className="object-cover w-full"
            src={familiesImage}
            alt="Academic families"
          />
          <div className="mt-4 bg-neutral-200 p-3">
            <h2 className="text-xl font-semibold">Academic families</h2>
            <p className="mt-2 font-light">
              St Andrews is also home to a large number of academic families - a
              tradition where older students adopt first year students as
              ‘children' and help guide them in a system of mentoring. This is a
              fantastic way for first year students to meet new people, and many
              of the friendships that begin as part of the academic family
              tradition continue throughout a student's time at the University
              and beyond.
            </p>
          </div>
          <img
            className="object-cover w-full mt-10"
            src={raisinImage}
            alt="Raisin Weekend"
          />
          <div className="mt-4 bg-neutral-200 p-3">
            <h2 className="text-xl font-semibold">Raisin Weekend</h2>
            <p className="mt-2 font-light">
              This ‘mentoring' culminates in Raisin Weekend, when children are
              entertained by their parents and are encouraged to play pranks and
              silly games. On Raisin Monday, the children dress in embarrassing,
              flamboyant costumes, are given strange objects with a traditional
              Latin inscription, and are let loose on Lower College lawn for an
              enormous shaving foam fight.
            </p>
          </div>
          <img
            className="object-cover w-full mt-10"
            src={dipImage}
            alt="May Dip"
          />
          <div className="mt-4 bg-neutral-200 p-3">
            <h2 className="text-xl font-semibold">May Dip</h2>
            <p className="mt-2 font-light">
              Another famous tradition that many students choose to take part in
              is the May Dip, where you might find yourself plunging into a
              freezing North Sea at dawn on the first of May, which is said to
              promote good luck in exams.
            </p>
            <p className="mt-2 font-light">
              If you do not fancy a cold swim, you can always help by promising
              to look after your friends' clothes on the beach!
            </p>
          </div>
          <img
            className="object-cover w-full mt-10"
            src={soakingsImage}
            alt="Soakings"
          />
          <div className="mt-4 bg-neutral-200 p-3">
            <h2 className="text-xl font-semibold">Soakings</h2>
            <p className="mt-2 font-light">
              A final tradition occurs after many students' final undergraduate
              exam when their friends will meet them as they leave the location
              of their exam to shower them with cold water. This invigorating
              tradition is a great way to celebrate completing your final
              undergraduate examination period!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TraditionsPage;
