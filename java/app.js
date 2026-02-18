const contenedor = document.getElementById("contenedor")
const btnc = document.getElementById("crear")

//una peticion es una promesa
//una promesa se rompe
//una promesa debe ser asincrona

let personas = []
    async function obtenerPersonas(){
    const response = await fetch("personas.json")
    personas = await response.json()


    renderizar()
}
function renderizar(){
    contenedor.innerHTML = ""


    personas.forEach(persona => {
        const card = document.createElement("div")
        card.classList.add("card")
        
        card.innerHTML = `
            <h3>${persona.nombre}</h3>
            <p>Edad: ${persona.edad} </p>
            <p>Ciudad: ${persona.ciudad} </p>
        `
        contenedor.appendChild(card)
    });
}


btnc.addEventListener("click", ()=> {
    const nombre = document.getElementById("nombre").value
    const edad = document.getElementById("edad").value
    const ciudad = document.getElementById("ciudad").value

    const nuevaPersona = {
        id: personas.length + 1,
        nombre,
        edad,
        ciudad
    }


    personas.push(nuevaPersona)
    renderizar()
    
})
obtenerPersonas();