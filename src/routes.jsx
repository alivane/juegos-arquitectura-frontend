import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Recovery from "./pages/Recovery";
import NotFound from "./pages/NotFound";
import Prueba from "./pages/Prueba2";
import Profilewoman from "./pages/Profilewoman";
import Profilemen from "./pages/Profiemen";
import Game1 from "./pages/Game1";
import Game2 from "./pages/Game2";
import Game3 from "./pages/Game3";
import Logout from "./pages/Logout";
import Avatars from "./pages/Avatars";
import AvatarWoman from "./pages/AvatarWoman";
import Logros from "./pages/Logros";
import OptionLevel from "./pages/OptionLevel";
import Rank from "./pages/Rank";
import Coins from "./pages/Coins";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/recovery",
    component: Recovery,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/prueba",
    component: Prueba,
  },
  {
    path: "/profilewoman",
    component: Profilewoman,
  },
  {
    path: "/profilemen",
    component: Profilemen,
  },
  {
    path: "/game1",
    component: Game1,
  },
  {
    path: "/game2",
    component: Game2,
  },
  {
    path: "/game3",
    component: Game3,
  },
  {
    path: "/logout",
    component: Logout,
  },
  {
    path: "/avatars",
    component: Avatars,
  },
  {
    path: "/avatarwoman",
    component: AvatarWoman,
  },
  {
    path: "/optionlevel",
    component: OptionLevel,
  },
  {
    path: "/logros",
    component: Logros,
  },
  {
    path: "/rank",
    component: Rank,
  },
  {
    path: "/coins",
    component: Coins,
  },
  {
    path: "*",
    component: NotFound,
  },
];
