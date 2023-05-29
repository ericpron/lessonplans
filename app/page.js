// import TestComponent from "@/components/TestComponent";
import LessonPlanList from "@/components/LessonPlanList";
import LessonPlanForm from "../components/LessonPlanForm";
import dotenv from "dotenv";
dotenv.config();

export default function Home() {
  return (
    <div class="">
      <LessonPlanForm />
      <LessonPlanList />
      {/* <TestComponent /> */}
    </div>
  );
}
