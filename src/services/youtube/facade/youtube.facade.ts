import {GetChannelText, GetVideoText } from "../connector/youtube.connector";

const _jsonToVideoId = json => {    
    const tabs = json.contents.twoColumnBrowseResultsRenderer.tabs;
    return tabs && tabs.filter(tab => tab.tabRenderer && tab.tabRenderer.content
            )[0]
            .tabRenderer
            .content
            .sectionListRenderer
            .contents[0]
            .itemSectionRenderer
            .contents[0]
            .gridRenderer
            .items;
}


const _jsonToProfile = json => {
  const owner = json.microformat.microformatDataRenderer.title; 
  const photo = json.microformat.microformatDataRenderer.thumbnail.thumbnails[0].url;
  return {owner, photo};
}


const GetVideo = async videoId => {
    const videoText = await GetVideoText(videoId);
    const preJson = videoText.split("window[\"ytInitialPlayerResponse\"] = ")[1]
                .split("if (window.ytcsi)")[0]
                .trim()
                .slice(0, -1)
    const json = await JSON.parse(preJson);        
    const gridVideoRenderer = json.videoDetails
    const publishedTimeText = json.microformat
                                .playerMicroformatRenderer
                                .publishDate
    const thumbnail = gridVideoRenderer
                    .thumbnail
                    .thumbnails
                    .map(image => image.url)
    return {
            "videoId" : gridVideoRenderer.videoId,
            thumbnail,
            publishedTimeText,
            "title" : gridVideoRenderer.title,
            "description" :"",
            "viewCountText" : gridVideoRenderer.viewCount
      };
}


const GetDataChannel = async (channel:string) => {
  const channelText = await GetChannelText(channel);
  const preJson = channelText.split("window[\"ytInitialData\"] = ")[1].split(";")[0]
  const json = JSON.parse(preJson);        
  const items = await _jsonToVideoId(json);
  const videos = await Promise.all(
        items.map(
            async ({ gridVideoRenderer })=> await GetVideo(
                                                    gridVideoRenderer.videoId
                                            )
        )     
  )

  const profile = _jsonToProfile(json);
  return {
    ...profile,
    videos
  }

}
export { GetDataChannel, GetVideo };
