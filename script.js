const textoArea = document.querySelector(".texto-area");
const mensajee = document.querySelector(".mensaje");


function btnEncriptar (){
    const textoEncriptado = encriptar(textoArea.value)
    mensajee.value = textoEncriptado
    textoArea.value = "";
    mensajee.style.backgroundImage = "none"
}

function encriptar (stringEncriptado){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o","ober"],["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar (){
    const textoEncriptado = desencriptar(textoArea.value)
    mensajee.value = textoEncriptado
    textoArea.value = "";
}



function desencriptar (stringDesencriptado){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o","ober"],["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}


function copiarTexto() {
    const mensaje = document.querySelector(".mensaje");
    mensaje.select();
    document.execCommand("copy");
}