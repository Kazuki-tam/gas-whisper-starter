import { sleepForBackoff } from "../../utils/sleepForBackoff.ts";
import { isGoogleDriveUrl } from "../../utils/isGoogleDriveUrl.ts";
import { getFileIdFromUrl } from "../../utils/getFileIdFromUrl.ts";
import type {
  WhisperAudioUrl,
  WhisperRequestOptions,
} from "../../types/openai.ts";

/**
 * Execute HTTP requests and retry failed requests.
 * @param {string} OPENAI_API_KEY OpenAI API key
 * @param {WhisperAudioUrl} fileUrl File url path
 * @return Response returned by Whisper
 */

const httpRequestForWhisper = (
  OPENAI_API_KEY: string,
  fileUrl: WhisperAudioUrl,
) => {
  const url = "https://api.openai.com/v1/audio/transcriptions";
  let audioFilePath = fileUrl;
  let audioFileData;

  if (isGoogleDriveUrl(fileUrl)) {
    const fileId = getFileIdFromUrl(fileUrl);
    const driveUrl = `https://drive.google.com/uc?id=${fileId}`;
    audioFilePath = driveUrl;
  }

  const audioFileResponse = UrlFetchApp.fetch(audioFilePath);
  if (audioFileResponse.getResponseCode() === 200) {
    audioFileData = audioFileResponse.getBlob().setName("target.m4a");
  } else {
    console.error(
      `Error fetching audio file: ${audioFileResponse.getContentText()}`,
    );
    return;
  }

  if (!audioFileData) return;

  const payload = {
    model: "whisper-1",
    temperature: 0,
    file: audioFileData,
  };

  const fetchOptions: WhisperRequestOptions = {
    method: "post",
    headers: { Authorization: "Bearer " + OPENAI_API_KEY },
    payload: payload,
  };

  let response = null;
  for (let numRetries = 0; numRetries < 5; numRetries++) {
    const lastRequestTime = Date.now();
    try {
      Logger.log(`Sending HTTP request to ${url}`);
      response = UrlFetchApp.fetch(url, fetchOptions);
      const responseCode = response.getResponseCode();
      if (responseCode !== 429 && responseCode < 500) {
        return response;
      }
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
    Logger.log(`Retrying after ${numRetries} failed requests.`);
    sleepForBackoff(numRetries, lastRequestTime);
  }
  return response;
};

export { httpRequestForWhisper };
