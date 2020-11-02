
export function login(usuario){
    return fetch("https://buildsign-backend.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify({
        mail: usuario.email,
        password: usuario.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    
}
export function register(usuario){
   fetch('https://buildsign-backend.herokuapp.com/register', {
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

