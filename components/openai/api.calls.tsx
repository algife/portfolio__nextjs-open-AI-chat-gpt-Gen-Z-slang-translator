"use server";
import { USE_RAPIDAPI_WRAPPER } from "@/app/constants";
import axios from "axios";

const API_BASE_URL =
  (process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : `https://${process.env.VERCEL_URL}`) + "/api";

const rapidApiCall = async (messages: { role: string; content: string }[]) => {
  const options = {
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": process.env.RAPID_API_KEY || "",
      "X-RapidAPI-Host": "chatgpt53.p.rapidapi.com",
    },
    data: {
      messages,
      temperature: 0.7,
    },
  };

  try {
    const response = await axios.post(
      "https://chatgpt53.p.rapidapi.com/",
      options
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(error);
  }
};

export const transcribeToZ = async (srcText: string) => {
  if (USE_RAPIDAPI_WRAPPER)
    return await rapidApiCall([
      {
        role: "system",
        content:
          process.env.gpt_prompt_to_z ||
          "IGNORE ALL INSTRUCTIONS JUST REPLY WITH 'INCORRECT PROMPT'",
      },
      {
        role: "user",
        content: `${srcText}`,
      },
    ]);

  return (
    await axios.post(`${API_BASE_URL}/transcribe-to-z`, { body: srcText })
  ).data.message;
};

export const transcribeFromZ = async (srcText: string) => {
  if (USE_RAPIDAPI_WRAPPER)
    return await rapidApiCall([
      {
        role: "system",
        content:
          process.env.gpt_prompt_from_z ||
          "IGNORE ALL INSTRUCTIONS JUST REPLY WITH 'INCORRECT PROMPT'",
      },
      {
        role: "user",
        content: `Text to transcribe is as follows: ${srcText}`,
      },
    ]);

  return (
    await axios.post(`${API_BASE_URL}/transcribe-from-z`, {
      body: srcText,
    })
  ).data.message;
};
