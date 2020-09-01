import video from "./video";
export default interface user{
    name: string,
    url: string,
    location: string,
    photo: string,
    videos: video[],
}
