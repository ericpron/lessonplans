import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const API_KEY = process.env.GPT_API_KEY;
  const prompt = req.body.prompt;

  console.log(prompt);

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 500, // Adjust as needed
        n: 1,
        stop: null,
        temperature: 0.7,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    const data = await response.json();

    console.log("Response from GPT-4:", data);
    res.status(200).json({ content: data.choices[0].message.content });
  } catch (error) {
    console.error("Error from GPT-4:", error);
    res.status(500).json({ error: "Error from GPT-4" });
  }
}
