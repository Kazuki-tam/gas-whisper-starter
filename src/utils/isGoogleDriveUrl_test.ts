import { assertEquals } from "https://deno.land/std@0.173.0/testing/asserts.ts";
import { isGoogleDriveUrl } from "./isGoogleDriveUrl.ts";

Deno.test("isGoogleDriveUrl should return true for valid Google Drive URLs", () => {
  const validUrls = [
    "https://drive.google.com/file/d/abc123/view",
    "https://docs.google.com/file/d/abc123/edit",
  ];

  for (const url of validUrls) {
    const result = isGoogleDriveUrl(url);
    assertEquals(result, true);
  }
});

Deno.test("isGoogleDriveUrl should return false for invalid URLs", () => {
  const invalidUrls = [
    "https://google.com/",
    "https://example.com/",
  ];

  for (const url of invalidUrls) {
    const result = isGoogleDriveUrl(url);
    assertEquals(result, false);
  }
});
