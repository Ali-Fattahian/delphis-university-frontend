import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import useDocumentTitle from "../hooks/useDocumentTitle";

const headerImage = require("../assets/images/campus safety - header.jpeg");

const CampusSafetyPage = () => {
  useDocumentTitle("Safety and Support");

  return (
    <>
      <Navbar />
      <div className="w-full mt-9 min-[720px]:mt-0 px-3 py-6">
        <div className="w-full max-w-[900px] m-auto">
          <h3 className="text-3xl font-semibold text-slate-800 mb-4">
            Safety & Support
          </h3>
          <img
            className="object-cover w-full max-h-[15rem]"
            src={headerImage}
            alt="Campus Safety and Support"
          />
          <p className="mt-6 text-sm text-neutral-600">
            The safety and well-being of our students is one of our highest
            priorities. UD invests significant resources in a variety of
            activities and initiatives designed to increase security on our
            campus, increase your ability to make responsible decisions that
            enhance your well-being and leverage our positive relationship with
            local law enforcement agencies.
          </p>
          <h3 className="text-3xl font-semibold text-slate-800 mt-6 mb-3">
            Safety Resources
          </h3>
          <h4 className="text-xl font-semibold text-vgblue mt-6">
            UD Police Department
          </h4>
          <p className="text-sm text-neutral-600 mt-3">
            Providing a safe and secure environment for all members of our
            community to live, learn, work and play.
            <span className="ml-1 font-bold">
              If you have an emergency, please call The University of Delphis
              Police Department at (491) 321-8767.
            </span>
          </p>
          <ul className="mt-2 list-disc list-inside [&>li]:py-1 text-xs text-vgred">
            <li>Crime Advisories</li>
            <li>Lost and Found</li>
            <li>Missing ACT Card</li>
          </ul>
          <h4 className="text-xl font-semibold text-vgblue mt-6">
            UDCT Incident Reporting
          </h4>
          <p className="text-sm text-neutral-600 mt-3">
            Report harassment or violations of UD safety or academic policy.
          </p>
          <p className="text-sm text-neutral-600 mt-2 font-semibold">
            IF THE SITUATION IS AN EMERGENCY AND YOU OR SOMEONE ELSE NEEDS
            IMMEDIATE ASSISTANCE, PLEASE CONTACT UDPD AT 251-151-7523.
          </p>
          <h3 className="text-3xl font-semibold text-slate-800 mt-6 mb-3">
            Support Resources
          </h3>
          <h4 className="text-xl font-semibold text-vgblue mt-6">
            Title IX Office
          </h4>
          <p className="text-sm text-neutral-600 mt-3">
            The Office works with University Administration, departments,
            students, faculty, staff, campus police, and other support services
            to ensure that University policies and programs foster a campus
            community free of illegal gender discrimination and sexual violence.
          </p>
          <h4 className="text-xl font-semibold text-vgblue mt-6">
            Women and Gender Resource Center
          </h4>
          <p className="text-sm text-neutral-600 mt-3">
            The Women and Gender Resource Center addresses gender inequity and
            fosters a community of multiculturalism, social justice, safety, and
            leadership through gender-related outreach, advocacy, and support to
            communities of all identities.
          </p>
          <h4 className="text-xl font-semibold text-vgblue mt-6">
            Counseling Center
          </h4>
          <p className="text-sm text-neutral-600 mt-3">
            The Counseling Center helps students, undergraduate and graduate,
            achieve academic success and personal growth through quality brief
            counseling and psychological services, outreach, and consultative
            services, and the training of mental health professionals.
          </p>
          <h4 className="text-xl font-semibold text-vgblue mt-6">
            Student Health Center
          </h4>
          <p className="text-sm text-neutral-600 mt-3">
            The SHC provides quality care in a private, confidential, and
            professional manner for students at UD.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CampusSafetyPage;
