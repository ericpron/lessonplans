import firestoreService from "../firestoreService";
import LessonPlanListItem from "./LessonPlanListItem";

const LessonPlanList = async () => {
  const lessonPlans = await firestoreService.getLessonPlans();

  return (
    <div class="w-screen p-4 space-y-8 bg-gray-600 shadow-md">
      <ul>
        {lessonPlans.map((lessonPlan) => (
          <LessonPlanListItem key={lessonPlan.id} lessonPlan={lessonPlan} />
        ))}
      </ul>
    </div>
  );
};

export default LessonPlanList;
