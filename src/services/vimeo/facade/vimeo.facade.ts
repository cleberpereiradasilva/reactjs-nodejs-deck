import cheerio from 'cheerio'
import {GetChannelJson, GetVideoJson, GetStatsJson} from "../connector/";

const _liConverterToJson = async body => { 
    const $ = await cheerio.load(body)
    const items = $('li').toArray();
    return Promise.all(await items.map(async item => {
        const videoId = $(item).attr('id').replace("clip","");
        return await getVideo(videoId);
    }));

};


const getVideo = async videoId => {
    const videoBody = await GetVideoJson(videoId);
    const statsJson = await GetStatsJson(videoId);
    const initScript = videoBody.split('<script type="application/ld+json">')[1];
    const data = initScript.split('</script>')[0].trim();
    const json = JSON.parse(data)[0];
    const videoJson = {
          videoId,
          "thumbnail" : [json.thumbnailUrl],
          "title" : json.name,
          "description" : json.description,
          "publishedTimeText" : json.uploadDate,
          "viewCountText" : JSON.parse(statsJson).total_plays.raw,
    }
    return videoJson;
};


const GetDataChannel = async channel => {
  const tabs = await GetChannelJson(channel);
  const $ = cheerio.load(tabs)
  const ol = $('#clips');
  const json = await _liConverterToJson(ol.html());
  return json;
}
export { GetDataChannel, GetVideoJson as GetVideo };
