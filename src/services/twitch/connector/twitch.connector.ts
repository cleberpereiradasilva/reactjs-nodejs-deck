
import {getFromUrl} from "../../shared"
const urlBase = "https://gql.twitch.tv/gql"
const _getBody = ({requestID, hash, game}) => JSON.stringify([
    {
        "operationName": "DirectoryPage_Game",
        "variables": {
            "name": game,
            "options": {
                "includeRestricted": [
                    "SUB_ONLY_LIVE"
                ],
                "sort": "RELEVANCE",
                "recommendationsContext": {
                    "platform": "web"
                },
                "requestID": requestID,
                "tags": []
            },
            "sortTypeIsRecency": false,
            "limit": 30           
        },
        "extensions": {
            "persistedQuery": {
                "version": 1,
                "sha256Hash": hash            }
        }
    }
]);

const GetDataChannelText = async (game:string) => {
   const hash = "5feb6766dc5d70b33ae9a37cda21e1cd7674187cb74f84b4dd3eb69086d9489c"
   const requestID = "JIRA-VXP-2397"
   const headers = {
        headers: { 
            'Content-Type': 'application/json',
            'x-requested-with': 'XMLHttpRequest',
            'Client-Id': 'kimne78kx3ncx6brgo4mv6wki5h1ko'
        },
        method: 'POST',
        body: _getBody({hash, requestID, game })     
   }
   const bodyText = await getFromUrl(urlBase, headers);
   return bodyText;
}


export {
    GetDataChannelText
}

