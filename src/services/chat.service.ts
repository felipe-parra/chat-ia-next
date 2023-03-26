import { config } from "@/config";
import axios from "axios";

/**
 * Chat GPT-3 service
 * @param {string} message
 * @returns {Promise<string>}
 */
export const chatGPT3 = async (message: string) => {
  try {
    const { data } = await axios.post(
      "https://api-inference.huggingface.co/models/Eliza",
      {
        inputs: message,
      }
    );
    return data;
  } catch (err) {
    console.log(err);
    return {
      error: {
        message: "Algo salió mal, intente nuevamente",
      },
    };
  }
};

const OPENAI_API_URL = "https://api.openai.com/v1";

type ChatServiceResponse = {
  message: string;
};

export const sendMessage = async (
  message: string
): Promise<ChatServiceResponse | any> => {
  try {
    const requestBody = {
      prompt: `Me: ${message}\nBot:`,
      temperature: 0.7,
      max_tokens: 60,
      stop: "\n",
    };

    const response = await fetch(
      `${OPENAI_API_URL}/engines/text-davinci-003/completions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${config.openAIKey}`,
        },
        body: JSON.stringify(requestBody),
      }
    );

    const data = await response.json();

    console.log({ data, x: config.openAIKey });
    if (data.choices && data.choices[0]) {
      return { message: data.choices[0].text };
    }

    throw new Error("Unable to get response from ChatGPT");
  } catch (err) {
    console.log(err);
    return {
      error: {
        message: "Algo salió mal, intente nuevamente",
      },
    };
  }
};
