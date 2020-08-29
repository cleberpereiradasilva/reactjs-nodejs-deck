import RequestInterface from "../../request/RequestInterface";
import { FetchRequest } from "../../request";
import { RequestPayload } from "../../shared/model/WebPayload";

const urlChannel = (channel: string) =>
  `https://www.youtube.com/c/${channel}/videos`;
const urlVideo = (videoId: string) =>
  `https://www.youtube.com/watch?v=${videoId}`;
const Request: RequestInterface = new FetchRequest();

const GetChannelText = async (channel: string) => {
  const payload: RequestPayload = {
    url: urlChannel(channel),
    method: "GET",
    headers: {
      "Content-Type": "application/html",
      "x-requested-with": "XMLHttpRequest",
    },
  };
  return await Request.execute(payload);
};

const GetVideoText = async (videoId: string) => {
  const payload: RequestPayload = {
    url: urlVideo(videoId),
    method: "GET",
    headers: {
      "Content-Type": "application/html",
      "x-requested-with": "XMLHttpRequest",
    },
  };
  return await Request.execute(payload);
};

export { GetChannelText, GetVideoText };
