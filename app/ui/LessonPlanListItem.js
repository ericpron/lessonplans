import Link from "next/link";
import LessonPlanMetaData from "./LessonPlanMetaData";
import Header from "./Header";

const LessonPlanListItem = ({ lessonPlan }) => {
  console.log("from LessonPlan.js:", lessonPlan.id);

  return (
    <div className="mb-4 p-4 bg-white shadow-md rounded-lg">
      <Link href={"/" + lessonPlan.id}>
        <h2 className="text-xl text-gray-600 font-bold mb-4">
          {lessonPlan.title}
        </h2>
      </Link>
      <LessonPlanMetaData
        gradeLevel={lessonPlan.gradeLevel}
        subject={lessonPlan.subject}
        material={lessonPlan.sourceMaterial}
      />
      <Header>DESCRIPTION</Header>
      <p className="text-gray-600 mb-1">{lessonPlan.description}</p>
    </div>
  );
};

export default LessonPlanListItem;
