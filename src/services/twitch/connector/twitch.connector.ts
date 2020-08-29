import RequestInterface from "../../request/RequestInterface";
import { FetchRequest, AxiosRequest } from "../../request";
import { RequestPayload } from "../../shared/model/WebPayload";
const urlBase = "https://gql.twitch.tv/gql";

const Request: RequestInterface = new AxiosRequest();
const _getUserBody = ({ login, hashShell, hashVideos }): string =>
  JSON.stringify([
    {
      operationName: "ChannelShell",
      variables: {
        login: login,
      },
      extensions: {
        persistedQuery: {
          version: 1,
          sha256Hash: hashShell,
        },
      },
    },

    {
      operationName: "ChannelVideoShelvesQuery",
      variables: {
        channelLogin: login,
        first: 5,
      },
      extensions: {
        persistedQuery: {
          version: 1,
          sha256Hash: hashVideos,
        },
      },
    },
  ]);
const _getChannelBody = ({ hashChanels, hashBanner, requestID, game }): string =>
  JSON.stringify([
    {
      operationName: "Directory_DirectoryBanner",
      variables: {
        name: game,
        sortTypeIsRecency: false,
      },
      extensions: {
        persistedQuery: {
          version: 1,
          sha256Hash: hashBanner,
        },
      },
    },

    {
      operationName: "DirectoryPage_Game",
      variables: {
        name: game,
        options: {
          includeRestricted: ["SUB_ONLY_LIVE"],
          sort: "RELEVANCE",
          recommendationsContext: {
            platform: "web",
          },
          requestID: requestID,
          tags: [],
        },
        sortTypeIsRecency: false,
        limit: 30,
      },
      extensions: {
        persistedQuery: {
          version: 1,
          sha256Hash: hashChanels,
        },
      },
    },
  ]);

const GetDataUserText = async (login: string): Promise<string> => {
  const data = {
    login,
    hashShell:
      "2b29e2150fe65ee346e03bd417bbabbd0471a01a84edb7a74e3c6064b0283287",
    hashVideos:
      "fb663273aa958ebe2f58d5fcb3aacc112d67ebfd7f414b095c5d1498d21aad92",
  };

  const payload: RequestPayload = {
    url: urlBase,
    headers: {
      "Content-Type": "application/json",
      "x-requested-with": "XMLHttpRequest",
      "Client-Id": "kimne78kx3ncx6brgo4mv6wki5h1ko",
    },
    method: "POST",
    body: _getUserBody(data),
  };

  return Request.execute(payload);
};
const GetDataChannelText = async (game: string): Promise<string> => {
  const data = {
    hashChanels:
      "5feb6766dc5d70b33ae9a37cda21e1cd7674187cb74f84b4dd3eb69086d9489c",
    hashBanner:
      "a64b0348103e054cbdb20c58de5fc05160da3f86c37c80263d7e6282f2577f54",
    requestID: "JIRA-VXP-2397",
    game: game,
  };
  const payload: RequestPayload = {
    url: urlBase,
    headers: {
      "Content-Type": "application/json",
      "x-requested-with": "XMLHttpRequest",
      "Client-Id": "kimne78kx3ncx6brgo4mv6wki5h1ko",
    },
    method: "POST",
    body: _getChannelBody(data),
  };
  return Request.execute(payload);
};

export { GetDataChannelText, GetDataUserText };
