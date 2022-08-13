function trabalhoApresentadoEventoRef(){
    var autor1 = document.getElementById('autor1').value;
    var autor1Sobrenome = document.getElementById('autor1Sobrenome').value;
    var autor2 = document.getElementById('autor2').value;
    var autor2Sobrenome = document.getElementById('autor2Sobrenome').value;
    var autor3 = document.getElementById('autor3').value;
    var autor3Sobrenome = document.getElementById('autor3Sobrenome').value;
    var tituloTrabalho = document.getElementById('tituloTrabalho').value;
    var nomeEvento = document.getElementById('nomeEvento').value;
    var numeracao = document.getElementById('numeracao').value;
    var anoRealizacao = document.getElementById('anoRealizacao').value;
    var localRealizacao = document.getElementById('localRealizacao').value;
    var tituloDocumento = document.getElementById('tituloDocumento').value;
    var localPublicacao = document.getElementById('localPublicacao').value;
    var editora = document.getElementById('editora').value;
    var anoPublicacao = document.getElementById('anoPublicacao').value;
    var pagInicialFinal = document.getElementById('pagInicialFinal').value;

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

    } else if (tipoAutor == 1 && autor1 == "" && autor1Sobrenome == "" && !semAutores.checked) {
        alert("Autor 1 deve ser informado");
        autoresFormt = undefined;

    } else if (tipoAutor == 2 && entidade == "" && !semAutores.checked) {
        alert('Nome da entidade não informado');

    } else if (tipoAutor == 2 && entidade != "" && !semAutores.checked) {
        autoresFormt = entidade;

    } else if (autor1 != "" && autor2 == "" && !semAutores.checked) {
        //existe apenas um autor
        autoresFormt = autor1Format;

    } else if (autor2 != "" && autor3 == "" && !semAutores.checked) {
        //possui dois autores
        autoresFormt = autor1Format + "; " + autor2Format;

    } else if (autor1 != "" && autor2 != "" && autor3 != "" && !semAutores.checked) {
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


    //FORMATAÇÃO DO TITULO DO TRABALHO APRESENTADO JUNTO COM OS AUTORES
    var tituloTrabalhoFormat;
    if (semAutores.checked) {
        //não há autores
        tituloTrabalhoFormat = tituloTrabalho + ". ";
    } else {
        //há autores
        tituloTrabalhoFormat = autoresFormt + ". " + tituloTrabalho + ". ";
    }

    var resultTrabalho = tituloTrabalhoFormat;

    //FORMATAÇÃO DO NOME DO EVENTO
    var nomeEventoFormat;
    if (nomeEvento == "") {
        alert('Informe o nome do evento');
        nomeEvento = undefined;
    } else {
        nomeEventoFormat = nomeEvento.toUpperCase() + ", ";
    }

    //FORMATACAO DA NUMERAÇÃO, CASO HAJA
    var numeracaoFormat;
    if (numeracao != "") {
        numeracaoFormat = nomeEventoFormat + numeracao + "., ";
    } else {
        numeracaoFormat = nomeEventoFormat;
    }

    //FORMATAÇÃO DO ANO DE REALIZAÇÃO DO EVENTO
    var anoRealizacaoFormat;
    if (anoRealizacao == "") {
        alert('Informe o ano de realização do evento');
        nomeEvento = undefined;
    } else {
        anoRealizacaoFormat = numeracaoFormat + anoRealizacao + ", ";
    }

    //FORMATAÇÃO DO LOCAL DE REALIZAÇÃO DO EVENTO
    var localRealizacaoFormat;
    if (localRealizacao == "") {
        alert('Informe o ano de realização do evento');
        nomeEvento = undefined;
    } else {
        localRealizacaoFormat = anoRealizacaoFormat + localRealizacao + ". ";
    }

    //FORMATAÇÃO DO TÍTULO DO DOCUMENTO
    var tituloDocumentoFormat;
    if (tituloDocumento == "") {
        alert('Informe o título do documento');
        nomeEvento = undefined;
    } else {
        tituloDocumentoFormat = localRealizacaoFormat + tituloDocumento.bold() + ". ";
    }

    //FORMATAÇÃO DO LOCAL DE PUBLICAÇÃO
    var localPublicacaoFormat;
    if (localPublicacao == "") {
        alert('Informe o local de publicação');
        nomeEvento = undefined;
    } else {
        localPublicacaoFormat = tituloDocumentoFormat + localPublicacao + ": ";
    }

    //FORMATACAO DA EDITORA
    var editoraFormat;
    if (editora == "") {
        alert('DEPOIS FAZER A FORMATAÇÃO DE EDITORA VAZIA');
    } else {
        editoraFormat = localPublicacaoFormat + editora + ", ";
    }

    //FORMATAÇÃO DA DATA DE PUBLICAÇÃO
    var anoPublicacaoFormat;
    if(anoPublicacao == ""){
        alert('Informe o ano de publicação do documento');
        nomeEvento = undefined;
    } else {
        anoPublicacaoFormat = editoraFormat + anoPublicacao + ". ";
    }

    //FORMATAÇÃO DA PAGINAÇÃO
    var paginacaoFormat;
    if(pagInicialFinal == ""){
        alert('Informe a paginação')
    } else {
        paginacaoFormat = anoPublicacaoFormat + "p. " + pagInicialFinal + "."
    }

    var resultEvento = paginacaoFormat;

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

    //RESULTADO
    var result = resultTrabalho + "In: " + resultEvento;

    if (nomeEvento == undefined)
        alert('Ocorreu um erro! Certifique-se que todos os campos foram preenchidos corretamente');
    else{
        document.getElementById('result').innerHTML = "Referência: " + result;
        document.getElementById('citacao').innerHTML = "Citacão no texto: " + citacaoAutores + " ou " + citacaoSemAutores;
    }
}