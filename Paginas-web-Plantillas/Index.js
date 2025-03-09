//inicio
function inicio(){
    window.location.href = "../index.html"
}


//mis proyectos lista
const proyectosPropios = [
    {
        id: 1,
        img: "",
        nombre: "Primer Sitio Web",
        descripcion: "Primer sitio web Estoy probando.",
        enlace: '../Paginas-web-Plantillas/Plantillas/01-Html/index.html',
    },
    {
        id: 2,
        img: "",
        nombre: "Segundo Sitio Web",
        descripcion: "Segundo sitio web Estoy probando.",
        enlace: '../Paginas-web-Plantillas/Plantillas/02-Html/index.html',
        
    },
    
]

const opciones = document.querySelector(".Opciones");
function crearProyectos() {
    for (const proyecto of proyectosPropios) {
        const c1 = document.createElement("div");
        c1.addEventListener("click", function () {
            window.open(proyecto.enlace, '_blank');
        })
        const iframe = document.createElement("iframe");
        iframe.src = proyecto.enlace;
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.scrolling = "no";
        c1.appendChild(iframe);
        c1.classList.add("c1");

        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        //const img = document.createElement("img");
        h2.textContent = proyecto.nombre;
        p.textContent = proyecto.descripcion;
        c1.appendChild(h2);
        c1.appendChild(p);
       // c1.appendChild(img);
        opciones.appendChild(c1);
    }
}

crearProyectos();