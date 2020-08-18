import cheerio from 'cheerio'
import {GetChannelJson, GetVideoJson, GetStatsJson} from "../connector/";

const _liConverterToJson = async body => { 
    const $ = await cheerio.load(body)
    const items = $('li').toArray();
    return Promise.all(await items.map(async item => {
        const videoId = $(item).attr('id').replace("clip","");
        const videoBody = await GetVideoJson(videoId);
        return await getVideo(videoBody);
    }));


};


const getVideo = async videoBody => {
    const initScript = videoBody.split('<script type="application/ld+json">')[1];
    const data = initScript.split('</script>')[0].trim();
    const json = JSON.parse(data)[0];
    const videoId = json.url.split('/').pop();
    const videoJson = {
          videoId,
          "thumbnail" : [json.thumbnailUrl],
          "title" : json.name,
          "description" : json.description,
          "publishedTimeText" : json.uploadDate,
          "viewCountText" : "",
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
