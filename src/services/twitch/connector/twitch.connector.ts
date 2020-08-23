
import {getFromUrl} from "../../shared"
const urlBase = "https://gql.twitch.tv/gql"

const _getUserBody = ({login, hashStream, hashDrops, hashChannel}) => JSON.stringify([    
    {
        "operationName": "StreamMetadata",
        "variables": {
            "channelLogin": login
        },
        "extensions": {
            "persistedQuery": {
                "version": 1,
                "sha256Hash": hashStream
            }
        }
    },
    {
        "operationName": "Drops_ChannelDrops_User",
        "variables": {
            "login": login,
            "isLoggedIn": true
        },
        "extensions": {
            "persistedQuery": {
                "version": 1,
                "sha256Hash": hashDrops
            }
        }
    },
    {
        "operationName": "ChannelRoot_SocialMediaSpace",
        "variables": {
            "channelLogin": login
        },
        "extensions": {
            "persistedQuery": {
                "version": 1,
                "sha256Hash": hashChannel
            }
        }
    }
])
const _getChannelBody = ({hashChanels, hashBanner, requestID, game}) => JSON.stringify([
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
const GetDataUserText = async (login:string) => {
    const payload = {
        login: "gmhikaru", 
        hashStream : "1c719a40e481453e5c48d9bb585d971b8b372f8ebb105b17076722264dfa5b3e", 
        hashDrops : "f309b1d517d288074d50d96512059857cc67d8905d1379e414d70f7b981f2618", 
        hashChannel : "3cc9b2fc1ce60c0d0bd271e795e6c9d0baef0d7cb8a0f130c5311f4d045157da" 
    }


   const headers = {
        "headers": { 
                'Content-Type': 'application/json',
                'x-requested-with': 'XMLHttpRequest',
                'Client-Id': 'kimne78kx3ncx6brgo4mv6wki5h1ko'
        },
        "method" : 'POST',
        "body" : _getUserBody(payload)  
   }
   
   const bodyText = await getFromUrl(urlBase, headers);
   return bodyText;

}
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
        "body" : _getChannelBody(payload)  
   }
   
   const bodyText = await getFromUrl(urlBase, headers);
   return bodyText;
}


export {
    GetDataChannelText,
    GetDataUserText
}

