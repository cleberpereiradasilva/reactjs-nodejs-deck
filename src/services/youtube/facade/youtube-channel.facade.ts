import {GetChannelText} from "../connector/youtube.connector";
import {GetVideo} from ".";

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
export { GetDataChannel };
