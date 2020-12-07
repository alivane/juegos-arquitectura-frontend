const api = "https://buildsign-backend.herokuapp.com";
// const api = "http://localhost:5000"

export function login(usuario) {
    return fetch(`${api}/login`, {
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

export function register(usuario) {
    return fetch(`${api}/register`, {
        method: 'POST',
        body: JSON.stringify({
            name: usuario.name,
            mail: usuario.email,
            password: usuario.password,
            gender: usuario.gender,
            coins: 0,
            id_avatar: usuario.gender === 0 ? 1 : 5,
            id_helmet: 1
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

}

export function update_user(token, usuario, id) {
    return fetch(`${api}/update_user/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            name: usuario.name,
            mail: usuario.mail,
            gender: usuario.gender,
            coins: usuario.coins,
            id_avatar: usuario.id_avatar,
            id_helmet: usuario.id_helmet
        }),
        headers: {
            'Content-Type': 'application/json',
            "Authorization": token
        }
    });

}


export function token(token) {
    return fetch(`${api}/token`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
    });
}

export function levels_all(token) {
    return fetch(`${api}/levels`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
    });
}

export function avatars_all(token, id_user) {
    return fetch(`${api}/avatars/${id_user}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
    });
}

export function get_avatar(id) {
    return fetch(`${api}/avatar/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
    });
}

export function helmets_all(token) {
    return fetch(`${api}/helmets`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
    });
}

export function helmets_by_user(token) {
    return fetch(`${api}/helmets`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
    });
}