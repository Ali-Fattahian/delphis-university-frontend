import React from "react";

const AcademicCalenderPageTable = ({ info }) => {
  return (
    <>
      {info.map((date) => (
        <table key={date.key} className="table-auto my-6 text-sm shadow-sm">
          <thead>
            <tr className="border-[1px] border-b-0 border-neutral-200">
              <th className="p-2 text-left bg-vggreen text-white" colSpan={2}>
                <p>{`${date.month} ${date.year}`}</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {date.events.map((event) => (
              <tr key={event.key} className="bg-white">
                <th className="border-b-[1px] border-neutral-100 px-4 font-light">
                  {event.day}
                </th>
                <td className="border-[1px] border-neutral-100 p-3">
                  <p className="text-sm font-semibold text-vgred">
                    {event.title}
                  </p>
                  <p className="text-sm text-neutral-700 mt-2">
                    {event.description}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </>
  );
};

export default AcademicCalenderPageTable;
