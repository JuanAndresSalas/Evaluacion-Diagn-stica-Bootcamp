carro = [];

$("#carroCompra").hide();

$(".agregarCarro").on("click",function(){
    let id = "";
    let objeto = 
        {
            nombre:"",
            codigo: 0,
            descripcion:"",
            precio: 0,
            cantidad: 0
        }
    
    id = parseInt(this.id[this.id.length - 1])
    objeto.codigo = id;
    objeto.nombre = document.getElementById("titulo-"+id).textContent;
    objeto.descripcion = document.getElementById("descripcion-"+id).textContent;
    objeto.precio = document.getElementById("precio-"+id).textContent;
    objeto.cantidad = document.getElementById("input-"+id).value;
    carro.push(objeto)
    console.log(objeto)
})

$("#logoCarro").on("click",function(){
    if(carro.length == 0){
        alert("Carro Vacío")
    
    }else{
        $(".productoCarro").remove()
        $(".headTabla").remove()
        $("#carroCompra").show();  
        $("#listaProductos").append('<thead class="headTabla"><th>Nombre</th><th>ID</th><th>Precio</th><th>Cantidad</th><th>Total</th></thead>')
        let indice = 0
        carro.forEach(element => {
            $("#listaProductos").append('<tr class="productoCarro"                          id="contenedorProducto-"'+indice+'><th>' + element.nombre + '</th>' + 
                                    '<th>' + parseInt(element.codigo + 1) + '</th>' +
                                    '<th>' + element.precio + '</th>' +
                                    '<th>' + element.cantidad + '</th>' + 
                                    '<th>' + parseInt(element.cantidad) * parseInt(element.precio.replace(/[^0-9]+/g, "")) + '</th>' +
                                    '<th class="botonEliminar btn" id="eliminar-'+indice+'"><button>Eliminar</button></th>'+
                                    '</tr>')

        
        
    indice++
    })
   
    
}});


