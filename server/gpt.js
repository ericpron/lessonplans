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
      "https://api.openai.com/v1/completions",
      {
        model: "text-davinci-003",
        prompt,
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
    return JSON.parse(response.data.choices[0].text.trim());
  } catch (error) {
    console.error(error);
    return null;
  }
};
