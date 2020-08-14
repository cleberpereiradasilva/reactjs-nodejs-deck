
const url = (channel: string) => `https://www.youtube.com/c/${channel}/videos`
const GetChannelJson = async (channel : string) => {
  try {
        const response = await fetch(url(channel));
        const content = await response.text()
        const preJson = content.split("window[\"ytInitialData\"] = ")[1].split(";")[0]
        const json = JSON.parse(preJson);        
        return json.contents.twoColumnBrowseResultsRenderer.tabs;
  } catch (error) {
    console.log(error);
  }
};

export { GetChannelJson}



