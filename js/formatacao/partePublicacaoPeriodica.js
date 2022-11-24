function partePublicacaoPeriodicaRef(){
    var titulo = document.getElementById('titulo').value;
    var local = document.getElementById('local').value;
    var editora = document.getElementById('editora').value;
    var anoInicio = document.getElementById('anoInicio').value;
    var anoEncerramento = document.getElementById('anoEncerramento').value;
    var issn = document.getElementById('issn').value;
    var periodoConsultado = document.getElementById('periodoConsultado').value;

    //elementos opcionais
    var subtitulo = document.getElementById('subtitulo').value;

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
        var result = tituloFormat + localFormat + editoraFormat + anoInicioFormat + " . ";

        //verificando se há periodo consultado
        if(periodoConsultado == ""){
            swal("Erro!", "Informe o período consultado", "error");
            return;
        } else {
            result = result + periodoConsultado + ". ";
        }

        //verificando se há issn
        if(issn != ""){
            result = result + "ISSN " + issn;
        }
    } else {
        //há um ano de encerramento
        result = tituloFormat + localFormat + editoraFormat + anoInicioFormat + anoEncerramento + ". ";

        //verificando se há periodo consultado
        if(periodoConsultado == ""){
            swal("Erro!", "Informe o período consultado!", "error");
            return;
        } else {
            result = result + periodoConsultado + ". ";
        }

        //verificando se há issn
        if(issn != ""){
            result = result + "ISSN " + issn + ".";
        }
    }

    //CITAÇÃO NO TEXTO
    var citacaoAutores = titulo + " (" + anoInicio + ")";
    var citacaoSemAutores = "(" + titulo.toUpperCase() + ", " + anoInicio + ")";

    //RESULTADO
    document.getElementById('result').innerHTML = "Referência: " + result;
    document.getElementById('citacao').innerHTML = "Citacão no texto: " + citacaoAutores + " ou " + citacaoSemAutores;
}