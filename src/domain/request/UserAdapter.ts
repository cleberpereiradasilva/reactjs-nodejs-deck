import user from "../model/user";

export default interface User{
    load(user: string): Promise<user>;
}
