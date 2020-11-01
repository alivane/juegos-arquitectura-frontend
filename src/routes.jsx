import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Recovery from './pages/Recovery';
import NotFound from './pages/NotFound';
import Prueba from './pages/Prueba2';
import Profilewoman from './pages/Profilewoman';
import Profilemen from './pages/Profiemen';
import Game1 from './pages/Game1';
import SelectionSex from './pages/SelectionSex'
export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/recovery',
    component: Recovery
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/prueba',
    component: Prueba
  },
  {
    path: '/profilewoman',
    component: Profilewoman
  },
  {
    path: '/profilemen',
    component: Profilemen
  },
  {
    path: '/game1',
    component: Game1
  },
  {
    path: '/selectionsex',
    component: SelectionSex
  },
  {
    path:'*',
    component: NotFound
  },
 
]