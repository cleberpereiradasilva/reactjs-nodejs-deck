import cheerio from 'cheerio'
import {GetChannelJson, GetVideoJson, GetStatsJson, GetUserJson} from "../connector/";

const _liConverterToJson = async body => { 
    const $ = await cheerio.load(body)
    const items = $('li').toArray();
    return Promise.all(await items.map(async item => {
        const videoId = $(item).attr('id').replace("clip","");
        return await GetVideo(videoId);
    }));

};


const GetVideo = async videoId => {
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


const GetUser = async userId => {
    const userText = await GetUserJson(userId);

    const videosText = userText
        .split('vimeo.config = _extend((vimeo.config || {}),')[1]
        .split("var __i18nLocale")[0]
        .trim()
        .slice(0,-2)
    const userJson = await JSON.parse(videosText);
    const clipsJson = userJson.profile.initial_state.clips;
    const userVideosJson = await clipsJson.map(async clip =>  await GetVideo(clip.clip_id))
    const { display_name, url, location, sm_portrait} = userJson.profile.app_config.user;
    return {
        user: {
            name: display_name,
            url,
            location,
            photo: sm_portrait
        },
        videos: await Promise.all(userVideosJson)
    }
}


export { GetDataChannel, GetVideo, GetUser };
