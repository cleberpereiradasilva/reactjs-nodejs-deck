import { GetDataChannelText } from "../connector";
import { stringToJson } from "../../shared";

const GetDataChannel = async (game: string): Promise<JSON> => {
  const bodyText = await GetDataChannelText(game);
  const bodyJson = stringToJson(bodyText);
  return {
    owner: bodyJson[0].data.game.displayName,
    photo: bodyJson[0].data.game.avatarURL,
    videos: bodyJson[1].data.game.streams.edges.map((edge) => ({
      videoId: edge.node.id,
      thumbnail: [edge.node.previewImageURL],
      title: edge.node.broadcaster.displayName,
      description: edge.node.title,
      publishedTimeText: "",
      viewCountText: edge.node.viewersCount,
    })),
  };
};
export { GetDataChannel };
