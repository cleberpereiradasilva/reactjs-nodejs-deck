
const urlChannel = (channel: string) => `https://www.youtube.com/c/${channel}/videos`
const urlVideo = (videoId: string) => `https://www.youtube.com/watch?v=${videoId}`

const GetChannelJson = async (channel : string) => {
  try {
        const url = urlChannel(channel);
        const response = await fetch(url);
        const content = await response.text()
        const preJson = content.split("window[\"ytInitialData\"] = ")[1].split(";")[0]
        const json = JSON.parse(preJson);        
        return json.contents.twoColumnBrowseResultsRenderer.tabs;
  } catch (error) {
    console.log(error);
  }
};

const GetVideolJson = async (videoId : string) => {
  try {
        const url = urlVideo(videoId);
        const response = await fetch(url);
        const content = await response.text()
        const preJson = content.split("window[\"ytInitialData\"] = ")[1].split(";")[0]
        const json = JSON.parse(preJson);        
        return json.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer;
  } catch (error) {
    console.log(error);
  }
};

export { GetChannelJson, GetVideolJson}



