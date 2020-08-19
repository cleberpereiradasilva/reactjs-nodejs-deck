import {getFromUrl} from "../../shared";

const urlChannel = (channel: string) => `https://www.youtube.com/c/${channel}/videos`
const urlVideo = (videoId: string) => `https://www.youtube.com/watch?v=${videoId}`

const GetChannelText = async (channel : string) => {
    const url = urlChannel(channel);
    return await getFromUrl(url);
};

const GetVideoText = async (videoId : string) => {
    const url = urlVideo(videoId);
    return await getFromUrl(url);
};

export { GetChannelText, GetVideoText}



