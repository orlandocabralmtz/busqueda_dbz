let nombre = document.getElementById("nombre");
let buscar_btn = document.getElementById("buscar");
let resultado = document.getElementById("resultado");
let personajes_json = JSON.parse(file);   //{characters: [...]}
//buscar_btn.addEventListener("click", buscar)

// document.getElementById("mostrar-seccion").addEventListener("click", function() {
// /document.getElementsByTagName("section")[0].style.display = "block";
// });

// buscar_btn.addEventListener("click", buscar);
 function aparecer() {
    document.getElementsByTagName("section")[0].style.display = "block";
};

function buscar(){
    //resultado.innerHTML = nombre.value;
    let personaje =     buscarPersonaje(nombre.value);   
    if (personaje != null){   
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
    }else{
        console.log("Personaje no encontrado")
    }
 }


function buscarPersonaje(valor){
    personajes = personajes_json.characters; // []
    for(let i = 0; i<personajes.length; i++){
        if(valor == personajes[i].id){
            return personajes[i];
        }
    } 
    return personajes = null
}

