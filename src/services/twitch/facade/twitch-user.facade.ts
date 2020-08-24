import {GetDataUserText } from "../connector";

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

export { GetDataUser }
