const figures = [{
        'img': 'cuadrado.png',
        'height': 100,
        'width': 100,
        'price': 7500
    },
    {
        'img': 'rectangulo-pasillo.png',
        'height': 100,
        'width': 100,
        'price': 6500
    },
    {
        'img': 'rectangulo-pasillo-2.png',
        'height': 100,
        'width': 100,
        'price': 3000
    },
    {
        'img': 'rectangulo-pasillo-3.png',
        'height': 100,
        'width': 100,
        'price': 8000
    },
    {
        'img': 'rectangulo.png',
        'height': 100,
        'width': 100,
        'price': 5500
    },
    {
        'img': 'rombo.png',
        'height': 100,
        'width': 100,
        'price': 6500
    },
    {
        'img': 'trapecio.png',
        'height': 100,
        'width': 100,
        'price': 10500
    },
    {
        'img': 'triangulo-left.png',
        'height': 100,
        'width': 100,
        'price': 9000
    },
    {
        'img': 'triangulo.png',
        'height': 100,
        'width': 100,
        'price': 8500
    },
    {
        'img': 'eclipse.png',
        'height': 100,
        'width': 100,
        'price': 8500
    },
    {
        'img': 'rectangulo-flecha.png',
        'height': 100,
        'width': 100,
        'price': 8500
    },
    {
        'img': 'rectangulo-hoja.png',
        'height': 100,
        'width': 100,
        'price': 8500
    },
    {
        'img': 'rectangulo-pieza.png',
        'height': 100,
        'width': 100,
        'price': 8500
    },
    {
        'img': 'triangulo-right.png',
        'height': 100,
        'width': 100,
        'price': 8500
    },
    {
        'img': 'trianguloen2.png',
        'height': 100,
        'width': 100,
        'price': 8500
    },
    {
        'img': 'triangulos.png',
        'height': 100,
        'width': 100,
        'price': 8500
    }
]

export const random = () => {
    const colors = ['blue', 'green', 'light_green', 'light_orange', 'orange', 'pink', 'red'];

    const color = Math.floor(Math.random() * colors.length);
    const figure = Math.floor(Math.random() * figures.length);

    return [figures[figure], colors[color]]
}