import { GetUserText} from "../connector/";
import {GetVideo} from "./vimeo-video.facade";


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


export { GetUser };
