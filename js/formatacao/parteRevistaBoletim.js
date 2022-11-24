function parteRevistaBoletimRef(){
    var titulo = document.getElementById('titulo').value;
    var local = document.getElementById('local').value;
    var editora = document.getElementById('editora').value;
    var ano = document.getElementById('ano').value;
    var volume = document.getElementById('volume').value;
    var fasciculo = document.getElementById('fasciculo').value;
    var diaPublicacao = document.getElementById('diaPublicacao').value;
    var mesPublicacao = document.getElementById('mesPublicacao').value;
    var anoPublicacao = document.getElementById('anoPublicacao').value;

    //elementos opcionais
    var subtitulo = document.getElementById('subtitulo').value;
    var parte = document.getElementById('parte').value;

    //TITULO
    var tituloFormat;
    if(titulo == ""){
        swal("Erro!", "Informe o titulo!", "error");
        return;
    } else {
        if(subtitulo != ""){
            //há um subtitulo
            tituloFormat = titulo + ": " + subtitulo + ". ";
        } else {
            //não há subtitulo
            tituloFormat = titulo + ". ";
        }
    }

    //formatacão do local
    var localFormat;
    if(local == ""){
        localFormat = tituloFormat + "[<i>S. l.</i>]: ";
    } else {
        localFormat = tituloFormat + local + ": ";
    }

    //EDITORA
    var editoraFormat;
    if(editora == ""){
        editoraFormat = localFormat + " [<i>s. n.</i>], ";
    } else {
        editoraFormat = localFormat + editora + ", ";
    }

    //CASO EDITORA E LOCAL ESTEJAM VAZIOS
    if (local == "" && editora == ""){
        editoraFormat = tituloFormat + "[<i>S. l.: s. n.</i>], ";
        localFormat = "";
    }

    //ANO E VOLUME
    var anoVolume;
    if (volume == "" && ano != ""){
        //há ano
        if(parte != ""){
            //há parte
            anoVolume = editoraFormat + "ano " + ano + ", pt. " + parte + ", ";
        } else {
            anoVolume = editoraFormat + "ano " + ano + ", ";
        }
        
    } else if (ano == "" && volume != ""){
        //há volume
        if(parte != ""){
            //há parte
            anoVolume = editoraFormat + "v. " + volume + ", pt. " + parte + ", ";
        } else {
            anoVolume = editoraFormat + "v. " + volume + ", ";
        }
        
    } else if(ano != "" && volume != ""){
        //há ano e volume
        if(parte != ""){
            anoVolume = editoraFormat + "ano " + ano + ", " + "v. " + volume + ", pt. " + parte + ", ";
        } else{
            anoVolume = editoraFormat + "ano " + ano + ", " + "v. " + volume + ", ";
        }
        
    }

    //FASCICULO
    if(fasciculo == ""){
        swal("Erro!", "Informe o fascículo", "error")
        return;
    } else {
        var fasciculoFormat = anoVolume + "n. " + fasciculo + ", ";
    }

    //DATA DE PUBLICAÇÃO
    var dataPubliFormat;
    if((diaPublicacao == "" && mesPublicacao == "" && anoPublicacao == "") || (mesPublicacao == "" && anoPublicacao == "")){
        swal("Erro!", "Informe a data de publicação", "error")
        return;
    } else if(diaPublicacao == "" && mesPublicacao == ""){
        dataPubliFormat = fasciculoFormat + anoPublicacao + ".";
    } else if( diaPublicacao == ""){
        dataPubliFormat = fasciculoFormat + mesPublicacao + ". " + anoPublicacao + ".";
    }
    else {
        dataPubliFormat = fasciculoFormat + diaPublicacao + " " + mesPublicacao + ". " + anoPublicacao + ".";
    }

    //CITAÇÃO NO TEXTO
    var citacaoAutores = titulo + " (" + anoPublicacao + ")";
    var citacaoSemAutores = "(" + titulo.toUpperCase() + ", " + anoPublicacao + ")";

    //RESULTADO
    var result = dataPubliFormat;

    document.getElementById('result').innerHTML = "Referência: " + result;
    document.getElementById('citacao').innerHTML = "Citacão no texto: " + citacaoAutores + " ou " + citacaoSemAutores;

}