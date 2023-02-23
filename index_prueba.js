let nombre = document.getElementById("nombre");
let buscar_btn = document.getElementById("buscar");
let resultado = document.getElementById("resultado");
let personajes_json = JSON.parse(file);   //{characters: [...]}
//buscar_btn.addEventListener("click", buscar)

// document.getElementById("mostrar-seccion").addEventListener("click", function() {
// /document.getElementsByTagName("section")[0].style.display = "block";
// });
for(let i = 0; i < personajes_json.characters.length; i++){
    document.querySelectorAll('.personaje')[i].innerHTML = `${personajes_json.characters[i].id}`
}


function handle(e){
    if(e.keyCode === 13){
        e.preventDefault(); 
        buscar();
    } 
}  //funcion para buscar al dar ENTER 


function aparecer() {
    document.getElementsByTagName("section")[0].style.display = "block";
}; //con esto aparece lo que esta dentro de la etiqueta <section>

function buscar(){
    //resultado.innerHTML = nombre.value;
    let personaje =     buscarPersonaje(nombre.value);
    if(nombre.value == 'todos' || nombre.value =="TODOS"){
        personajesTodos = personajes_json.characters;
        for(let j = 0; j<personajesTodos.length; j++){
            const miSeccion = document.getElementById('miSection'); //obtengo la referencia de la etiqueta de <secion>
            const elementoOriginal = document.querySelector('.personaje_db');  // obtengo el elemento que quiero clonar
            const copia = elementoOriginal.cloneNode(true); //clono el elemento
            miSeccion.appendChild(copia); //inserto el elemento
            aparecer();
            document.querySelectorAll(".name",)[j].innerHTML = `${personajesTodos[j].name}`;
            // document.querySelectorAll(".name",)[1].innerHTML = `${personaje.name}`;
            document.querySelectorAll(".race")[j].innerHTML = `${personajesTodos[j].race}`;
            document.querySelectorAll(".gender")[j].innerHTML = `${personajesTodos[j].gender}`;
            document.querySelectorAll(".bio")[j].innerHTML = `${personajesTodos[j].bio}`;
            document.querySelectorAll(".health")[j].innerHTML = `${personajesTodos[j].health}`;
            document.querySelectorAll(".attack")[j].innerHTML = `${personajesTodos[j].attack}`;
            document.querySelectorAll(".defense")[j].innerHTML = `${personajesTodos[j].defense}`;
            document.querySelectorAll(".restore")[j].innerHTML = `${personajesTodos[j].kiRestoreSpeed}`;
            document.querySelectorAll(".ability")[j].innerHTML = `${personajesTodos[j].abilities}`;
            document.querySelectorAll(".pic")[j].src= `${personajesTodos[j].img}`
            // document.querySelectorAll(".sonido")[i].src= `${personaje.sound}`
            document.querySelectorAll(".pic")[j].alt= `Esta es una imagen de ${personajesTodos[j].name}`
        }

    }
    else{
        if (personaje != null){   
        aparecer();
        document.querySelectorAll(".name",)[0].innerHTML = `${personaje.name}`;
        // document.querySelectorAll(".name",)[1].innerHTML = `${personaje.name}`;
        document.querySelectorAll(".race")[0].innerHTML = `${personaje.race}`;
        document.querySelectorAll(".gender")[0].innerHTML = `${personaje.gender}`;
        document.querySelectorAll(".bio")[0].innerHTML = `${personaje.bio}`;
        document.querySelectorAll(".health")[0].innerHTML = `${personaje.health}`;
        document.querySelectorAll(".attack")[0].innerHTML = `${personaje.attack}`;
        document.querySelectorAll(".defense")[0].innerHTML = `${personaje.defense}`;
        document.querySelectorAll(".restore")[0].innerHTML = `${personaje.kiRestoreSpeed}`;
        document.querySelectorAll(".ability")[0].innerHTML = `${personaje.abilities}`;
        document.querySelectorAll(".pic")[0].src= `${personaje.img}`
        document.querySelectorAll(".sonido")[0].src= `${personaje.sound}`
        document.querySelectorAll(".pic")[0].alt= `Esta es una imagen de ${personaje.name}`
        }
        else{
            console.log("Personaje no encontrado")
        }
}
}


function buscarPersonaje(valor){
    personajes = personajes_json.characters;
     // []
    for(let i = 0; i<personajes.length; i++){
        if(valor == personajes[i].id){
            return personajes[i];
        }
    } 
    return personajes = null
}

