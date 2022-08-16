function parteMonografiaEletronicoRef(){
    //REFERENCIA DA PARTE/CAPITULO
    var autor1Parte = document.getElementById('autor1Parte').value;
    var autor1SobrenomeParte = document.getElementById('autor1SobrenomeParte').value;
    var autor2Parte = document.getElementById('autor2Parte').value;
    var autor2SobrenomeParte = document.getElementById('autor2SobrenomeParte').value;
    var autor3Parte = document.getElementById('autor3Parte').value;
    var autor3SobrenomeParte = document.getElementById('autor3SobrenomeParte').value;
    var tituloParte = document.getElementById('tituloParte').value;
    var entidadeParte = document.getElementById('entidadeParte').value;

    //TIPO AUTOR
    var tipoAutorParte = document.querySelector("#tipoAutorParte").value;
    //1- Pessoa física
    //2- Entidade

    //RESPONSABILIDADE INTELECTUAL
    var responsabilidadeParte = document.querySelector("#responsabilidadeParte").value;
    //1- Autor
    //2- Editor
    //3- Tradutor
    //4- Organizador

    //VERIFICANDO SE HÁ MAIS DE 3 AUTORES
    var mais3autoresParte = document.getElementById('mais3autoresParte');

    //VERIFICANDO SE A OBRA NÃO POSSUI AUTORES
    var semAutoresParte = document.getElementById('semAutoresParte');

    //FORMATACAO DE AUTORES
    var autor1ParteFormat = autor1SobrenomeParte.toUpperCase() + ", " + autor1Parte;
    var autor2ParteFormat = autor2SobrenomeParte.toUpperCase() + ", " + autor2Parte;
    var autor3ParteFormat = autor3SobrenomeParte.toUpperCase() + ", " + autor3Parte;
    var autoresParteFormt;

    //VERIFICAÇÃO DA QUANTIDADE DE AUTORES
    if (tipoAutorParte != 1 && tipoAutorParte != 2 && !semAutoresParte.checked) {
        alert('Informe o tipo do autor da parte');

    } else if (responsabilidadeParte != 1 && responsabilidadeParte != 2 && responsabilidadeParte != 3 && responsabilidadeParte != 4 && !semAutoresParte.checked) {
        alert('Informe a responsabilidade intelectual do autor da parte');

    } else if (mais3autoresParte.checked) {
        var inicialAutor1Parte = autor1Parte[0];
        autoresParteFormt = autor1SobrenomeParte.toUpperCase() + ", " + inicialAutor1Parte + ". " + " et al";

    } else if (tipoAutorParte == 1 && autor1Parte == "" && autor1SobrenomeParte == "") {
        alert("Autor 1 da parte deve ser informado");

    } else if (tipoAutorParte == 2 && entidadeParte == "") {
        alert('Nome da entidade da parte não informado');

    } else if (tipoAutorParte == 2 && entidadeParte != "") {
        autoresParteFormt = entidadeParte;

    } else if (autor1Parte != "" && autor2Parte == "") {
        //existe apenas um autor
        autoresParteFormt = autor1ParteFormat;

    } else if (autor2Parte != "" && autor3Parte == "") {
        //possui dois autores
        autoresParteFormt = autor1ParteFormat + "; " + autor2ParteFormat;

    } else if (autor1Parte != "" && autor2Parte != "" && autor3Parte != "") {
        //possui 3 autores
        autoresParteFormt = autor1ParteFormat + "; " + autor2ParteFormat + "; " + autor3ParteFormat;

    }

    if (tipoAutorParte == 1 && responsabilidadeParte == 1) {
        //autor
        autoresParteFormt = autoresParteFormt;
    } else if (tipoAutorParte == 1 && responsabilidadeParte == 2) {
        //editor
        autoresParteFormt = autoresParteFormt + " (Ed.)"

    } else if (tipoAutorParte == 1 && responsabilidadeParte == 3) {
        //compilador
        autoresParteFormt = autoresParteFormt + " (Comp.)"

    } else if (tipoAutorParte == 1 && responsabilidadeParte == 4) {
        //organizador
        autoresParteFormt = autoresParteFormt + " (Org.)"

    } else if (tipoAutorParte == 1 && responsabilidadeParte == 5) {
        //coordenador
        autoresParteFormt = autoresParteFormt + " (Coord.)"
    }


    //FORMATAÇÃO DO TITULO JUNTO COM OS AUTORES
    var tituloParteFormat;
    if(tituloParte != ""){
        if (semAutoresParte.checked) {
            //não há autores
            tituloParteFormat = tituloParte + ". ";
        } else {
            //há autores
            tituloParteFormat = autoresParteFormt + ". " + tituloParte + ". ";
        }
    } else {
        alert('Informe o título da parte')
    }

    var resultParte = tituloParteFormat;

    //----------------------------------------------------------------------------------------
    //REFERENCIA COMPLETA
    var autor1 = document.getElementById('autor1').value;
    var autor1Sobrenome = document.getElementById('autor1Sobrenome').value;
    var autor2 = document.getElementById('autor2').value;
    var autor2Sobrenome = document.getElementById('autor2Sobrenome').value;
    var autor3 = document.getElementById('autor3').value;
    var autor3Sobrenome = document.getElementById('autor3Sobrenome').value;
    var titulo = document.getElementById('titulo').value;
    var edicao = document.getElementById('edicao').value;
    var local = document.getElementById('local').value;
    var editora = document.getElementById('editora').value;
    var anoPublicacao = document.getElementById('anoPublicacao').value;
    var entidade = document.getElementById('entidade').value;
    var pag = document.getElementById('pag').value;

    //TIPO AUTOR
    var tipoAutor = document.querySelector("#tipoAutor").value;
    //1- Pessoa física
    //2- Entidade

    //RESPONSABILIDADE INTELECTUAL
    var responsabilidade = document.querySelector("#responsabilidade").value;
    //1- Autor
    //2- Editor
    //3- Tradutor
    //4- Organizador

    
    //VERIFICANDO SE HÁ MAIS DE 3 AUTORES
    var mais3autores = document.getElementById('mais3autores');

    //VERIFICANDO SE A OBRA NÃO POSSUI AUTORES
    var semAutores = document.getElementById('semAutores');

    //FORMATACAO DE AUTORES
    var autor1Format = autor1Sobrenome.toUpperCase() + ", " + autor1;
    var autor2Format = autor2Sobrenome.toUpperCase() + ", " + autor2;
    var autor3Format = autor3Sobrenome.toUpperCase() + ", " + autor3;
    var autoresFormt;

    //VERIFICAÇÃO DA QUANTIDADE DE AUTORES
    if (tipoAutor != 1 && tipoAutor != 2 && !semAutores.checked) {
        alert('Informe o tipo do autor');

    } else if (responsabilidade != 1 && responsabilidade != 2 && responsabilidade != 3 && responsabilidade != 4 && !semAutores.checked) {
        alert('Informe a responsabilidade intelectual do autor');

    } else if (mais3autores.checked) {
        var inicialAutor1 = autor1[0];
        autoresFormt = autor1Sobrenome.toUpperCase() + ", " + inicialAutor1 + ". " + " et al";

    } else if (tipoAutor == 1 && autor1 == "" && autor1Sobrenome == "") {
        alert("Autor 1 deve ser informado");

    } else if (tipoAutor == 2 && entidade == "") {
        alert('Nome da entidade não informado');

    } else if (tipoAutor == 2 && entidade != "") {
        autoresFormt = entidade;

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

    if (tipoAutor == 1 && responsabilidade == 1) {
        //autor
        autoresFormt = autoresFormt;
    } else if (tipoAutor == 1 && responsabilidade == 2) {
        //editor
        autoresFormt = autoresFormt + " (Ed.)"

    } else if (tipoAutor == 1 && responsabilidade == 3) {
        //compilador
        autoresFormt = autoresFormt + " (Comp.)"

    } else if (tipoAutor == 1 && responsabilidade == 4) {
        //organizador
        autoresFormt = autoresFormt + " (Org.)"

    } else if (tipoAutor == 1 && responsabilidade == 5) {
        //coordenador
        autoresFormt = autoresFormt + " (Coord.)"
    }


    //FORMATAÇÃO DO TITULO JUNTO COM OS AUTORES
    var tituloFormat;
    if(titulo != ""){
        if (semAutores.checked) {
            //não há autores
            tituloFormat = titulo + ". ";
        } else {
            //há autores
            tituloFormat = autoresFormt + ". " + titulo.bold() + ". ";
        }
    } else {
        alert('Informe o título do todo')
    }
    //EDIÇÃO
    var edicaoFormat = tituloFormat + edicao + ". ed. ";

    //LOCAL
    var localFormat = edicaoFormat + local + ": ";

    //EDITORA
    var editoraFormat = localFormat + editora + ", ";

    //ANO
    var anoFormat = editoraFormat + anoPublicacao + ".";

    //PAGINAÇÃO
    if(pag == "")
        alert('Informe o(s) numero(s) da(s) página(s)')
    else 
        var pagFormat = anoFormat + " p. " + pag + ".";

    //CITAÇÃO NO TEXTO
    var citacaoAutores;
    var citacaoSemAutores;
    if(tipoAutor == 2){
        //entidade
        citacaoAutores = entidade + " ("+ anoPublicacao + ")";
        citacaoSemAutores = "("+ entidade.toUpperCase() + ", " + anoPublicacao + ")";
    }
    if(mais3autores.checked){
        //usar a abreviação de tres autores
        citacaoAutores = autor1Sobrenome + " <i>et</i> al. (" + anoPublicacao + ")";
        citacaoSemAutores = "(" + autor1Sobrenome.toUpperCase() + " <i>et</i> al., " + anoPublicacao + ")";
    
    } else if(semAutores.checked){
        //não há autores
        citacaoAutores = titulo + " (" + anoPublicacao + ")";
        citacaoSemAutores = "(" + titulo + ", " + anoPublicacao + ")";

    } else if(autor1Sobrenome != "" && autor2Sobrenome == "" && autor3Sobrenome == ""){
        //há somente um autor
        citacaoAutores = autor1Sobrenome + " ("+ anoPublicacao + ")";
        citacaoSemAutores = "("+ autor1Sobrenome.toUpperCase() + ", " + anoPublicacao + ")";

    } else if(autor1Sobrenome != "" && autor2Sobrenome != "" && autor3Sobrenome == ""){
        //há dois autores
        citacaoAutores = autor1Sobrenome + " e " + autor2Sobrenome +  " ("+ anoPublicacao + ")";
        citacaoSemAutores = "("+ autor1Sobrenome.toUpperCase() + "; " + autor2Sobrenome.toUpperCase() + ", " + anoPublicacao + ")";

    } else if(autor1Sobrenome != "" && autor2Sobrenome != "" && autor3Sobrenome != ""){
        //há três autores
        citacaoAutores = autor1Sobrenome + ", " + autor2Sobrenome + " e " + autor3Sobrenome + " ("+ anoPublicacao + ")";
        citacaoSemAutores = "("+ autor1Sobrenome.toUpperCase() + "; " + autor2Sobrenome.toUpperCase() + "; " + autor3Sobrenome.toUpperCase() + ", " + anoPublicacao + ")"
    }

    //CASO SEJA UMA PUBLICAÇÃO EM MEIO ELETRONICO
    var fonte = document.getElementById('fonte').value;
    var diaAcesso = document.getElementById('diaAcesso').value;
    var mesAcesso = document.getElementById('mesAcesso').value;
    var anoAcesso = document.getElementById('anoAcesso').value;
    var cdrom = document.getElementById('cdrom');
    var online = document.getElementById('online');
    if (cdrom.checked || online.checked) {
        if (cdrom.checked) {
            result = pagFormat + " CD-ROM."
        } else {
            if (fonte == "" || diaAcesso == "" || mesAcesso == "" || anoAcesso == "") {
                alert('Preencha todos os campos corretamente')
                autoresFormt = undefined;
            } else {
                result = pagFormat + " Disponível em: " + fonte + ". Acesso em: " + diaAcesso + " " + mesAcesso + ". " + anoAcesso + "."
            }
        }
    }
    //RESULTADO
    result = resultParte + "In: " + result;

    //var anoFormat = dataPublicacao.getYear();
    //alert(dataPublicacao)

    if (autoresFormt == undefined || autoresParteFormt == undefined && !semAutores.checked)
        alert('Ocorreu um erro! Certifique-se que todos os campos foram preenchidos corretamente');
    else{
        document.getElementById('result').innerHTML = "Referência: " + result;
        document.getElementById('citacao').innerHTML = "Citacão no texto: " + citacaoAutores + " ou " + citacaoSemAutores;
    }
}