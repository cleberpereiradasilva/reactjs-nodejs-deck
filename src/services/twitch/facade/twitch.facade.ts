import {GetDataChannelText, GetDataUserText } from "../connector";

const GetDataUser = async (login:string) => {
    const bodyText = await GetDataUserText(login);
    const bodyJson = JSON.parse(bodyText);
    const edges = bodyJson[1].data.user.videoShelves.edges;
    return {
        owner : bodyJson[0].data.user.displayName,
        photo: bodyJson[0].data.user.profileImageURL,
        videos:edges
                .map(edge => edge
                                .node
                                .items
                                .filter(i => i.previewThumbnailURL)
                                .map(item => ({
                                    videoId: item.id,
                                    thumbnail: item.previewThumbnailURL,
                                    title: item.title,
                                    description: "",
                                    viewCountText: item.viewCount
                                }))
                    )
                    .reduce((acc, i) => {return acc.concat(i);},[]),
    }
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
