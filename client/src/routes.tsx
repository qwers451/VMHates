import type { RouteObject } from 'react-router-dom';
import {
    MAIN_ROUTE,
    SETTING_ROUTE,
    CONTACTS_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    CHAT_ROUTE
} from "./utils/consts.ts"
import Auth from './components/Auth.tsx';
import Chat from './components/Chat.tsx';
import Settings from './components/Settings.tsx';
import Contacts from './components/Contacts.tsx';
import Home from './components/Home.tsx';


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