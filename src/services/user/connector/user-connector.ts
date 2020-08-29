import User from "../model/User";

const users: unknown = {};

const Create = (user: User): void => {
  users[user.email] = user;
};

const Update = (user: User): User => {
    users[user.email] = user;
    return user;
};

export { Create, Update }
