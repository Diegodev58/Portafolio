


//mis proyectos lista
const proyectosPropios = [
    {
        id: 1,
        nombre: "Generador de Link de Correos",
        descripcion: "Un generador de enlaces de WhatsApp que prioriza la privacidad. Permite crear enlaces directos sin almacenar números de teléfono.",
        
    }
]


for (const proyecto of proyectosPropios) {
    const card = document.createElement("div");
    card.classList.add("c1");
    card.innerHTML = `
        <h2>${proyecto.nombre}</h2>
        <p>${proyecto.descripcion}</p>
        <button>Ir</button>
    `;
    document.getElementById("container").appendChild(card);
}