"use server";
import OpenAI from "openai";

const openAiClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY ?? "",
  organization: process.env.OPENAI_API_ORG ?? "",
});
export default openAiClient;
