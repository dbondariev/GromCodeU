export const parseUser = string => {
  try {
    return JSON.parse(string);
  } catch (error) {
    return null;
  }
};
