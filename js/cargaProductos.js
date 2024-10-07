
const stockProductos = [
    { id: 1, nombreObra: "Obra 1", nombreAutor: "Autor 1",desc: "pintura", precio: 1000, img:"../image/obra_1.jpg"},
    { id: 2, nombreObra: "Obra 2", nombreAutor: "Autor 2",desc: "pintura", precio: 1000, img:"../image/obra_2.jpg"},
    { id: 3, nombreObra: "Obra 3", nombreAutor: "Autor 3",desc: "pintura", precio: 1000, img:"../image/obra_3.jpg"},
    { id: 4, nombreObra: "Obra 4", nombreAutor: "Autor 4",desc: "pintura", precio: 1000, img:"../image/obra_4.jpg"},
    { id: 5, nombreObra: "Obra 5", nombreAutor: "Autor 5",desc: "pintura", precio: 1000, img:"../image/obra_5.jpg"},
    { id: 6, nombreObra: "Obra 6", nombreAutor: "Autor 6",desc: "pintura", precio: 1000, img:"../image/obra_6.jpg"},
    { id: 7, nombreObra: "Obra 7", nombreAutor: "Autor 7",desc: "pintura", precio: 1000, img:"../image/obra_6.jpg"},
    { id: 8, nombreObra: "Obra 8", nombreAutor: "Autor 8",desc: "pintura", precio: 1000, img:"../image/obra_7.jpg"},
]

const contenedorProductos = document.getElementById("contenedor-productos")
stockProductos.forEach((elm)=>{

    const div = document.createElement("div")
    
    div.classList.add("producto")
    
    div.innerHTML = `
    <img src="${elm.img}">

    <h3>${elm.nombreObra}</h3>
    <p>${elm.nombreAutor}</p>
    <p>Precio: $${elm.precio}</p>
    <button>Comprar</button>
    `
    contenedorProductos.appendChild(div)

})




//////// formulario usuario

const inputNombre = document.getElementById("nombre")
const inputApellido = document.getElementById("apellido")

inputNombre.addEventListener("change", ()=>{
    const valor = inputNombre.value
    if(valor.length <3){
        inputNombre.classList.add("invalido")
    }else{
        inputNombre.classList.remove("invalido")

    }

})

const form = document.getElementById("formulario")
const usuarios = []

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const nombre = inputNombre.value
    const apellido = inputApellido.value

    const usuario ={
        nombre: nombre,
        apellido: apellido
    }

    usuarios.push(usuario)
    console.log(usuarios);
})

///////// apertura y cierre del carrito o formualrio



const modalContainer = document.getElementById("modal-container")
const modalAbrir = document.getElementById("btn")
const cerrarModal = document.getElementById("cerrar-modal")


modalAbrir.addEventListener("click", ()=>{
    modalContainer.classList.toggle("modal-active")
})

cerrarModal.addEventListener("click", ()=>{
    modalContainer.classList.toggle("modal-active")
})