import {  VimeoChannel } from "../../../../src/services/vimeo/facade";
import Channel from "../../../../src/domain/request/Channel";
export default async (req: unknown , res: unknown): void  => {
  const vimeoChannel: Channel = new VimeoChannel();
  const {
    query: { channel },
  } = req;
  const response = await vimeoChannel.load(channel);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(response);
};
