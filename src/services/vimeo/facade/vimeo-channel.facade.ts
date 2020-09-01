import cheerio from "cheerio";
import channel from "../../../domain/model/channel";
import video from "../../../domain/model/video";
import Channel from "../../../domain/request/Channel";
import { GetChannelText } from "../connector/";
import { GetVideo } from "./vimeo-video.facade";

export default class VimeoChannel implements Channel {

  private _textToVideoId = async (body: string) => {
  const $ = cheerio.load(body);
  const clipsElement = $("#clips");
  const liItems = $(clipsElement).find("li").toArray();
  return liItems.map((item) => $(item).attr("id").replace("clip", ""));
};

  private _textToProfile = (body: string) => {
  const $ = cheerio.load(body);
  const owner = $(".owner").text();
  const photo = $(".about")
    .find("a img")
    ?.attr("src")
    ?.replace("30x30", "120x120");
  return { owner, photo };
};

  async load(channel: string): Promise<channel>{
  const channelText = await GetChannelText(channel);
  const videoListId = await this._textToVideoId(channelText);
  const videos:video[] = await Promise.all(
    await videoListId.map(async (videoId: string) => await GetVideo(videoId))
  );
  const profile = this._textToProfile(channelText);
  return {
    ...profile,
    videos,
  };
  }
}

