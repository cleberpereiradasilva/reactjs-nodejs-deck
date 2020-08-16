import cheerio from 'cheerio'
import {GetChannelJson, GetVideoJson} from "../connector/vimeo.connector";

const _liConverterToJson = body => { 
    const $ = cheerio.load(body)
    const items = $('li').toArray();
    const json = []

    items.map(item => {
        //TODO usar o GetVideo....
        json.push({
            videoId: $(item).attr('id').replace("clip",""),
            thumbnail : "" ,
            title : "",
            publishedTimeText : $(item).find('.meta .time').text().trim(),
            viewCountText : $(item).find(".meta .plays").text()
        })
        console.log($(item).find(".vp-preview .vp-preview-cover").html());
        console.log('----')
    })

    return json;
};

    //list && list.reduce( (acc, item) => {
    //           acc.concat([
    //               {url: item.find('#info')}
    //           ]);
    //        },[]);

const getVideo = gridVideoRenderer => ({
          "videoId" : gridVideoRenderer.videoId,
          "thumbnail" : gridVideoRenderer.thumbnail.thumbnails,
          "title" : gridVideoRenderer.title.simpleText,
          "publishedTimeText" : gridVideoRenderer.publishedTimeText.simpleText,
          "viewCountText" : gridVideoRenderer.viewCountText.simpleText
      });


const GetDataChannel = async channel => {
  const tabs = await GetChannelJson(channel);
  const $ = cheerio.load(tabs)
  const ol = $('#clips');
  const json = _liConverterToJson(ol.html());
  //li.find('li').map(item => console.log('xx'));
  return json;
}
export { GetDataChannel, GetVideoJson as GetVideo };
