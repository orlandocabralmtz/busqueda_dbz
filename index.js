let nombre = document.getElementById("nombre");
let buscar_btn = document.getElementById("buscar");
let resultado = document.getElementById("resultado");

let personajes_json = JSON.parse(file);   //{characters: [...]}
//buscar_btn.addEventListener("click", buscar)

function buscar(){
    //resultado.innerHTML = nombre.value;
    let personaje = buscarPersonaje(nombre.value);
    document.querySelectorAll(".name")[0].innerHTML = `${personaje.name}`;
    document.querySelectorAll(".race")[0].innerHTML = `${personaje.race}`;
    document.querySelectorAll(".gender")[0].innerHTML = `${personaje.gender}`;
    //document.querySelectorAll(".bio")[0].innerHTML = `${personaje.bio}`;
    document.querySelectorAll(".health")[0].innerHTML = `${personaje.health}`;
    document.querySelectorAll(".attack")[0].innerHTML = `${personaje.attack}`;
    document.querySelectorAll(".defense")[0].innerHTML = `${personaje.defense}`;
    document.querySelectorAll(".restore")[0].innerHTML = `${personaje.kiRestoreSpeed}`;
    document.querySelectorAll(".ability")[0].innerHTML = `${personaje.abilities}`;
    document.querySelectorAll(".pic")[0].src= `${personaje.img}`
    // resultado.innerHTML = `
    // <p>
    //     <span class="tittles">Nombre: ${personaje.name}</span> <br>
    //     <span>Biografia: ${personaje.bio}</span>
    // </p>
    // `

}


function buscarPersonaje(valor){
    personajes = personajes_json.characters; // []

    for(let i = 0; i<personajes.length; i++){
        if(valor == personajes[i].id){
            return personajes[i];
        }
    }
}