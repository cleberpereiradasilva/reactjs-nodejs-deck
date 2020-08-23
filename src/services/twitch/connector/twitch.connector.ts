
import {getFromUrl} from "../../shared"
const urlBase = "https://gql.twitch.tv/gql"
const _getBody = ({hashChanels, hashBanner, requestID, game}) => JSON.stringify([
   {
        "operationName": "Directory_DirectoryBanner",
        "variables": {
            "name": game,
            "sortTypeIsRecency": false,
        },
        "extensions": {
            "persistedQuery": {
                "version": 1,
                "sha256Hash": hashBanner, 
            }
        },

    },   

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
                "sha256Hash": hashChanels
            }
        }
    }
]);

const GetDataChannelText = async (game:string) => {
   const payload = {
       "hashChanels" : "5feb6766dc5d70b33ae9a37cda21e1cd7674187cb74f84b4dd3eb69086d9489c",
       "hashBanner" : "a64b0348103e054cbdb20c58de5fc05160da3f86c37c80263d7e6282f2577f54",
       "requestID" : "JIRA-VXP-2397",
       "game": game
   }
   const headers = {
        "headers": { 
                'Content-Type': 'application/json',
                'x-requested-with': 'XMLHttpRequest',
                'Client-Id': 'kimne78kx3ncx6brgo4mv6wki5h1ko'
        },
        "method" : 'POST',
        "body" : _getBody(payload)  
   }
   
   const bodyText = await getFromUrl(urlBase, headers);
   return bodyText;
}


export {
    GetDataChannelText
}

