
const urlBase = "https://vimeo.com/"
const urlChannel = (channel: string) => `${urlBase}/channels/${channel}`
const urlVideo = (videoId: string) => `https://www.youtube.com/watch?v=${videoId}`

const GetChannelJson = async (channel : string) => {
  try {
        const url = urlChannel(channel);
        const response = await fetch(url);
        const content = await response.text()
        return content; 
  } catch (error) {
    console.log(error);
  }
};

const GetVideoJson = async (videoId : string) => {
  try {
        const url = urlVideo(videoId);
        const response = await fetch(url);
        const content = await response.text()
        return content 
  } catch (error) {
    console.log(error);
  }
};

export { GetChannelJson, GetVideoJson}



