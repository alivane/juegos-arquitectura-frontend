const figures = [{
        'img': 'cuadrado.png',
        'height': 100,
        'width': 100,
        'price': 700
    },
    {
        'img': 'rectangulo-pasillo.png',
        'height': 100,
        'width': 100,
        'price': 100
    },
    {
        'img': 'rectangulo-pasillo-2.png',
        'height': 100,
        'width': 100,
        'price': 150
    },
    {
        'img': 'rectangulo-pasillo-3.png',
        'height': 100,
        'width': 100,
        'price': 200
    },
    {
        'img': 'rectangulo.png',
        'height': 100,
        'width': 100,
        'price': 300
    },
    {
        'img': 'rombo.png',
        'height': 100,
        'width': 100,
        'price': 80
    },
    {
        'img': 'trapecio.png',
        'height': 100,
        'width': 100,
        'price': 300
    },
    {
        'img': 'triangulo-left.png',
        'height': 100,
        'width': 100,
        'price': 150
    },
    {
        'img': 'triangulo.png',
        'height': 100,
        'width': 100,
        'price': 400
    }
]

export const random = () => {
    const colors = ['blue', 'green', 'light_green', 'light_orange', 'orange', 'pink', 'red'];

    const color = Math.floor(Math.random() * colors.length);
    const figure = Math.floor(Math.random() * figures.length);

    return [figures[figure], colors[color]]
}