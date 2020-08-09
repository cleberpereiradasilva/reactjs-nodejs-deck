import List from "./List";
import Video from "./Video";
import Channel from "./Channel";

export default interface User {
    id: number,
    name: string,
    email: string,
    password: string,
    createdAt: Date,
    token: string,
    lists: List[],
    videos: Video[],
    channels: Channel[]
}
