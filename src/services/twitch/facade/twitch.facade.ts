import {GetDataChannelText, GetDataUserText } from "../connector";

const GetDataUser = async (login:string) => {
    const bodyText = await GetDataUserText(login);
    const bodyJson = JSON.parse(bodyText);
    return bodyJson


}

const GetDataChannel = async (game:string) => {
    const bodyText = await GetDataChannelText(game);
    const bodyJson = JSON.parse(bodyText);
    return {
        "owner":  bodyJson[0].data.game.displayName,
        "photo":  bodyJson[0].data.game.avatarURL,
        "videos": bodyJson[1].data.game.streams.edges.map(edge => (
            {
              "videoId" : edge.node.id,
              "thumbnail" : [edge.node.previewImageURL],
              "title" : edge.node.broadcaster.displayName,
              "description" : edge.node.title,
              "publishedTimeText" : "",
              "viewCountText" : edge.node.viewersCount,
            }))
       };
    return videos;
}
export {
    GetDataChannel,
    GetDataUser
}
