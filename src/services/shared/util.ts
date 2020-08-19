
const getFromUrl = async (url:string, headers = {}) => {
  try {
      const response = await fetch(url, headers);
      const content = await response.text()
      return content; 
  } catch (error) {
    console.log(error);
  }
}




export { getFromUrl }
