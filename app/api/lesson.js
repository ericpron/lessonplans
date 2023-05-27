export default async function generateLessonPlan(req, res) {
  const API_KEY = process.env.GPT_API_KEY;
  const prompt = req.body.prompt;

  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt,
        max_tokens: 500,
        n: 1,
        stop: null,
        temperature: 0.9,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error when generating lesson plan:", data);
      return res.status(response.status).json({ error: data });
    }

    console.log("lesson plan generated!");
    return res.status(200).json({ text: data.choices[0].text });
  } catch (error) {
    console.error("Error when generating lesson plan:", error);
    return res.status(500).json({ error: "An unexpected error occurred." });
  }
}
