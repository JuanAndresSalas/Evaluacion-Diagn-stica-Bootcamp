var infoProducto = [

    {
        nombre: "Smartphone",
        imagen: "/img/smartphone.avif",
        codigo: 1,
        descripcion: 'Resistente al agua, pantalla de 6"',
        precio: 59990
    },
    {
        nombre: "Notebook",
        imagen: "/img/notebook.webp",
        codigo: 2,
        descripcion: "Windows 11, sin antivirus",
        precio: 49990
    },
    {
        nombre: "Smartwatch",
        imagen: "/img/smartwatch.webp",
        codigo: 3,
        descripcion: "Incluye cargador",
        precio: 57990

    },
    {
        nombre: "Monitor",
        imagen: "/img/monitor.webp",
        codigo: 4,
        descripcion: '144Hz, 25"',
        precio: 150000
    },
    {
        nombre: "Mouse Gamer",
        imagen: "/img/mouse.webp",
        codigo: 5,
        descripcion: "Incluye cargador",
        precio: 29990

    }
]


var i = 0;
infoProducto.forEach(element => {
    $("#cards").append('<div class="card" id="cards-'+i+'" style="width: 18rem;">'+
    ' <img src=' + element.imagen.toString() + ' class="card-img-top" alt="Imagen No disponible">' +
    '<div class="card-body" >' +
    '<h5 class="card-title" id="titulo-'+i+'">' + element.nombre +'</h5>' +
    '<p class="card-text" >ID: ' + element.codigo + '</p>'+
    '<p class="card-text" id="descripcion-'+i+'">' + element.descripcion + '</p>'+
    'Cantidad: <input type="number" min="1" value="1" id="input-'+i+'">' +
    '<p class="card-text" id="precio-'+i+'">$' + element.precio.toLocaleString("es", {
        style: "currency",
        currency: "CLP"
    }) + '</p>'+
    '<a class="btn btn-dark agregarCarro" id="boton-'+i+'" + >Agregar al carro</a></div>') 
    i++
});