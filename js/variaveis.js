// var autor1;
// var autor1Sobrenome = document.getElementById('autor1Sobrenome').value.toUpperCase();
// var autor2 = document.getElementById('autor2').value;
// var autor2Sobrenome = document.getElementById('autor2Sobrenome').value.toUpperCase();
// var autor3 = document.getElementById('autor3').value;
// var autor3Sobrenome = document.getElementById('autor3Sobrenome').value.toUpperCase();
// var titulo = document.getElementById('titulo').value;
// var edicao = document.getElementById('edicao').value;
// var local = document.getElementById('local').value;
// var editora = document.getElementById('editora').value;
// var dataPublicacao = document.getElementById('dataPublicacao').value;
function variaveis() {
    /*Essa função será responsável por armazenar todos os dados inseridos no formulário em variáveis*/
    var autor1 = document.getElementById('autor1').value;
    var autor1Sobrenome = document.getElementById('autor1Sobrenome').value.toUpperCase();
    var autor2 = document.getElementById('autor2').value;
    var autor2Sobrenome = document.getElementById('autor2Sobrenome').value.toUpperCase();
    var autor3 = document.getElementById('autor3').value;
    var autor3Sobrenome = document.getElementById('autor3Sobrenome').value.toUpperCase();
    var titulo = document.getElementById('titulo').value.bold();
    var edicao = document.getElementById('edicao').value;
    var local = document.getElementById('local').value;
    var editora = document.getElementById('editora').value;
    var dataPublicacao = document.getElementById('dataPublicacao').value;

    document.getElementById("result").innerHTML = titulo
    //Depois fazer o negocio para verificar se o checkbox esta ativo 
    let mais3autores = document.getElementById('mais3autores');
    var semAutores = document.getElementById('semAutores');

    //FORMATACAO DE AUTORES
    var autor1Format = autor1Sobrenome + ", " + autor1;
    var autor2Format = autor2Sobrenome + ", " + autor2;
    var autor3Format = autor3Sobrenome + ", " + autor3;
    var autoresFormt;

    //VERIFICAÇÃO DA QUANTIDADE DE AUTORES
    if (mais3autores.checked) {
        const inicialAutor1 = autor1[0];
        autoresFormt = autor1Sobrenome + ", " + inicialAutor1 + ". " + " et al.";
    } else if (autor1 == "" || autor1Sobrenome == "") {
        alert("Autor 1 deve ser informado")
    } else if (autor1 != "" && autor2 == "") {
        //existe apenas um autor
        autoresFormt = autor1Format;
    } else if (autor2 != "" && autor3 == "") {
        //possui dois autores
        autoresFormt = autor1Format + "; " + autor2Format;
    } else if (autor1 != "" && autor2 != "" && autor3 != "") {
        //possui 3 autores
        autoresFormt = autor1Format + "; " + autor2Format + "; " + autor3Format;
    }

    autoresFormt = autoresFormt + ". ";

    //FORMATAÇÃO DO TITULO JUNTO COM OS AUTORES
    var tituloFormat = autoresFormt + titulo + ". ";

    //EDIÇÃO
    var edicaoFormat = tituloFormat + edicao + ". ed. ";

    //LOCAL
    var localFormat = edicaoFormat + local + ": ";

    //EDITORA
    var editoraFormat = localFormat + editora + ", ";

    //DATA
    //var anoFormat = dataPublicacao.getYear();
    alert(dataPublicacao)

    if (autoresFormt != undefined)
        document.getElementById('result').innerHTML = editoraFormat;
    else
        alert('Ocorreu um erro! Certifique-se que todos os campos foram preenchidos corretamente');
}

// variaveis();

// console.log(autor1Sobrenome)
// alert(autor1Sobrenome)

//export function variaveis(){autor1, autor1Sobrenome}

// function autores(){
//     var autor1 = $autor1Sobrenome + ", " + $autor1;
//     alert(autor1)
// }


// const botao = document.getElementById('enviar');
// botao.onclick = function(){
//     alert('TA FUNCIONADOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
// }