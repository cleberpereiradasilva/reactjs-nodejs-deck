
const urlBase = "https://vimeo.com"
const urlChannel = (channel: string) => `${urlBase}/channels/${channel}`
const urlVideo = (videoId: string) => `${urlBase}/${videoId}`
const urlUser = (userId: string) => `${urlBase}/user${userId}`
const urlStats = (videoId: string) => `${urlBase}/${videoId}?action=load_stat_counts`


const _getFromUrl = async (url:string, headers = {}) => {
  try {
      const response = await fetch(url, headers);
      const content = await response.text()
      return content; 
  } catch (error) {
    console.log(error);
  }
}

const GetStatsJson = async (channel : string) => {
    const url = urlStats(channel);
    const headers = {
        headers: { 
            'Content-Type': 'application/json',
            'x-requested-with': 'XMLHttpRequest' 
        }        
    }
    return await _getFromUrl(url, headers); 
};

const GetChannelJson = async (channel : string) => {
    const url = urlChannel(channel);
    return await _getFromUrl(url);
};

const GetVideoJson = async (videoId : string) => {
    const url = urlVideo(videoId);
    return await _getFromUrl(url);
};

const GetUserJson = async (userId : string) => {
    const url = urlUser(userId);
    return await _getFromUrl(url);
};

export { GetChannelJson, GetVideoJson, GetStatsJson, GetUserJson }



