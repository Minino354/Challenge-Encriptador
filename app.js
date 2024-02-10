

function encriptarTexto(){   
    let properties = document.querySelector(".advertencia");
    properties.classList.remove("animacion") 
    let imagen = document.querySelector(".changeColor");
    imagen.src = "Imagenes/Green.svg"


    let texto = document.querySelector("#textoInicial").value;
    encriptado = texto.replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat')
    if (checkRequirements(texto)){
        if(texto.length >0){
            if (texto.length < 100){
                let textInicial = document.querySelector("#inicial");
                textInicial.setAttribute("hidden","false");
            
                let textFinal = document.querySelector("#final");
                textFinal.removeAttribute("hidden");
            
                let textoCopiado = document.querySelector(".textoCopiado")
                textoCopiado.innerHTML = encriptado;
                document.getElementById("textoInicial").value = "";
            }
            else{
                let mensaje = "El maximo de caracteres permitidos es 100"
                alert(mensaje)
                document.getElementById("textoInicial").value = "";
            }
        }
    }
}


function desencriptarTexto(){
    let properties = document.querySelector(".advertencia");
    properties.classList.remove("animacion") 
    let imagen = document.querySelector(".changeColor");
    imagen.src = "Imagenes/Green.svg"


    let texto = document.querySelector("#textoInicial").value;
    desencriptado = texto.replaceAll('ai', 'a')
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u')

    if (checkRequirements(texto)){
        if(texto.length >0){
            if (texto.length < 300){
                let textInicial = document.querySelector("#inicial");
                textInicial.setAttribute("hidden","false");
            
                let textFinal = document.querySelector("#final");
                textFinal.removeAttribute("hidden");
            
                let textoCopiado = document.querySelector(".textoCopiado")
                textoCopiado.innerHTML = desencriptado;
                document.getElementById("textoInicial").value = "";
            }
            else{
                let mensaje = "El maximo de caracteres permitidos es 300"
                alert(mensaje)
                document.getElementById("textoInicial").value = "";
            }
        }
    }
    }

function copiarTexto(){
    const textoCopiado = document.querySelector(".textoCopiado")
    navigator.clipboard.writeText(textoCopiado.innerHTML)
}

function checkRequirements(texto){
    var mayusculas = /[A-Z]/
    var tildes = /[áéíóú]/
    var specialCharactersRegex = /[@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=|"]/;
    if (specialCharactersRegex.test(texto)){
        advertencia()
        return false;    
    }
    if (tildes.test(texto)){
        advertencia()
        return false;
    }
    if (mayusculas.test(texto)){
        advertencia()
        return false;
    }
    else{
        console.log(specialCharactersRegex.test(texto))
        return true;
    }
}

function advertencia(){
    let properties = document.querySelector(".advertencia");
    properties.classList.add("animacion")
    let imagen = document.querySelector(".changeColor");
    imagen.src = "Imagenes/Red.svg"
    document.getElementById("textoInicial").value = "";
}


