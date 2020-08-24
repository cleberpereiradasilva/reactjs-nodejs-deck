import { GetVideoText } from "../connector/youtube.connector";


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

export { GetVideo };
