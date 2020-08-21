import { GetDataChannel } from '../../../../src/services/twitch/facade'

export default async (req, res) => {
  const {
      query : { channel },
  } = req;
  const response = await GetDataChannel(channel)
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.json(response);
}
