// import TestComponent from "@/components/TestComponent";
import LessonPlanList from "@/components/LessonPlanList";
import LessonPlanForm from "../components/LessonPlanForm";
import dotenv from "dotenv";
dotenv.config();

export default function Home() {
  return (
    <div>
      <h1 className="gray-100">Add a New Lesson Plan</h1>
      <LessonPlanForm />
      <LessonPlanList />
      {/* <TestComponent /> */}
    </div>
  );
}
