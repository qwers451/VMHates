import type { RouteObject } from 'react-router-dom';
import {
    MAIN_ROUTE,
    SETTING_ROUTE,
    CONTACTS_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    CHAT_ROUTE
} from "./utils/consts.ts"
import Auth from './pages/Auth.tsx';
import Chat from './pages/Chat.tsx';
import Settings from './pages/Settings.tsx';
import Contacts from './pages/Contacts.tsx';
import Home from './pages/Home.tsx';


export const authRoutes: RouteObject[] = [
  {
    path: CHAT_ROUTE,
    element: <Chat />,
  },
  {
    path: SETTING_ROUTE,
    element: <Settings />,
  },
  {
    path: CONTACTS_ROUTE,
    element: <Contacts />,
  },
];

export const publicRoutes: RouteObject[] = [
  {
    path: MAIN_ROUTE,
    element: <Home />,
  },
  {
    path: LOGIN_ROUTE,
    element: <Auth />,
  },
  {
    path: REGISTRATION_ROUTE,
    element: <Auth />,
  },
];