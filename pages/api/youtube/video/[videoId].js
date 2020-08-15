import { GetVideolJson} from '../../../../src/services/youtube/facade'

export default async (req, res) => {
  const {
      query : { videoId },
  } = req;
  const response = await GetVideolJson(videoId)
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.json(response);
}
