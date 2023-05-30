"use client";

import { useState } from "react";
import firestoreService from "../firestoreService";
import { generateLessonPlan } from "../gpt";
import FormInput from "@/app/ui/FormInput";

function LessonPlanForm() {
  const [title, setTitle] = useState("Lesson plan for 5th grade english");
  const [gradeLevel, setGradeLevel] = useState("5th grade");
  const [subject, setSubject] = useState("English");
  const [sourceMaterial, setSourceMaterial] = useState(
    "Amanda Gorman's poem 'The Hill We Climb'"
  );
  const [purpose, setPurpose] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    setSubmitting(true);
    event.preventDefault();

    const prompt = `Generate a lesson plan based on the provided title: "${title},  subject: "${subject}", grade level: "${gradeLevel}", source material: "${sourceMaterial}", and core theme/skill to be learned: "${purpose}". Respond ONLY in valid JSON code using the following template. 
    
    Output example: {"objectives": [ "objective 1", "objective 2", "objective 3", ... ],
    "description": "description",
    "common_core_standards": [ "standard 1", "standard 2", "objective 3", ... ],
    "procedures": ["procedure 1", "procedure 2", "procedure 3", ...] }
    
    Output:`;

    const lessonPlanContent = await generateLessonPlan(prompt);

    // need to include / figure out how to handle COMMON CORE STANDARDS ETC.

    const lessonPlan = {
      id: Date.now().toString(), // using timestamp as an example id
      title: title,
      gradeLevel: gradeLevel,
      subject: subject,
      sourceMaterial: sourceMaterial,
      purpose: purpose,
      standards: lessonPlanContent.common_core_standards,
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
    setPurpose("");
    setSourceMaterial("");
  };

  return (
    <div class="p-4 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="mb-4 p-4 bg-white shadow-lg rounded-lg space-y-4"
      >
        <h1 className="text-gray-700 text-2xl font-bold mb-2">
          Generate Lesson Plans
        </h1>
        <div>
          <FormInput
            title="Title"
            id="title"
            type="text"
            value={title}
            placeholder="e.g. Lesson plan for 5th grade english"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <FormInput
            title="Grade Level"
            id="gradeLevel"
            value={gradeLevel}
            placeholder="e.g. 5th grade"
            onChange={(e) => setGradeLevel(e.target.value)}
          />
        </div>
        <div>
          <FormInput
            title="Subject"
            id="subject"
            type="text"
            value={subject}
            placeholder="e.g. English or Math"
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div>
          <FormInput
            title="Source Material"
            id="sourceMaterial"
            type="text"
            value={sourceMaterial}
            placeholder="e.g. 'The Wild Robot' by Peter Brown"
            onChange={(e) => setSourceMaterial(e.target.value)}
          />
        </div>
        <div>
          <FormInput
            title="Core Theme/Skill"
            id="purpose"
            type="text"
            value={purpose}
            placeholder="e.g. Appreciate the value of hard work"
            onChange={(e) => setPurpose(e.target.value)}
          />
        </div>
        <div className="flex align-middle">
          <button
            className="gradient-border bg-slate-500 hover:bg-slate-700 border-slate-900 w-full text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={submitting}
          >
            {submitting ? "Generating..." : "Generate Lesson Plan"}
          </button>
          {submitting && (
            <svg
              className="animate-spin ml-3 w-5 h-5 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
        </div>
      </form>
    </div>
  );
}

export default LessonPlanForm;
