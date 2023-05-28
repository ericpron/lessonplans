import firestoreService from "../firestoreService";

const LessonPlanList = async () => {
  const lessonPlans = await firestoreService.getLessonPlans();
  console.log("lesson plans: ", lessonPlans);

  return (
    <div>
      <ul>
        {lessonPlans.map((lessonPlan) => (
          <li>{lessonPlan.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default LessonPlanList;
