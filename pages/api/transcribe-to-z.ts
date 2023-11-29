// export default async function transcribeToZ(srcText: string) {
//   console.log("lanzando request");

//   for await (const chunk of stream) {
//     process.stdout.write(chunk.choices[0]?.delta?.content || "");
//   }

//   return "foo bar AI";
// }

import openAiClient from "@/components/openai/api.client";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    if (req.method === "POST") {
      const stream = await openAiClient.chat.completions.create({
        stream: true,
        model: "gpt-3.5-turbo",
        temperature: 0.7,
        messages: [
          {
            role: "system",
            content: process.env.gpt_prompt_to_z || "",
          },
          {
            role: "user",
            content: req.body || "",
          },
        ],
        response_format: { type: "json_object" },
      });

      let result = "";
      for await (const chunk of stream) {
        result += chunk.choices[0]?.delta?.content || "";
      }

      console.log({ result });
      res.status(200).json({ message: result });
    } else {
      res.status(400).send({ message: "Unexpected Method" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error: failed to load data" });
  }
}
