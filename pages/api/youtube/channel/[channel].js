
import GoToUrl from "../../../../src/services/youtube/connector"

export default async (req, res) => {
  const {
      query : { channel },
  } = req;
  const response = await GoToUrl(channel)
  console.log(response.owner);      
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.json(response.owner);
}
