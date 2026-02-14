import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  try {
    const { message } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are FRIDAY, kind and reliable AI."
        },
        {
          role: "user",
          content: message
        }
      ],
    });

    res.status(200).json({
      reply: response.choices[0].message.content
    });

  } catch (error) {
    res.status(500).json({ error: "OpenAI error" });
  }
}
