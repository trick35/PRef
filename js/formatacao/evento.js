function eventoRef() {
    var nomeEvento = document.getElementById('nomeEvento').value;
    var numeracao = document.getElementById('numeracao').value;
    var anoRealizacao = document.getElementById('anoRealizacao').value;
    var localRealizacao = document.getElementById('localRealizacao').value;
    var tituloDocumento = document.getElementById('tituloDocumento').value;
    var localPublicacao = document.getElementById('localPublicacao').value;
    var editora = document.getElementById('editora').value;
    var anoPublicacao = document.getElementById('anoPublicacao').value;

    //VARIAVEIS DE CITAÇÃO NO TEXTO
    var citacaoAutores;
    var citacaoSemAutores;

    //FORMATAÇÃO DO NOME DO EVENTO
    var nomeEventoFormat;
    if (nomeEvento == "") {
        alert('Informe o nome do evento');
        nomeEvento = undefined;
    } else {
        nomeEventoFormat = nomeEvento.toUpperCase() + ", ";
        citacaoAutores = nomeEvento + " (";
        citacaoSemAutores = "(" + nomeEvento.toUpperCase() + ", ";
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
        anoPublicacaoFormat = editoraFormat + anoPublicacao + ".";
        citacaoAutores = citacaoAutores + anoPublicacao + ")";
        citacaoSemAutores = citacaoSemAutores + anoPublicacao + ")";
    }

    

    //RESULTADO
    var result = anoPublicacaoFormat;

    if (nomeEvento == undefined)
        alert('Ocorreu um erro! Certifique-se que todos os campos foram preenchidos corretamente');
    else{
        document.getElementById('result').innerHTML = "Referência: " + result;
        document.getElementById('citacao').innerHTML = "Citacão no texto: " + citacaoAutores + " ou " + citacaoSemAutores;
    }

}