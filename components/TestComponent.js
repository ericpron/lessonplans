"use client";

import { useState } from "react";

function TestComponent() {
  const [assignmentResult, setAssignmentResult] = useState(null);
  const [lessonPlanResult, setLessonPlanResult] = useState(null);

  const fetchAssignment = async () => {
    const prompt = "Write an assignment about the French Revolution.";
    const res = await fetch("/api/assignment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setAssignmentResult(data.message);
  };

  const fetchLessonPlan = async () => {
    const prompt = "Design a lesson plan for teaching algebra.";
    const res = await fetch("/api/lesson", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setLessonPlanResult(data.text);
  };

  return (
    <div>
      <button onClick={fetchAssignment}>Generate Assignment</button>
      <button onClick={fetchLessonPlan}>Generate Lesson Plan</button>
      {assignmentResult && (
        <div>
          <h2>Generated Assignment:</h2>
          <p>{assignmentResult}</p>
        </div>
      )}
      {lessonPlanResult && (
        <div>
          <h2>Generated Lesson Plan:</h2>
          <p>{lessonPlanResult}</p>
        </div>
      )}
    </div>
  );
}

export default TestComponent;
