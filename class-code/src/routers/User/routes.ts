import { createUser } from "./createUser";
import { getAllUsers } from "./getAllUsers";
import { getUserWithData } from "./getUser";

export const UserRoutes = [
    {
        path: '/',
        method: 'get',
        action: getAllUsers
    },
    {
        path: '/:UserId',
        method: 'get',
        action: getUserWithData
    },
    {
        path: '/',
        method: 'post',
        action: createUser
    }
]