function cifrar() {
    let texto = document.getElementById("texto").value;
    let numDesloc = parseInt(document.getElementById("deslocamento").value);

    document.getElementById("textocifrado").innerHTML = cypherCifrar(texto, numDesloc);
}

function base64 (){
        let texto = document.getElementById("texto").value;
let resultado = window.btoa(texto)
console.log (resultado)

}

function base64 (){
    let texto = document.getElementById("texto").value;
let resultado = window.atob(texto)
console.log (resultado)

}


function cypherCifrar(texto, numDesloc) {
    let textoArray = [];
    let deslocamentoArray = [];
    let textoCodificado = "";

    for (let i = 0; i < texto.length; i++) {
        textoArray.push(texto.charCodeAt(i));
    }

    for (j = 0; j < textoArray.length; j++) {
        if (textoArray[j] >= 65 && textoArray[j] <= 90) {
            deslocamentoArray.push((((textoArray[j] - 65 + numDesloc) % 26) + 65));
        } else if (textoArray[j] >= 97 && textoArray[j] <= 122) {
            deslocamentoArray.push((((textoArray[j] - 97 + numDesloc) % 26) + 97));
        } else {
            deslocamentoArray.push(textoArray[j]);
        }
    }

    for (g = 0; g < deslocamentoArray.length; g++) {
        textoCodificado += String.fromCharCode(deslocamentoArray[g]);
    }
    return textoCodificado;
}

function decifrar() {
    let texto = document.getElementById("texto").value;
    let numDesloc = parseInt(document.getElementById("deslocamento").value);

    document.getElementById("textocifrado").innerHTML = cypherDec(texto, numDesloc);
}

function cypherDec(texto, numDesloc) {
    let textoArray = [];
    let deslocamentoArray = [];
    let textoCodificado = "";

    for (let i = 0; i < texto.length; i++) {
        textoArray.push(texto.charCodeAt(i));
    }

    for (j = 0; j < textoArray.length; j++) {
        if (textoArray[j] >= 65 && textoArray[j] <= 90) {
            deslocamentoArray.push((((textoArray[j] - 90 - numDesloc) % 26) + 90));
        } else if (textoArray[j] >= 97 && textoArray[j] <= 122) {
            deslocamentoArray.push((((textoArray[j] - 122 - numDesloc) % 26) + 122));
        } else {
            deslocamentoArray.push(textoArray[j]);
        }
    }

    for (g = 0; g < deslocamentoArray.length; g++) {
        textoCodificado += String.fromCharCode(deslocamentoArray[g]);
    }
    return textoCodificado;
}


function cifrarteste(calculado, esperado) {
    if (calculado === esperado) {
        console.log("Correto");
        return true;
    } else {
        console.log("A resposta foi:" + calculado + "E contrário de:" + esperado);
        return false;
    }
}

console.log("Testando a função cifrar:")
cifrarteste(cypherCifrar("abc", 1), "bcd")
cifrarteste(cypherCifrar("xyz", 2), "zab")
cifrarteste(cypherCifrar("apto 67", 2), "apto 2")
cifrarteste(cypherCifrar("AEIOU", 5), "ABCDE")


function decifrarteste(calculado, esperado) {
    if (calculado === esperado) {
        console.log("Correto");
        return true;
    } else {
        console.log("A resposta foi:" + calculado + "E contrário de:" + esperado);
        return false;
    }
}

console.log("Testando a função decifrar:")
decifrarteste(cypherDec("bcd", 1), "abc")
decifrarteste(cypherDec("#erp gld!#", 3), "#bom dia!#")
decifrarteste(cypherDec("CBOBOB", 1), "BANANA")