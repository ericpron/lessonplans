import Link from "next/link";
import LessonPlanMetaData from "./LessonPlanMetaData";

const LessonPlan = ({ lessonPlan }) => {
  const objectives = lessonPlan.objectives ? lessonPlan.objectives : [];
  const procedures = lessonPlan.procedures ? lessonPlan.procedures : [];

  console.log("from LessonPlan.js:", lessonPlan.id);

  return (
    <div className="mb-4 p-4 bg-white shadow-md rounded-lg">
      <Link href={"/" + lessonPlan.id}>
        <h2 className="text-2xl text-gray-600 font-bold mb-4">
          {lessonPlan.title}
        </h2>
      </Link>
      <LessonPlanMetaData
        gradeLevel={lessonPlan.gradeLevel}
        subject={lessonPlan.subject}
        material={lessonPlan.sourceMaterial}
      />
      <h3 className="text-gray-400 mt-4 mb-1">Description:</h3>
      <p className="text-gray-600 mb-2">{lessonPlan.description}</p>
      <h3 className="text-gray-400 mb-1">Objectives</h3>
      <ul className="mb-4">
        {objectives.map((objective) => (
          <li className="text-gray-600 mb-1 bg-slate-100 px-2">{objective}</li>
        ))}
      </ul>
      <h3 className="text-gray-400 mb-2">Procedures</h3>
      <ul className="mb-4">
        {procedures.map((procedure) => (
          <li className="text-gray-600 mb-2 bg-slate-100 px-2">{procedure}</li>
        ))}
      </ul>
    </div>
  );
};

export default LessonPlan;
