import firestoreService from "../firestoreService";
import LessonPlanListItem from "../app/ui/LessonPlanListItem";

const LessonPlanList = async () => {
  const lessonPlans = await firestoreService.getLessonPlans();

  return (
    <div class="p-4 space-y-8 themed-background">
      <ul>
        {lessonPlans.map((lessonPlan) => (
          <LessonPlanListItem key={lessonPlan.id} lessonPlan={lessonPlan} />
        ))}
      </ul>
    </div>
  );
};

export default LessonPlanList;
