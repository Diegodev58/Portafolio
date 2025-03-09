//inicio
function inicio(){
    window.location.href = "../index.html"
}


//mis proyectos lista
const proyectosPropios = [
    {
        id: 1,
        nombre: "Generador de Link de Correos",
        descripcion: "Un generador de enlaces de WhatsApp que prioriza la privacidad. Permite crear enlaces directos sin almacenar números de teléfono.",
        enlace: "https://generador-link-correos.vercel.app/"
    },
    {
        id: 2,
        nombre: "Generador de Link de WhatsApp",
        descripcion: "Un generador de enlaces de WhatsApp que prioriza la privacidad. Permite crear enlaces directos sin almacenar números de teléfono.",
        enlace: "https://generador-link-whats-app.vercel.app/"
    }
]


for (const proyecto of proyectosPropios) {
    const c1 = document.createElement("div");
    c1.classList.add("c1");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const button = document.createElement("button");
    button.addEventListener("click", function () {
        window.open(proyecto.enlace, '_blank');
    })
    h2.textContent = proyecto.nombre;
    p.textContent = proyecto.descripcion;
    button.textContent = "Ir";
    c1.appendChild(h2);
    c1.appendChild(p);
    c1.appendChild(button);
    document.body.appendChild(c1);
}