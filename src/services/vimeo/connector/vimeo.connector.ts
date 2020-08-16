
const urlBase = "https://vimeo.com"
const urlChannel = (channel: string) => `${urlBase}/channels/${channel}`
const urlVideo = (videoId: string) => `${urlBase}/${videoId}`
const urlStats = (videoId: string) => `${urlBase}/${videoId}?action=load_stat_counts`

const GetStatsJson = async (channel : string) => {
  try {
        const url = urlStats(channel);
        console.log(url);
        const response = await fetch(url, {
                                          headers: { 'Content-Type': 'application/json' }
                                        }
                                    );
        const content = await response.text()
        console.log(content)
        return content; 
  } catch (error) {
    console.log(error);
  }
};

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
        const content = await response.text();
        return content 
  } catch (error) {
    console.log(error);
  }
};

export { GetChannelJson, GetVideoJson, GetStatsJson}



