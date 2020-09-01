import channel from "../model/channel";

export default interface Channel{
    async (channel: string): Promise<channel> ;
}
