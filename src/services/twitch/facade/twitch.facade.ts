import {GetDataChannelText} from "../connector";

const GetDataChannel = async (game:string) => {
    const bodyText = await GetDataChannelText(game);
    const bodyJson = JSON.parse(bodyText);
    const videos = bodyJson[0].data.game.streams.edges.map(edge => (
        {
          "videoId" : edge.node.id,
          "thumbnail" : [edge.node.previewImageURL],
          "title" : edge.node.broadcaster.displayName,
          "description" : edge.node.title,
          "publishedTimeText" : "",
          "viewCountText" : edge.node.viewersCount,
    }));
    return videos;
}
export {
    GetDataChannel
}
