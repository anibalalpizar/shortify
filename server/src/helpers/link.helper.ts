export const generateShortLink = async (): Promise<string> => {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  const length = 8;

  let shortUrl = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    shortUrl += characters.charAt(randomIndex);
  }

  return `http://localhost:3000/${shortUrl}`;
};
