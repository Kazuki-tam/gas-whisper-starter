/**
 * Checks if a given URL is a Google Drive URL.
 * @param {string} url - The URL to be checked.
 * @returns {boolean} - Returns true if the URL matches the Google Drive URL pattern, false otherwise.
 */

const isGoogleDriveUrl = (url: string): boolean => {
  const regex =
    /^https?:\/\/(drive|docs)\.google\.com\/(file\/d\/|open\?id=)([\w-]+).*$/;
  return regex.test(url);
};

export { isGoogleDriveUrl };
