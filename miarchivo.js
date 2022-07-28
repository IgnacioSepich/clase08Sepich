/* let entrada = prompt("Ingresa tu nombre");
entrada = entrada.toUpperCase();
alert ("Bienvenido " + entrada);

while (entrada != "OK" ){
alert(entrada + " , por cualquier consulta, no dudes en comunicarte con nosotros");
entrada = prompt("Ingrese OK para ir al Sitio Web");
entrada = entrada.toUpperCase();
} */


const productos = [
    {id: 1001, nombre: 'Matafuegos Polvo Quimico (1 kg.)', riesgo: 'incendio', capacidad: '1 kilogramo', precio: 1000},
    {id: 1002, nombre: 'Matafuegos Polvo Quimico (2,5 kg.)', riesgo: 'incendio', capacidad: '2,5 kilogramo', precio: 2500},
    {id: 1003, nombre: 'Matafuegos Polvo Quimico (100 kg.)', riesgo: 'incendio', capacidad: '100 kilogramo', precio: 80000},
    {id: 1004, nombre: 'Kit Automotor', riesgo: 'incendio', capacidad: '1 kilogramo + varios', precio: 2500},
    {id: 1005, nombre: 'Barbijo Descartable x 50 U.', riesgo: 'covid19', capacidad: '50 unidades', precio: 1500},
    {id: 1006, nombre: 'Barbijo Tricapa x 50 U.', riesgo: 'covid19', capacidad: '50 unidades', precio: 2500},
    {id: 1007, nombre: 'Barbijo N95 x 50 U.', riesgo: 'covid19', capacidad: '50 unidades', precio: 8000},
    {id: 1008, nombre: 'Mascara Facial', riesgo: 'covid19', capacidad: '1 unidad', precio: 2000}
]

const filtro = productos.filter ((el) => el.riesgo.includes ('incendio'))

console.log (filtro)


const total = filtro.reduce ((acumulador, elemento) => acumulador + elemento.precio, 0)

console.log (total)


for (const producto of productos) {
    let contenedor = document.createElement ("div");
    contenedor.innerHTML = `<h3> ID: ${producto.id} </h3> <p> Producto: ${producto.nombre} </p> <b> Precio: ${producto.precio}</b>`;

    document.body.appendChild (contenedor);
}