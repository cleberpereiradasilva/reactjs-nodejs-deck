import User from "../../../../src/domain/request/User";
import { GetUser, VimeoUser } from "../../../../src/services/vimeo/facade";

export default async (req: unknown, res: unknown): void => {
    const vimeoUser: User = new VimeoUser();
    const {
        query: { user },
    } = req;
    const response = await vimeoUser.load(user);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(response);
};
