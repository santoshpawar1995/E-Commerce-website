export const getImageUrl = (path) => {
  return new URL(`/nav/${path}`, import.meta.url).href;
};

