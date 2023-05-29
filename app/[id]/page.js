// import TestComponent from "@/components/TestComponent";
"use client";

import LessonPlan from "@/components/LessonPlan";
import firestoreService from "@/firestoreService";

const Page = async ({ params } = {}) => {
  const lessonPlan = await firestoreService.getLessonPlanById(params.id);
  console.log(lessonPlan);

  return (
    <div class="w-screen">
      <h1 class="text-white">{params.id}</h1>
      <LessonPlan key={params.id} lessonPlan={lessonPlan} />
    </div>
  );
};

export default Page;
