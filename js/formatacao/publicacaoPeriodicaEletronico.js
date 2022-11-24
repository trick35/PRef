function publicacaoPeriodicaEletronicoRef(){
    var titulo = document.getElementById('titulo').value;
    var local = document.getElementById('local').value;
    var editora = document.getElementById('editora').value;
    var anoInicio = document.getElementById('anoInicio').value;
    var anoEncerramento = document.getElementById('anoEncerramento').value;
    var issn = document.getElementById('issn').value;

    //elementos opcionais
    var subtitulo = document.getElementById('subtitulo').value;
    var frequencia = document.getElementById('frequencia').value;
    var doi = document.getElementById('doi').value;

    //formatação do titulo
    var tituloFormat;
    if(titulo == ""){
        swal("Erro!", "Informe o titulo!", "error");
        return;
    } else {
        if(subtitulo != ""){
            //há um subtitulo
            tituloFormat = titulo.toUpperCase() + ": " + subtitulo + ". ";
        } else {
            //não há subtitulo
            tituloFormat = titulo.toUpperCase() + ". ";
        }
    }

    //formatacão do local
    var localFormat;
    if(local == ""){
        localFormat = "[<i>S. l.</i>]: ";
    } else {
        localFormat = local + ": ";
    }

    //formatação da editora
    var editoraFormat;
    if(editora == ""){
        editoraFormat = "[<i>s. n.</i>], ";
    } else {
        editoraFormat = editora + ", ";
    }

    //CASO EDITORA E LOCAL ESTEJAM VAZIOS
    if (local == "" && editora == ""){
        editoraFormat = "[<i>S. l.: s. n.</i>], ";
        localFormat = "";
    }

    //formatação da data de inicio
    if(anoInicio == ""){
        swal("Erro!", "Informe a data de início da publicação!", "error");
        return;
    } else {
        var anoInicioFormat = anoInicio + "-";
    }

    //formatação da data de encerramento caso haja. Se não tiver o resultado será formatado
    if(anoEncerramento == ""){
        //não há um ao de encerramento
        var resultPub = tituloFormat + localFormat + editoraFormat + anoInicioFormat + " . ";

        //verificando se há issn
        if(issn != ""){
            resultPub = resultPub + "ISSN " + issn;
        }
    } else {
        //há um ano de encerramento
        resultPub = tituloFormat + localFormat + editoraFormat + anoInicioFormat + anoEncerramento + ". ";
        //verificando se há issn
        if(issn != ""){
            resultPub = resultPub + "ISSN " + issn + ".";
        }
    }

    //caso haja doi
    if(doi != ""){
        resultPub = resultPub + " DOI " + doi + ". ";
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
            resultElet = " CD-ROM."
        } else {
            if (fonte == "" || dia == "" || mes == "" || anoAcesso == "") {
                swal("Erro!", "Preencha todos os campos sobre a publicação corretamente", "error");
                return;
            } else {
                resultElet = " Disponível em: " + fonte + ". Acesso em: " + dia + " " + mes + ". " + anoAcesso + "."
            }
        }
    } else if (!cdrom.checked && !online.checked) {
        swal("Erro!", "Selecione o tipo de publicação", "error");
        return;
    }

    var result = resultPub + resultElet;

    //caso haja frequência
    if(frequencia != ""){
        result = result + " " + frequencia + ".";
    }

    //CITAÇÃO NO TEXTO
    var citacaoAutores = titulo + " (" + anoInicio + ")";
    var citacaoSemAutores = "(" + titulo.toUpperCase() + ", " + anoInicio + ")";

    //RESULTADO
    document.getElementById('result').innerHTML = "Referência: " + result;
    document.getElementById('citacao').innerHTML = "Citacão no texto: " + citacaoAutores + " ou " + citacaoSemAutores;
}