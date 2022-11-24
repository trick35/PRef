function eventoPeriodicoRef() {
    var nomeEvento = document.getElementById('nomeEvento').value;
    var numeracao = document.getElementById('numeracao').value;
    var anoRealizacao = document.getElementById('anoRealizacao').value;
    var localRealizacao = document.getElementById('localRealizacao').value;
    var tituloDocumento = document.getElementById('tituloDocumento').value;

    var tituloPeriodico = document.getElementById('tituloPeriodico').value;
    var localPublicacao = document.getElementById('localPublicacao').value;
    var editora = document.getElementById('editora').value;
    var volume = document.getElementById('volume').value;
    var ano = document.getElementById('ano').value;
    var numero = document.getElementById('numero').value;
    var diaPublicacao = document.getElementById('diaPublicacao').value;
    var mesPublicacao = document.getElementById('mesPublicacao').value;
    var anoPublicacao = document.getElementById('anoPublicacao').value;
    var nota = document.getElementById('nota').value;

    //elementos opcionais
    var tema = document.getElementById('tema').value;

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
    if (localRealizacao == "") {
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
        tituloDocumentoFormat = localRealizacaoFormat + tituloDocumento + ". ";
    }

    //FORMATAÇÃO DO TÍTULO DO PERIÓDICO
    var tituloPeriodicoFormat;
    if (tituloPeriodico == "") {
        swal("Erro!", "Informe o título do periodico!", "error");
        return;
    } else {
        tituloPeriodicoFormat = tituloDocumentoFormat + tituloPeriodico.bold() + ". ";
    }

    //LOCAL
    var localPublicacaoFormat;
    if (localPublicacao == "") {
        localPublicacaoFormat = tituloPeriodicoFormat + "[<i>S. l.</i>]: ";

    } else {
        localPublicacaoFormat = tituloPeriodicoFormat + localPublicacao + ": ";
    }

    //EDITORA
    var editoraFormat;
    if(editora == ""){
        editoraFormat = localPublicacaoFormat + " [<i>s. n.</i>]: ";
    } else {
        editoraFormat = localPublicacaoFormat + editora + ", ";
    }

    //CASO EDITORA E LOCAL DE PUBLICAÇÃO ESTEJAM VAZIOS
    if (localPublicacao == "" && editora == ""){
        editoraFormat = tituloPeriodicoFormat + "[<i>S. l.: s. n.</i>], ";
    }

    //ANO e VOLUME
    var anoVolume;
    if (ano != "" && volume == "") {
        //ha somente ano
        anoVolume = "ano " + ano;
    } else if (volume != "" && ano == "") {
        //há somente volume
        anoVolume = "v. " + volume;
    } else if (ano != "" && volume != "") {
        //há ano e volume
        anoVolume = "ano " + ano + ", v. " + volume;
    } else {
        swal("Erro!", "Informe o ano ou o volume!", "error")
        return;
    }
    var anoVolumeFormat = editoraFormat + anoVolume;

    //NÚMERO
    var numeroFormat;
    if (numero == "") {
        swal("Erro!", "Informe o número!", "error");
        return;
    } else {
        numeroFormat = anoVolumeFormat + ", n. " + numero + ", ";
    }

    //DATA DE PUBLICAÇÃO
    var dataPubliFormat;
    if ((diaPublicacao == "" && mesPublicacao == "" && anoPublicacao == "") || (mesPublicacao == "" && anoPublicacao == "")) {
        swal("Erro!", "Informe a data de publicação!", "error");
        return;
    } else if (diaPublicacao == "" && mesPublicacao == "") {
        dataPubliFormat = numeroFormat + anoPublicacao + ".";
    } else if (diaPublicacao == "") {
        dataPubliFormat = numeroFormat + mesPublicacao + ". " + anoPublicacao + ".";
    }
    else {
        dataPubliFormat = numeroFormat + diaPublicacao + " " + mesPublicacao + ". " + anoPublicacao + ".";
    }

    //NOTA E RESULTADO
    if(nota == ""){
        result = dataPubliFormat;
    } else {
        result = dataPubliFormat + " " + nota + ".";
    }

    //caso haja tema
    if(tema != ""){
        result = result + " Tema: " + tema;
    }

    //CITAÇÃO NO TEXTO
    citacaoAutores = citacaoAutores + anoPublicacao + ")";
    citacaoSemAutores = citacaoSemAutores + anoPublicacao + ")";

    //RESULTADO
    document.getElementById('result').innerHTML = "Referência: " + result;
    document.getElementById('citacao').innerHTML = "Citacão no texto: " + citacaoAutores + " ou " + citacaoSemAutores;

}