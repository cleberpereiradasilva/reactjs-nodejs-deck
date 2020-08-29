const getFromUrl = async (url: string, headers = {}) => {
  try {
    const response = await fetch(url, headers);
    const content = await response.text();
    return content;
  } catch (error) {
    console.log(error);
  }
};
const stringToJson = (json: string) => {
  try {
    return JSON.parse(json);
  } catch {
    return json;
  }
};

export { getFromUrl, stringToJson };
