import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Recovery from './pages/Recovery';
import NotFound from './pages/NotFound';
import Prueba from './pages/Prueba2';
import Profilewoman from './pages/Profilewoman';
import Profilemen from './pages/Profiemen';
import Nivel1 from './pages/Nivel1';

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
    path: '/Nivel1',
    component: Nivel1
  },
  {
    path:'*',
    component: NotFound
  },
]