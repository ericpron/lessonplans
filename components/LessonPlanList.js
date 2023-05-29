import firestoreService from "../firestoreService";
import LessonPlanListItem from "../app/ui/LessonPlanListItem";

const LessonPlanList = async () => {
  const lessonPlans = await firestoreService.getLessonPlans();

  return (
    <div class="w-screen p-4 space-y-8 bg-gray-100">
      <ul>
        {lessonPlans.map((lessonPlan) => (
          <LessonPlanListItem key={lessonPlan.id} lessonPlan={lessonPlan} />
        ))}
      </ul>
    </div>
  );
};

export default LessonPlanList;
