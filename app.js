// Lógica para encriptar 
function encriptarTexto() {

    // Primero se ocultan los elementos:
    let muñeco = document.querySelector(".cont-caja-muñeco"); 
    let cont_parrafo = document.querySelector(".cont-caja-parrafo"); 

    muñeco.style.display = "none"; 
    cont_parrafo.style.display = "none";  

    //Se llama el texto a encriptar 
    let textoEncriptar = document.querySelector(".caja-texto").value.toLowerCase();

    //Se aplican las operaciones 
    let textoEncriptado = textoEncriptar.replace(/e/img, "enter")
                                       .replace(/i/img, "imes")
                                       .replace(/o/img, "ober")
                                       .replace(/a/img, "ai")
                                       .replace(/u/img, "ufat");

    //Se muestra en la página
    document.querySelector(".texto-resultado").innerHTML = textoEncriptado; 
    document.getElementById("btn-copiar").style.display = "block";
}

function desencriptarTexto() {
    //Se ocultan los elementos 
    let muñeco = document.querySelector(".cont-caja-muñeco"); 
    let cont_parrafo = document.querySelector(".cont-caja-parrafo"); 

    muñeco.style.display = "none"; 
    cont_parrafo.style.display = "none";  

    //Se llama el texto a desencriptar
    let textoEncriptado = document.querySelector(".caja-texto").value.toLowerCase();

    //Se le aplican las operaciones 
    let textoDesencriptado = textoEncriptado.replace(/enter/img, "e")
                                           .replace(/imes/img, "i")
                                           .replace(/ober/img, "o")
                                           .replace(/ai/img, "a")
                                           .replace(/ufat/img, "u");

    //Se muestra en pantalla el resultado
    document.querySelector(".texto-resultado").innerHTML = textoDesencriptado; 
    document.getElementById("btn-copiar").style.display = "block";
}

function copiar(){
    let contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido); 
}
