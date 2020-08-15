import {GetChannelJson, GetVideolJson} from "../connector/youtube.connector";

const _tabsConvertToGridRenderer = tabs => tabs && tabs.filter(tab => tab.tabRenderer && tab.tabRenderer.content)[0]
            .tabRenderer
            .content
            .sectionListRenderer
            .contents[0]
            .itemSectionRenderer
            .contents[0]
            .gridRenderer
            .items;

const getVideo = gridVideoRenderer => ({
          "videoId" : gridVideoRenderer.videoId,
          "thumbnail" : gridVideoRenderer.thumbnail.thumbnails,
          "title" : gridVideoRenderer.title.simpleText,
          "publishedTimeText" : gridVideoRenderer.publishedTimeText.simpleText,
          "viewCountText" : gridVideoRenderer.viewCountText.simpleText
      });


const GetDataChannel = async channel => {
  const tabs = await GetChannelJson(channel);
  const items = await _tabsConvertToGridRenderer(tabs);
  return items.reduce( (acc, { gridVideoRenderer }) => {
      return acc.concat([getVideo(gridVideoRenderer)])
   },[])

}
export { GetDataChannel, GetVideolJson };
