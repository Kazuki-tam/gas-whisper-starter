import { httpRequestForWhisper } from "./httpRequestForWhisper.ts";
import { getPropertiesService } from "../../utils/getPropertiesService.ts";
import type { WhisperApiInfo, WhisperAudioUrl } from "../../types/openai.ts";

/**
 * Create translation with OpenAI Whisper
 *
 * @param {WhisperAudioUrl} filePath
 * @return Response text returned by Whisper
 */

const createTranscriptionByWhisper = (filePath: WhisperAudioUrl) => {
  const OPENAI_API_KEY: string = getPropertiesService("OPENAI_API_KEY");
  const response = httpRequestForWhisper(OPENAI_API_KEY, filePath);
  if (!response) {
    throw new Error("Error: Response error.");
  }
  const parsedRes = JSON.parse(response.getContentText()) as WhisperApiInfo;
  console.log(parsedRes);
  return parsedRes.text;
};

export { createTranscriptionByWhisper };
