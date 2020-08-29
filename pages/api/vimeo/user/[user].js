import { GetUser } from "../../../../src/services/vimeo/facade";

export default async (req, res) => {
  const {
    query: { user },
  } = req;
  const response = await GetUser(user);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(response);
};
