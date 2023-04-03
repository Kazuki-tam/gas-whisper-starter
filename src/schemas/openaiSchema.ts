import { z } from "https://deno.land/x/zod@v3.20.2/mod.ts";

const WhisperModelSchema = z.literal("whisper-1");
const WhisperUrlSchema = z.string().url();
const WhisperFunctionArgsSchema = z.tuple([
  WhisperUrlSchema,
]);

const WhisperFunctionSchema = z.function(WhisperFunctionArgsSchema, z.string());

export { WhisperFunctionSchema, WhisperModelSchema, WhisperUrlSchema };
