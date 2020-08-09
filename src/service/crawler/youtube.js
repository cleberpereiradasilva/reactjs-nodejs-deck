const fetch = require("node-fetch");
const url = "https://www.youtube.com/c/SpaceX/videos"

const getData = async url => {
  try {
        const response = await fetch(url);
        const content = await response.text()
        const preJson = content.split("window[\"ytInitialData\"] = ")[1].split(";")[0]
        const json = JSON.parse(preJson);
        const tabs = json.contents.twoColumnBrowseResultsRenderer.tabs;
        tabs.map(tab => {
            const tabContent = tab.tabRenderer && tab.tabRenderer.content;
            if(tabContent && tabContent.sectionListRenderer){
                  tabContent.sectionListRenderer.contents.map(content => {
                      const itens = content.itemSectionRenderer.contents[0].gridRenderer.items;
                      itens.map(item => {
                          console.log(item.gridVideoRenderer.navigationEndpoint.watchEndpoint.videoId)
                      })
                 })

            }
        })
  } catch (error) {
    console.log(error);
  }
};

getData(url);
