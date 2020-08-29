import { GetVideo } from "../../../../src/services/vimeo/facade";

export default async (req, res) => {
  const {
    query: { video },
  } = req;
  const response = await GetVideo(video);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(response);
};
