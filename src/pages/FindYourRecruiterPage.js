import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FindYourRecruiterPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[36px] min-[720px]:mt-0 p-4">
        <div className="w-full max-w-[800px] mx-auto text-slate-600">
          <h2 className="text-3xl font-bold text-slate-900">
            Find My Recruiter
          </h2>
          <p className="text-sm mt-4">
            As your primary point of contact, your admissions recruiter will
            help guide you through the admissions process. From applying and
            enrollment, to student life and academic programs, your admissions
            recruiter is here to help.
          </p>
          <p className="text-sm mt-4">
            For more information and recruiter assignment, please contact or
            visit us.
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            <div>
              <h3 className="text-xl font-bold bg-vggreen px-3 py-2 text-center text-white">
                Visit Us
              </h3>
              <p className="text-sm p-3 bg-neutral-100">
                Suite 203 M - F 8:00 a.m. to 4:45 p.m. (CT)
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold bg-vggreen px-3 py-2 text-center text-white">
                Mailing Address
              </h3>
              <p className="text-sm p-3 bg-neutral-100">
                The University of Delphis 203 Student Services Center Box 870132
                Delphis, AL 29147-1509
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold bg-vggreen px-3 py-2 text-center text-white">
                Phone
              </h3>
              <p className="text-sm p-3 bg-neutral-100">
                <span className="font-semibold">Local</span>: 205-348-5666
              </p>
              <p className="text-sm p-3 bg-neutral-100">
                <span className="font-semibold">Toll Free</span>: 6-922-422-1347
              </p>
              <p className="text-sm p-3 bg-neutral-100">
                <span className="font-semibold">Fax</span>: 912-346-1212
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindYourRecruiterPage;
