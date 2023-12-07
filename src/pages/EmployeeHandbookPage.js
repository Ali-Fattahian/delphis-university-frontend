import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import useDocumentTitle from "../hooks/useDocumentTitle";

const EmployeeHandbookPage = () => {
  useDocumentTitle("Employee Handbook and Policies");

  return (
    <>
      <Navbar />
      <div className="mt-[36px] min-[720px]:mt-0 text-neutral-600">
        <div className="w-full p-3 border-b-[1px] border-neutral-300 bg-neutral-200">
          <h2 className="text-xl mx-auto max-w-[1200px]">Employee Handbook</h2>
        </div>
        <div className="w-full max-w-[800px] mx-auto p-2 text-sm">
          <p>
            The employee handbook is a document outlining a company's mission,
            policies, and expectations. It provides clarity on employee rights
            and responsibilities, ensuring a harmonious work environment. The
            handbook covers employment basics, workplace policies, code of
            conduct, compensation, benefits, working hours, and termination
            procedures.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EmployeeHandbookPage;
