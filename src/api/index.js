
export function login(usuario){
    return fetch('http://localhost:5000/login', {
        method: 'POST',
        body: JSON.stringify({
            mail: usuario.email,
            password: usuario.password
        }),
        headers:{
            'Content-Type': 'application/json'
        }
      });
    
}
export function register(usuario){
   fetch('http://localhost:5000/register', {
        method: 'POST',
        body: JSON.stringify({
            name: usuario.name,
            mail: usuario.email,
            password: usuario.password,
        
        }),
        headers:{
            'Content-Type': 'application/json'
        }
      });
    
}
export function getMenu(menus){
    return fetch('http://localhost:5000/add_week_menu', {
        method: 'POST',
        body: JSON.stringify({
            name: menus.menu,
            description:menus.detail ,
            salad: menus.salad, 
            dessert: menus.dessert, 
            drink: menus.drink,

        }),
        headers:{
            'Content-Type': 'application/json'
        }
      });
    }
