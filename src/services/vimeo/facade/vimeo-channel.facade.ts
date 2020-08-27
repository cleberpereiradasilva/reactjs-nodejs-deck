import cheerio from 'cheerio'
import {GetChannelText } from "../connector/";
import {GetVideo} from './vimeo-video.facade';

const _textToVideoId = async (body:string) => { 
    const $ = cheerio.load(body)
    const clipsElement = $('#clips');
    const liItems = $(clipsElement).find('li').toArray();
    return liItems.map(item => $(item).attr('id').replace("clip",""));
};

const _textToProfile = (body:string) => {
  const $ = cheerio.load(body);
  const owner = $('.owner').text();
  const photo = $(".about").find('a img')?.attr('src')?.replace('30x30','120x120')
  return {owner, photo};
}



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




export { GetDataChannel };
