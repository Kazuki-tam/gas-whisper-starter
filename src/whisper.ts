import { createTranscriptionByWhisper } from "./openai/index.ts";
import type { WhisperAudioUrl, WhisperFunction } from "./types/openai.ts";

/**
 * Whisper function
 */
declare const global: {
  [x: string]: WhisperFunction;
};

function WHISPER(url: WhisperAudioUrl): string {
  const response = createTranscriptionByWhisper(url);
  return response;
}

global.WHISPER = WHISPER;
