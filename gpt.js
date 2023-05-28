import axios from "axios";

const API_KEY = process.env.customKey;

export const generateAssignment = async (prompt) => {
  console.log(prompt);
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 500, // Adjust as needed
        n: 1,
        stop: null,
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    console.log("Response from GPT-4:", response.data);
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error from GPT-4:", error);
    return null;
  }
};

export const generateLessonPlan = async (prompt) => {
  console.log(prompt);

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are an AI teacher that is part of a service for helping teachers generate lesson plans and assignments for their students. You receive requests from teachers containing information about what lesson plans to generate. You respond ONLY in valid JSON code, so you must ensure that your response is formatted correctly.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 500,
        n: 1,
        stop: null,
        temperature: 0.9,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    console.log(response);
    console.log("lesson plan generated!");
    return JSON.parse(response.data.choices[0].message.content.trim());
  } catch (error) {
    console.error(error);
    return null;
  }
};
