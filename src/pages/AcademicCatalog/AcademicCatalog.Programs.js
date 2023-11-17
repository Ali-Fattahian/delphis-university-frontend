import React from "react";
import AcademicCatalogProgram from "./AcademicCatalog.Program";

const AcademicCatalogPrograms = ({ programs }) => {
  return (
    <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 justify-center p-4 gap-4 w-full m-auto">
      {programs.map((program) => (
        <AcademicCatalogProgram
          title={program.title}
          image={program.image}
          key={program.key}
          link={program.link}
        />
      ))}
    </div>
  );
};

export default AcademicCatalogPrograms;
