import List from "./List";
import Video from "./Video";
import Channel from "./Channel";
import Model from "./Model";

export default interface User extends Model{
    name: string,
    email: string,
    password: string,
    token: string,
    lists: List[],
    videos: Video[],
    channels: Channel[]
}
