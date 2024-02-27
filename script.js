const textArea = document.querySelector(".textarea");
const mensagem = document.querySelector(".mensagem");
const copyButton = document.querySelector(".copy");

copyButton.style.display = "none"

function botoesCript() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    mensagem.style.backgroundImage = "none";
    document.querySelector(".frase").style.display = "none";
    document.querySelector(".frase__segunda").style.display = "none";
    copyButton.style.display = "block"; 
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" ,"ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    stringEncriptada = stringEncriptada.replace(/[^a-z\s]/g, ""); 

    let palavras = stringEncriptada.split(/\s+/);

    for(let i = 0; i < palavras.length; i++) {
        for(let j = 0; j < matrizCodigo.length; j++) {
            if(palavras[i].includes(matrizCodigo[j][0])) {
                palavras[i] = palavras[i].replaceAll(matrizCodigo[j][0], matrizCodigo[j][1]);
            }
        }
    }

    stringEncriptada = palavras.join(" ");

    return stringEncriptada;
}


function botoesDecript() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    copyButton.style.display = "block";
}


function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" ,"ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    stringDesencriptada = stringDesencriptada.replace(/[^a-z\s]/g, ""); 

    let palavras = stringDesencriptada.split(/\s+/);

    for(let i = 0; i < palavras.length; i++) {
        for(let j = 0; j < matrizCodigo.length; j++) {
            if(palavras[i].includes(matrizCodigo[j][1])) {
                palavras[i] = palavras[i].replaceAll(matrizCodigo[j][1], matrizCodigo[j][0]);
            }
        }
    }

    stringDesencriptada = palavras.join(" ");

    return stringDesencriptada;
}

function copy() {
    let copyText = document.querySelector(".mensagem");
    copyText.select();
    document.execCommand("copy");
}

document.querySelector(".copy").addEventListener("click", copy);

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
}