// const denormalize  = require("normalizr");
// const { mensajesSchema } = require("../../containers/messages/MessagesContainer.js");

// import { denormalize, normalize } from "normalizr";

const autorSchema = new normalizr.schema.Entity("autor",{},{ idAttribute: 'email' })
const myArray = new normalizr.schema.Array({
    autor: autorSchema
});

const socket = io();

const URL = "http://localhost:8080/api/products-test";

socket.on("mensajes", ({ mensajes }) => {
    console.log(mensajes)
    mostrarMensajes(mensajes)
});

socket.on("productos", ({ productos }) => {
    console.log(productos)
    mostrarProductos(productos)
});

const btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click", event => {
    const email = document.getElementById("autor").value;
    const texto = document.getElementById("input").value;
    let date = new Date();
    let fecha = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
    let hora = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    const mensaje = { 
        autor: {
            email: email,
            nombre: "nombre",
            apellido: "apellido",
            edad: 123,
            alias: "alias",
            avatar: "avatar"
        }, 
        texto,
        fecha,
        hora
    }
    socket.emit("mensaje",  mensaje  )
})

async function getProductsFromServer(){
    try {
        const response = await fetch(URL,{
            method:"GET",
            headers: { 
                'Content-Type': 'application/json',
            }
            
        })
        return response.json();
    } catch (err) {
        throw new Error(`Error fetch: ${err.message}`);
    }

}

const enviarForm = document.getElementById("enviarForm");
enviarForm.addEventListener("click", async event => {

    for (let index = 0; index < 5; index++) {
        let product = await getProductsFromServer();
        console.log(product)
        let producto = { "tittle": product.tittle, "price": product.price, "thumbnail":product.thumbnail }
        socket.emit("producto",  producto  )       
    }
    
    // const tittle = document.getElementById("tittle").value;
    // const price = document.getElementById("price").value;
    // const thumbnail = document.getElementById("thumbnail").value;
    // const producto = { "tittle": tittle, "price": price, "thumbnail":thumbnail }
    
})


function desNormalizar(mensajesNormalizado){
   const mensajesDesnormalizado = normalizr.denormalize(mensajesNormalizado.result, myArray ,mensajesNormalizado.entities);
   console.log(mensajesDesnormalizado);
   return mensajesDesnormalizado;
 
}

function mostrarMensajes(mensajesNormalizado){

    const mensajes = desNormalizar(mensajesNormalizado);
    const largoMensajeNormalizado = (JSON.stringify(mensajesNormalizado)).length
    const largoMensajeOriginal = (JSON.stringify(mensajes)).length
    const porcentajeCompresion = (largoMensajeNormalizado/largoMensajeOriginal)*100
    console.log(porcentajeCompresion)
    const porcentCompresion = document.getElementById("porcentCompresion");
    porcentCompresion.innerHTML = `<h4 style="color:blue">Porcentaje Compresión: <span style="color:green">${porcentajeCompresion}</span></h4>`;
    const divMensajes = document.getElementById("divMensajes");
    // const lineasMensajes = mensajes.map( linea => `${linea.autor} : ${linea.texto}`)
    const lineasMensajesHtml = mensajes.map( linea => `
    <div class="d-flex justify-content-start">
        <div class"">
            <span class="text-info bg-dark m-1"> 
            ${linea.autor.email}
            </span>
        </div>
        <div class"">
        <span class="text-warning bg-dark"> 
        [ ${linea.fecha} - ${linea.hora} ]
        </span>
    </div>
        <div class"">
            <span class="m-1"> 
            :
            </span>
        </div>
        <div class="">
            <span class="text-success m-1"> 
                ${linea.texto}
            </span>
    </div>
    </div>
    `)
    const html = 
    `
        ${lineasMensajesHtml.join(" ")}
    `;
    divMensajes.innerHTML = html;
}

function mostrarProductos(productos){

    const divProductos = document.getElementById("divProductos");
    // const lineasMensajes = mensajes.map( linea => `${linea.autor} : ${linea.texto}`)
    const lineasProductosHtml = productos.map( linea => `
    <tr>
    <td>${linea.id}</td>
    <td>${linea.tittle}</td>
    <td>${linea.price}</td>
    <td>${linea.thumbnail}</td>
    </tr>
    `)
    const html = 
    `
        ${lineasProductosHtml.join(" ")}
    `;
    divProductos.innerHTML = html;
}