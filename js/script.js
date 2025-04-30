const menu = document.querySelector('.menu i');
const navbar= document.querySelector('.nav-bar');
const cerrar= document.querySelector('.nav-cerrar');
const enlaces= document.querySelector('.enlaces');
const topM= document.querySelector('.top-header');

menu.addEventListener('click', (e)=>{
    navbar.style.display='block';

})

cerrar.addEventListener('click', ()=>{
    navbar.style.display='none';
})


//carrusel
let imagenes=[
    {
        "url": "img/IMG_7449.jpg",
        "descripcion":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptate totam voluptates libero exercitationem quam eos eaque magni odit."
    },

    {
        "url": "img/IMG_7541.jpg",
        "descripcion":"Voluptate totam voluptates libero exercitationem quam eos eaque magni odit."
    },

    {
        "url": "img/IMG_7599.jpg",
        "descripcion":"Lorem ipsum dolor sit amet consectetur, adipisicing elit"
    },

]

let atras= document.querySelector('.carrusel #atras');
let adelante= document.querySelector('.carrusel #adelante');
let imagen= document.querySelector('#img');
let puntos = document.querySelector('#puntos');
let texto = document.querySelector('.carrusel-texto');
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -= 1;

    if (actual == -1){
        actual = imagenes.length - 1;
    }

    imagen.src = imagenes[actual].url; // SOLO cambiamos el src
    texto.innerHTML = `<p>${imagenes[actual].descripcion}</p>`;
    posicionCarrusel();
});  

adelante.addEventListener('click', function(){
    actual += 1;

    if (actual == imagenes.length){
        actual = 0;
    }

    imagen.src = imagenes[actual].url; // SOLO cambiamos el src
    texto.innerHTML = `<p>${imagenes[actual].descripcion}</p>`;
    posicionCarrusel();
});  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold"><i class="bi bi-circle-fill"></i></p>'
        }
        else{
            puntos.innerHTML += '<p><i class="bi bi-circle"></i></p>'
        }
    } 
}