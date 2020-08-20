import cheerio from 'cheerio'
import {GetChannelText, GetVideoText, GetStatsText, GetUserText} from "../connector/";

const _textToVideoId = async (body:string) => { 
    const $ = cheerio.load(body)
    const clipsElement = $('#clips');
    const liItems = $(clipsElement).find('li').toArray();
    return liItems.map(item => $(item).attr('id').replace("clip",""));
};

const _textToProfile = (body:string) => {
  const $ = cheerio.load(body);
  const owner = $('.owner').text();
  const photo = $(".about").find('a img').attr('src').replace('30x30','120x120')
  return {owner, photo};
}

const GetVideo = async (videoId:string) => {
    const videoBody = await GetVideoText(videoId);
    const statsJson = await GetStatsText(videoId);
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


const GetDataChannel = async (channel:string) => {
  const channelText = await GetChannelText(channel);
  const videoListId = await _textToVideoId(channelText);
  const videos = await Promise.all(
        await videoListId.map(
                async (videoId:string) => await GetVideo(videoId)
        )
  );
  const profile = _textToProfile(channelText);
  return{
        ...profile,
        videos
  }
}


const GetUser = async (userId:string) => {
    const userText = await GetUserText(userId);

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
