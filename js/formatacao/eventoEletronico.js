function eventoEletronicoRef() {
    var nomeEvento = document.getElementById('nomeEvento').value;
    var numeracao = document.getElementById('numeracao').value;
    var anoRealizacao = document.getElementById('anoRealizacao').value;
    var localRealizacao = document.getElementById('localRealizacao').value;
    var tituloDocumento = document.getElementById('tituloDocumento').value;
    var localPublicacao = document.getElementById('localPublicacao').value;
    var editora = document.getElementById('editora').value;
    var anoPublicacao = document.getElementById('anoPublicacao').value;

    //elementos opcionais
    var tema = document.getElementById('tema').value;
    var doi = document.getElementById('doi').value;

    //VARIAVEIS DE CITAÇÃO NO TEXTO
    var citacaoAutores;
    var citacaoSemAutores;

    //FORMATAÇÃO DO NOME DO EVENTO
    var nomeEventoFormat;
    if (nomeEvento == "") {
        swal("Erro!", "Informe o nome do evento!", "error");
        return;
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
        swal("Erro!", "Informe o ano de realização do evento!", "error");
        return;
    } else {
        anoRealizacaoFormat = numeracaoFormat + anoRealizacao + ", ";
    }

    //FORMATAÇÃO DO LOCAL DE REALIZAÇÃO DO EVENTO
    var localRealizacaoFormat;;
    if(localRealizacao == ""){
        localRealizacaoFormat = anoRealizacaoFormat + "[<i>S. l.</i>]. ";
        
    } else {
        localRealizacaoFormat = anoRealizacaoFormat + localRealizacao + ". ";
    }

    //FORMATAÇÃO DO TÍTULO DO DOCUMENTO
    var tituloDocumentoFormat;
    if (tituloDocumento == "") {
        swal("Erro!", "Informe o título do documento!", "error");
        return;
    } else {
        tituloDocumentoFormat = localRealizacaoFormat + tituloDocumento.bold() + " [...]. ";
    }

    //FORMATAÇÃO DO LOCAL DE PUBLICAÇÃO
    var localPublicacaoFormat;;
    if(localPublicacao == ""){
        localPublicacaoFormat = tituloDocumentoFormat + "[<i>S. l.</i>]: ";
        
    } else {
        localPublicacaoFormat = tituloDocumentoFormat + localPublicacao + ": ";
    }

    //FORMATACAO DA EDITORA
    var editoraFormat;
    if(editora == ""){
        editoraFormat = localPublicacaoFormat + " [<i>s. n.</i>], ";
    } else {
        editoraFormat = localPublicacaoFormat + editora + ", ";
    }

    //CASO EDITORA E LOCAL DE PUBLICAÇÃO ESTEJAM VAZIOS
    if (localPublicacao == "" && editora == ""){
        editoraFormat = tituloDocumentoFormat + "[<i>S. l.: s. n.</i>], ";
    }

    //FORMATAÇÃO DA DATA DE PUBLICAÇÃO
    var anoPublicacaoFormat;
    if(anoPublicacao == ""){
        swal("Erro!", "Informe o ano de publicação do documento!", "error");
        return;
    } else {
        anoPublicacaoFormat = editoraFormat + anoPublicacao + ".";
        citacaoAutores = citacaoAutores + anoPublicacao + ")";
        citacaoSemAutores = citacaoSemAutores + anoPublicacao + ")";
    }

    //RESULTADO
    var result = anoPublicacaoFormat;

    //caso haja doi
    if(doi != ""){
        result = result + " DOI " + doi + ".";
    }

    //caso haja tema
    if(tema != ""){
        result = result + " Tema: " + tema + ".";
    }

    //CASO SEJA UMA PUBLICAÇÃO EM MEIO ELETRONICO
    var fonte = document.getElementById('fonte').value;
    var dia = document.getElementById('diaAcesso').value;
    var mes = document.getElementById('mesAcesso').value;
    var anoAcesso = document.getElementById('anoAcesso').value;
    var cdrom = document.getElementById('cdrom');
    var online = document.getElementById('online');
    if (cdrom.checked || online.checked) {
        if (cdrom.checked) {
            result = result + " CD-ROM."
        } else {
            if (fonte == "" || dia == "" || mes == "" || anoAcesso == "") {
                swal("Erro!", "Preencha todos os campos sobre a publicação corretamente", "error");
                return;
            } else {
                result = result + " Disponível em: " + fonte + ". Acesso em: " + dia + " " + mes + ". " + anoAcesso + "."
            }
        }
    } else if (!cdrom.checked && !online.checked) {
        swal("Erro!", "Selecione o tipo de publicação", "error");
        return;
    }

    //RESULTADO
    document.getElementById('result').innerHTML = "Referência: " + result;
    document.getElementById('citacao').innerHTML = "Citacão no texto: " + citacaoAutores + " ou " + citacaoSemAutores;

}