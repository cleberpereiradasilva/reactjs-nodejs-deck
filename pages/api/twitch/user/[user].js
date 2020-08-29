import { GetDataUser } from "../../../../src/services/twitch/facade";

export default async (req, res) => {
  const {
    query: { user },
  } = req;
  const response = await GetDataUser(user);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(response);
};
