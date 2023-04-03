/**
 * Extracts the file ID from a Google Drive URL.
 * @param {string} url - The URL of the Google Drive file.
 * @returns {string|undefined} The file ID if found in the URL, or undefined if not found.
 */
function getFileIdFromUrl(url: string): string | undefined {
  let fileId: string | undefined;

  // Google Drive URLs can have different formats depending on the type of file, so we use a regular expression to extract the file ID.
  const idPattern = /\/d\/([a-zA-Z0-9-_]+)/;

  // Extract the file ID from the URL.
  const match = idPattern.exec(url);
  if (match) {
    fileId = match[1];
  }

  return fileId;
}

export { getFileIdFromUrl };
