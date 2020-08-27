import {GetVideoText, GetStatsText}  from "../connector/";
import {stringToJson} from "../../shared";

const GetVideo = async (videoId:string) => {
    const videoBody = await GetVideoText(videoId);
    const statsJson = await GetStatsText(videoId);
    const initScript = videoBody.split('<script type="application/ld+json">')[1];
    const data = initScript.split('</script>')[0].trim();
    const json = stringToJson(data)[0];
    const videoJson = {
          videoId,
          "thumbnail" : [json.thumbnailUrl],
          "title" : json.name,
          "description" : json.description,
          "publishedTimeText" : json.uploadDate,
          "viewCountText" : stringToJson(statsJson).total_plays.raw,
    }
    return videoJson;
};

export { GetVideo };
