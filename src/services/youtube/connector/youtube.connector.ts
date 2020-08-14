
const _getChannelJson = async channel => {
 const url = `https://www.youtube.com/c/${channel}/videos`
  try {
        const response = await fetch(url);
        const content = await response.text()
        const preJson = content.split("window[\"ytInitialData\"] = ")[1].split(";")[0]
        const json = JSON.parse(preJson);        
        return json.contents.twoColumnBrowseResultsRenderer.tabs;
  } catch (error) {
    console.log(error);
  }
};

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
  const tabs = await _getChannelJson(channel);
  const items = await _tabsConvertToGridRenderer(tabs);
  return items.reduce( (acc, { gridVideoRenderer }) => {
      return acc.concat([getVideo(gridVideoRenderer)])
   },[])

}

export { GetDataChannel };


