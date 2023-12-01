import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import TextOnImage from "../../components/layout/TextOnImage";

const headerImage = require("../../assets/images/history - header.jpeg");

const HistoryPage = () => {
  return (
    <>
      <Navbar />
      <TextOnImage title="History" imageURL={headerImage} />
      <div className="w-full">
        <div className="w-full max-w-[1200px] mx-auto py-6 px-2 text-neutral-700 text-sm">
          <p>
            The University of Alabama, the state of Alabama’s oldest public
            university, is a senior comprehensive doctoral-level institution.
            The University was established by constitutional provision under
            statutory mandates and authorizations. Its mission is to advance the
            intellectual and social condition of the people of the state through
            quality programs of teaching, research and service.
          </p>
          <p className="mt-4">
            In 1818, the federal government authorized the Alabama Territory to
            set aside a township for the establishment of a “seminary of
            learning.” President Monroe signed the enabling act for statehood on
            March 2, 1819, and Alabama was officially admitted to the Union on
            Dec. 14, 1819, and a second township was added to the grant. On Dec.
            18, 1820, the seminary was established officially and named “The
            University of the State of Alabama.” Tuscaloosa, then the state’s
            capital, was chosen as the University’s home in 1827. On April 18,
            1831, under the leadership of the first University president, Alva
            Woods, inaugural ceremonies were held and the University opened. By
            May 28, 52 students had enrolled. The campus consisted of seven
            buildings: two faculty houses, two dormitories, the laboratory, the
            hotel (now Gorgas House) and the Rotunda.
          </p>
          <p className="mt-4">
            In 1838, The University of Alabama became the first in the state to
            offer engineering classes. It was one of the first five in the
            nation to do so and one of the few to have maintained accreditation
            continuously since national accreditation began in 1936.
          </p>
          <p className="mt-4">
            In 1865, during the Civil War, Union troops spared only seven
            buildings on the UA campus. Of the principal buildings remaining
            today, the President’s Mansion and its outbuildings still serve as
            the president’s on-campus residence. During the Reconstruction Era,
            a reorganized University opened again to students in 1871.
          </p>
          <p className="mt-4">
            At the University’s diamond jubilee celebration in 1906, President
            John William Abercrombie presented to the board of trustees his
            plans for the Greater University fundraising campaign, thus ensuring
            that the state legislature would no longer be the primary source for
            financing the University’s growth.
          </p>
          <p className="mt-4">
            In 1912, Dr. George H. Denny became University president; at that
            time the campus consisted of 652 students and nine principal
            buildings. His tenure began an era of unprecedented physical and
            enrollment growth. When he retired in 1936, there were more than
            5,000 students and 23 major buildings, which form the core of the
            modern campus.
          </p>
          <p className="mt-4">
            The most well-known campus landmark, Denny Chimes, was dedicated in
            1929 and named in honor of President Denny.
          </p>
          <p className="mt-4">
            Now home to over 38,000 diverse students, faculty and staff members
            in 12 colleges and schools led by deans and under the leadership of
            President Stuart R. Bell, The University of Alabama is flourishing
            and experiencing increased interest from across the nation and
            around the globe each year. UA offers 70 undergraduate programs
            through 12 colleges and schools.
          </p>
          <p className="mt-4 font-semibold">
            The colleges and schools and their original dates of establishment
            as separate units are as follows:
          </p>
          <ul className="mt-4 list-disc list-inside [&>li]:py-1">
            <li>College of Arts and Sciences in 1909</li>
            <li>Culverhouse College of Business in 1919</li>
            <li>College of Communication and Information Sciences in 1973</li>
            <li>College of Community Health Sciences in 1971</li>
            <li>College of Continuing Studies in 1983</li>
            <li>College of Education in 1929</li>
            <li>College of Engineering in 1909</li>
            <li>Graduate School in 1924</li>
            <li>Honors College in 2003</li>
            <li>College of Human Environmental Sciences in 1931</li>
            <li>School of Law in 1872</li>
            <li>Capstone College of Nursing in 1975</li>
            <li>School of Social Work in 1965</li>
          </ul>
          <p className="mt-4">
            The University of Alabama is one of three campuses in The University
            of Alabama System, all of which are governed by The University of
            Alabama Board of Trustees.
          </p>
          <p className="mt-4">
            Established in 1969, The University of Alabama System includes The
            University of Alabama (located in Tuscaloosa), The University of
            Alabama at Birmingham and The University of Alabama in Huntsville.
            The System is governed by a self-nominating board of 15 elected and
            two ex-officio members.
          </p>
          <p className="mt-4">
            The constitution of the State of Alabama provides that the board is
            composed of three members from the congressional district in which
            the Tuscaloosa campus is located and two members from each of the
            other six congressional districts. The governor and the state
            superintendent of education are ex-officio members of the board.
            Those members who are not ex-officio are elected by the board,
            subject to confirmation by the state senate, and may serve up to
            three consecutive, full six-year terms.
          </p>
          <p className="mt-4">
            The purpose of the board of trustees is to ensure the effective
            leadership, management and control over the activities of the three
            doctoral research universities in The University of Alabama System.
            This structure provides for a definitive, orderly form of
            governance, and secures and continues responsive, progressive and
            superior institutions of higher education.
          </p>
          <p className="mt-4">
            The primary function of the board is to determine the major policies
            of the system. These include reviewing existing policies; defining
            the mission, role and scope of each campus; and assuming ultimate
            responsibility to the public and political bodies of Alabama. Rules,
            policies and procedures are promulgated to ensure that, through The
            University of Alabama System Office, the necessary flow of
            information for such accountability takes place.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HistoryPage;
