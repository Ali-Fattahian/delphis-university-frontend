import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import useDocumentTitle from "../hooks/useDocumentTitle";

const headerImage = require("../assets/images/cost of attendance - header.jpeg");

const CostOfAttendanceInfoPage = () => {
  useDocumentTitle("Cost of Attendance Information");

  return (
    <>
      <Navbar />
      <div className="w-full mb-10 mt-20 min-[720px]:mt-10">
        <div className="w-full max-w-[900px] m-auto px-2">
          <h2 className="text-slate-600 mb-2 text-3xl">Cost of Attendance</h2>
          <img
            className="object-cover w-full max-h-[15rem]"
            src={headerImage}
            alt="Cost of Attendance"
          />
          <p className="text-sm text-slate-800 mt-6">
            The 2023-2024 Cost of Attendance (COA) table below is used to
            determine eligibility for federal funding. These amounts reflect the
            estimated costs for a full-time dependent undergraduate student who
            has in-state or out-of-state residency, and is registered as a main
            campus student (on campus and off campus). The Direct/UA Billed
            Costs items are those that will be billed by and paid directly to
            UA. Students that live off campus are not billed for room fees by
            UA. The Indirect Costs items are not billed by UA; however, these
            amounts are estimates of expenses that a student may have while
            attending UA and may be included when determining eligibility for
            federal funding. The cost of attendance is specific to the student
            and used to determine federal aid eligibility.
          </p>
          <h2 className="text-slate-600 mb-2 mt-8 text-3xl">
            On Campus Budget
          </h2>
          <table className="table-auto mt-4 text-xs text-left w-full">
            <thead>
              <tr className="bg-vgred">
                <th>
                  <p className="text-white px-1 py-2 font-bold">
                    Direct/UD Billed Costs
                  </p>
                </th>
                <th>
                  <p className="text-white px-1 py-2 font-bold">In-State</p>
                </th>
                <th>
                  <p className="text-white px-1 py-2 font-bold">Out-of-State</p>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y-[1px]">
              <tr className="hover:bg-neutral-100">
                <td className="px-1 py-2">Tuition</td>
                <td className="px-1 py-2">$11,100</td>
                <td className="px-1 py-2">$32,400</td>
              </tr>
              <tr className="hover:bg-neutral-100">
                <td className="px-1 py-2">Fees Estimate</td>
                <td className="px-1 py-2">$800</td>
                <td className="px-1 py-2">$800</td>
              </tr>
              <tr className="hover:bg-neutral-100">
                <td className="px-1 py-2">Housing</td>
                <td className="px-1 py-2">$9,524</td>
                <td className="px-1 py-2">$9,524</td>
              </tr>
              <tr className="hover:bg-neutral-100">
                <td className="px-1 py-2">Food</td>
                <td className="px-1 py-2">$5,316</td>
                <td className="px-1 py-2">$5,316</td>
              </tr>
              <tr className="hover:bg-neutral-100 font-semibold">
                <td className="px-1 py-2">Total Direct Cost</td>
                <td className="px-1 py-2">$26,740</td>
                <td className="px-1 py-2">$48,040</td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto mt-4 text-xs text-left w-full">
            <thead>
              <tr className="bg-vgred">
                <th>
                  <p className="text-white px-1 py-2 font-bold">
                    Indirect Costs
                  </p>
                </th>
                <th>
                  <p className="text-white px-1 py-2 font-bold">In-State</p>
                </th>
                <th>
                  <p className="text-white px-1 py-2 font-bold">Out-of-State</p>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y-[1px]">
              <tr className="hover:bg-neutral-100">
                <td className="px-1 py-2">Books</td>
                <td className="px-1 py-2">$800</td>
                <td className="px-1 py-2">$800</td>
              </tr>
              <tr className="hover:bg-neutral-100">
                <td className="px-1 py-2">Transportation</td>
                <td className="px-1 py-2">$2,146</td>
                <td className="px-1 py-2">$3,140</td>
              </tr>
              <tr className="hover:bg-neutral-100">
                <td className="px-1 py-2">Miscellaneous</td>
                <td className="px-1 py-2">$3,696</td>
                <td className="px-1 py-2">$3,696</td>
              </tr>
              <tr className="hover:bg-neutral-100">
                <td className="px-1 py-2">Loan Fee Estimate</td>
                <td className="px-1 py-2">$70</td>
                <td className="px-1 py-2">$70</td>
              </tr>
              <tr className="hover:bg-neutral-100 font-semibold">
                <td className="px-1 py-2">Total Indirect Cost</td>
                <td className="px-1 py-2">$6,712</td>
                <td className="px-1 py-2">$7,706</td>
              </tr>
              <tr className="bg-neutral-100 font-semibold">
                <td className="px-1 py-2">TOTAL (Direct + Indirect)</td>
                <td className="px-1 py-2">$33,452</td>
                <td className="px-1 py-2">$55,746</td>
              </tr>
            </tbody>
          </table>
          <h2 className="text-slate-600 mb-2 mt-8 text-3xl">
            Off Campus Budget
          </h2>
          <table className="table-auto mt-4 text-xs text-left w-full">
            <thead>
              <tr className="bg-vgred">
                <th>
                  <p className="text-white px-1 py-2 font-bold">
                    Direct/UD Billed Costs
                  </p>
                </th>
                <th>
                  <p className="text-white px-1 py-2 font-bold">In-State</p>
                </th>
                <th>
                  <p className="text-white px-1 py-2 font-bold">Out-of-State</p>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y-[1px]">
              <tr className="hover:bg-neutral-100">
                <td className="px-1 py-2">Tuition</td>
                <td className="px-1 py-2">$11,100</td>
                <td className="px-1 py-2">$32,400</td>
              </tr>
              <tr className="hover:bg-neutral-100">
                <td className="px-1 py-2">Fees Estimate</td>
                <td className="px-1 py-2">$800</td>
                <td className="px-1 py-2">$800</td>
              </tr>
              <tr className="hover:bg-neutral-100">
                <td className="px-1 py-2">Housing</td>
                <td className="px-1 py-2">$9,248</td>
                <td className="px-1 py-2">$9,248</td>
              </tr>
              <tr className="hover:bg-neutral-100">
                <td className="px-1 py-2">Food</td>
                <td className="px-1 py-2">$5,316</td>
                <td className="px-1 py-2">$5,316</td>
              </tr>
              <tr className="hover:bg-neutral-100 font-semibold">
                <td className="px-1 py-2">Total Direct Cost</td>
                <td className="px-1 py-2">$26,464</td>
                <td className="px-1 py-2">$47,764</td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto mt-4 text-xs text-left w-full">
            <thead>
              <tr className="bg-vgred">
                <th>
                  <p className="text-white px-1 py-2 font-bold">
                    Indirect Costs
                  </p>
                </th>
                <th>
                  <p className="text-white px-1 py-2 font-bold">In-State</p>
                </th>
                <th>
                  <p className="text-white px-1 py-2 font-bold">Out-of-State</p>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y-[1px]">
              <tr className="hover:bg-neutral-100">
                <td className="px-1 py-2">Books</td>
                <td className="px-1 py-2">$800</td>
                <td className="px-1 py-2">$800</td>
              </tr>
              <tr className="hover:bg-neutral-100">
                <td className="px-1 py-2">Transportation</td>
                <td className="px-1 py-2">$2,902</td>
                <td className="px-1 py-2">$3,898</td>
              </tr>
              <tr className="hover:bg-neutral-100">
                <td className="px-1 py-2">Miscellaneous</td>
                <td className="px-1 py-2">$3,696</td>
                <td className="px-1 py-2">$3,696</td>
              </tr>
              <tr className="hover:bg-neutral-100">
                <td className="px-1 py-2">Loan Fee Estimate</td>
                <td className="px-1 py-2">$70</td>
                <td className="px-1 py-2">$70</td>
              </tr>
              <tr className="hover:bg-neutral-100 font-semibold">
                <td className="px-1 py-2">Total Indirect Cost</td>
                <td className="px-1 py-2">$7,468</td>
                <td className="px-1 py-2">$8,464</td>
              </tr>
              <tr className="bg-neutral-100 font-semibold">
                <td className="px-1 py-2">TOTAL (Direct + Indirect)</td>
                <td className="px-1 py-2">$33,932</td>
                <td className="px-1 py-2">$56,228</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CostOfAttendanceInfoPage;
