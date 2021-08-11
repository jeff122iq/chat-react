import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/constants";
import {IPublicRoutes} from "../types";
import Home from "../pages/Home";
import Chat from "../components/Chat";

export const publicRoutes: IPublicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Home
    }
]

export const privateRoutes: IPublicRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]