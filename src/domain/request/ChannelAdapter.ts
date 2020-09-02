import channel from "../model/channel";

export default interface Channel{
    load(channel: string): Promise<channel>;
}
