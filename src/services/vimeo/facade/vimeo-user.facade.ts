import { GetUserText } from "../connector/";
import { GetVideo } from "./vimeo-video.facade";
import { stringToJson } from "../../shared";
import User from "../../../domain/request/User";
import user from "../../../domain/model/user";

export default class VimeoUser implements User{ 
  async load(userId: string): Promise<user> {
  const userText = await GetUserText(userId);
  const videosText = userText
    .split("vimeo.config = _extend((vimeo.config || {}),")[1]
    .split("var __i18nLocale")[0]
    .trim()
    .slice(0, -2);
  const userJson = stringToJson(videosText);
  const clipsJson = userJson.profile.initial_state.clips;
  const userVideosJson = await clipsJson.map(
    async (clip: unknown) => await GetVideo(clip.clip_id)
  );
  const {
    display_name,
    url,
    location,
    sm_portrait,
  } = userJson.profile.app_config.user;
  const userData:user =  {
    user: {
      name: display_name,
      url,
      location,
      photo: sm_portrait,
    },
    videos: await Promise.all(userVideosJson),
  };

  return userData

  }

}

