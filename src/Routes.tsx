import HomePage from "./pages/homePage/homePage";
import ProfilePage from "./pages/profilePage/profilePage";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import React from "react";

export const routes = [
  {
    path: "/",
    component: HomePage,
    title: "Accueil",
    icon: <InboxIcon />,
    showInMenu: true,
    exact: true
  },
  {
    path: "/profile",
    component: ProfilePage,
    title: "Mon profil",
    icon: <InboxIcon />,
    showInMenu: true,
    exact: true
  }
];
