"use client";

import { useState } from "react";
import firestoreService from "../firestoreService";
import { generateLessonPlan } from "../gpt";

function LessonPlanForm() {
  const [title, setTitle] = useState("Lesson plan for 5th grade english");
  const [gradeLevel, setGradeLevel] = useState("5th grade");
  const [subject, setSubject] = useState("English");
  const [sourceMaterial, setSourceMaterial] = useState(
    "Amanda Gorman's poem 'The Hill We Climb'"
  );

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    setSubmitting(true);
    event.preventDefault();

    const prompt = `Generate a lesson plan based on the provided subject: "${subject}", grade level: "${gradeLevel}", and source material: "${sourceMaterial}". Respond ONLY in valid JSON code using the following template. 
    
    Output example: {"objectives": [ "objective 1", "objective 2", "objective 3" ],
    "description": "description",
    "procedures": ["procedure 1", "procedure 2", "procedure 3", ...] }
    
    Output:`;

    const lessonPlanContent = await generateLessonPlan(prompt);

    const lessonPlan = {
      id: Date.now().toString(), // using timestamp as an example id
      title: title,
      gradeLevel: gradeLevel,
      subject: subject,
      sourceMaterial: sourceMaterial,
      objectives: lessonPlanContent.objectives,
      description: lessonPlanContent.description,
      procedures: lessonPlanContent.procedures,
    };

    console.log(lessonPlan);
    await firestoreService.addLessonPlan(lessonPlan);

    setSubmitting(false);
    setTitle("");
    setGradeLevel("");
    setSubject("");
    setSourceMaterial("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      class="w-full max-w-sm p-6 space-y-8 bg-white rounded shadow-md"
    >
      <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
          Title:
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          value={title || "Lesson Plan for 5th Grade English"}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="gradeLevel"
        >
          Grade level:
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="gradeLevel"
          type="text"
          value={gradeLevel || "5th grade"}
          onChange={(e) => setGradeLevel(e.target.value)}
        />
      </div>
      <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="subject">
          Subject:
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="subject"
          type="text"
          value={subject || "English"}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div>
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="sourceMaterial"
        >
          Source Material:
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="sourceMaterial"
          type="text"
          value={sourceMaterial || "Amanda Gorman's Inauguration Poem"}
          onChange={(e) => setSourceMaterial(e.target.value)}
        />
      </div>
      <div class="flex">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={submitting}
        >
          Submit
        </button>
        {submitting && (
          <svg
            class="animate-spin ml-3 w-5 h-5 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
      </div>
    </form>
  );
}

export default LessonPlanForm;
