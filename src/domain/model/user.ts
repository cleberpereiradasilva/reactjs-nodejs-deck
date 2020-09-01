import video from "./video";
export default interface user{
    user: {
        name: string,
        url: string,
        location: string,
        photo: string,
    },
    videos: video[],
}
