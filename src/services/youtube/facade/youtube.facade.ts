import {GetChannelText, GetVideoText } from "../connector/youtube.connector";

const _tabsConvertToGridRenderer = tabs => tabs && tabs.filter(
            tab => tab.tabRenderer && tab.tabRenderer.content
            )[0]
            .tabRenderer
            .content
            .sectionListRenderer
            .contents[0]
            .itemSectionRenderer
            .contents[0]
            .gridRenderer
            .items;

const GetVideo = async videoId => {
    const videoText = await GetVideoText(videoId);
    const preJson = videoText.split("window[\"ytInitialPlayerResponse\"] = ")[1]
                .split("if (window.ytcsi)")[0]
                .trim()
                .slice(0, -1)
    const json = await JSON.parse(preJson);        
    const gridVideoRenderer = json.videoDetails
    return {
            "videoId" : gridVideoRenderer.videoId,
            "thumbnail" : gridVideoRenderer
                    .thumbnail
                    .thumbnails
                    .map(image => image.url),
            "title" : gridVideoRenderer.title,
            "description" :"",
            "publishedTimeText" : json.microformat.publishDate,
            "viewCountText" : gridVideoRenderer.viewCount
      };
}


const GetDataChannel = async channel => {
  const channelText = await GetChannelText(channel);
  const preJson = channelText.split("window[\"ytInitialData\"] = ")[1].split(";")[0]
  const json = JSON.parse(preJson);        
  const tabs = json.contents.twoColumnBrowseResultsRenderer.tabs;
  const items = await _tabsConvertToGridRenderer(tabs);
  return Promise.all(
        items.map(async ({ gridVideoRenderer }) => await GetVideo(gridVideoRenderer.videoId))     
  )

}
export { GetDataChannel, GetVideo };
