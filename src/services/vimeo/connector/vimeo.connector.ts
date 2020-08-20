import {getFromUrl} from "../../shared"
const urlBase = "https://vimeo.com"
const urlChannel = (channel: string) => `${urlBase}/channels/${channel}`
const urlVideo = (videoId: string) => `${urlBase}/${videoId}`
const urlUser = (userId: string) => `${urlBase}/user${userId}`
const urlStats = (videoId: string) => `${urlBase}/${videoId}?action=load_stat_counts`


const GetStatsText = async (channel : string) => {
    const url = urlStats(channel);
    const headers = {
        headers: { 
            'Content-Type': 'application/json',
            'x-requested-with': 'XMLHttpRequest' 
        }        
    }
    return await getFromUrl(url, headers); 
};

const GetChannelText = async (channel : string) => {
    const url = urlChannel(channel);
    return await getFromUrl(url);
};

const GetVideoText = async (videoId : string) => {
    const url = urlVideo(videoId);
    return await getFromUrl(url);
};

const GetUserText = async (userId : string) => {
    const url = urlUser(userId);
    return await getFromUrl(url);
};

export { GetChannelText, GetVideoText, GetStatsText, GetUserText }



