import RequestInterface from "../../request/RequestInterface";
import { FetchRequest } from "../../request";
import { RequestPayload } from "../../shared/model/WebPayload";

const urlBase = "https://vimeo.com";
const urlChannel = (channel: string) => `${urlBase}/channels/${channel}`;
const urlVideo = (videoId: string) => `${urlBase}/${videoId}`;
const urlUser = (userId: string) => `${urlBase}/user${userId}`;
const urlStats = (videoId: string) =>
  `${urlBase}/${videoId}?action=load_stat_counts`;
const Request: RequestInterface = new FetchRequest();

const GetStatsText = async (channel: string) => {
  const payload: RequestPayload = {
    url: urlStats(channel),
    method: "GET",
    headers: {
      "Content-Type": "application/html",
      "x-requested-with": "XMLHttpRequest",
    },
  };
  return await Request.execute(payload);
};

const GetChannelText = async (channel: string) => {
  const payload: RequestPayload = {
    url: urlChannel(channel),
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await Request.execute(payload);
};

const GetVideoText = async (videoId: string) => {
  const payload: RequestPayload = {
    url: urlVideo(videoId),
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await Request.execute(payload);
};

const GetUserText = async (userId: string) => {
  const payload: RequestPayload = {
    url: urlUser(userId),
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await Request.execute(payload);
};

export { GetChannelText, GetVideoText, GetStatsText, GetUserText };
