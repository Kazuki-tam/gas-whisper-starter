import { z } from "https://deno.land/x/zod@v3.20.2/mod.ts";
import {
  WhisperFunctionSchema,
  WhisperUrlSchema,
} from "../schemas/openaiSchema.ts";

type WhisperRequestPayload = {
  model: string;
  temperature: number;
  file: GoogleAppsScript.Base.Blob;
};

type WhisperRequestOptions = {
  method: "post";
  headers: {
    Authorization: string;
  };
  payload: WhisperRequestPayload;
};

type WhisperApiInfo = {
  text: string;
};

type WhisperFunction = z.infer<typeof WhisperFunctionSchema>;

type WhisperAudioUrl = z.infer<typeof WhisperUrlSchema>;

export type {
  WhisperApiInfo,
  WhisperAudioUrl,
  WhisperFunction,
  WhisperRequestOptions,
};
