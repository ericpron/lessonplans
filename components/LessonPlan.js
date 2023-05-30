import Link from "next/link";
import LessonPlanMetaData from "../app/ui/LessonPlanMetaData";
import Header from "@/app/ui/Header";
import dateParser from "../app/utils/DateParser";

const LessonPlan = ({ lessonPlan }) => {
  const objectives = lessonPlan.objectives ? lessonPlan.objectives : [];
  const procedures = lessonPlan.procedures ? lessonPlan.procedures : [];
  const standards = lessonPlan.standards ? lessonPlan.standards : [];

  return (
    <div className="mb-4 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl text-gray-600 font-bold mb-4">
        {lessonPlan.title}
      </h2>
      <p className="text-gray-300 mb-2">{dateParser(lessonPlan.id)}</p>
      <LessonPlanMetaData
        gradeLevel={lessonPlan.gradeLevel}
        subject={lessonPlan.subject}
        material={lessonPlan.sourceMaterial}
      />
      <Header>DESCRIPTION</Header>
      <p className="text-gray-600 mb-2">{lessonPlan.description}</p>
      <Header>STANDARDS</Header>
      <ul className="mb-4">
        {standards.map((standard) => (
          <li className="py-2 text-gray-600 mb-3 bg-slate-50 px-2 rounded">
            {standard}
          </li>
        ))}
      </ul>
      <Header>OBJECTIVES</Header>
      <ul className="mb-4">
        {objectives.map((objective) => (
          <li className="py-2 text-gray-600 mb-3 bg-slate-50 px-2 rounded">
            {objective}
          </li>
        ))}
      </ul>
      <Header>PROCEDURES</Header>
      <ul className="mb-4">
        {procedures.map((procedure) => (
          <li className="py-2 text-gray-600 mb-3 bg-slate-50 px-2 rounded">
            {procedure}
          </li>
        ))}
      </ul>
      <Header>ACTIVITIES</Header>
      {/* <ul className="mb-4">
        {procedures.map((procedure) => (
          <li className="text-gray-600 mb-2 bg-slate-100 px-2">{procedure}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default LessonPlan;
