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

    //VARIÁVEIS DE CITAÇÃO NO TEXTO
    var citacaoAutores;
    var citacaoSemAutores;

    //TITULO
    if(titulo == ""){
        alert('Informe o título');
        titulo = undefined;
    } else {
        var tituloFormat = titulo.toUpperCase() + ". ";
        citacaoAutores = titulo + " (";
        citacaoSemAutores = "(" + titulo.toUpperCase() + ", ";
    }

    //LOCAL
    if(local == ""){
        alert('Informe o local de publicação');
        titulo = undefined;
    } else {
        var localFormat = tituloFormat + local + ": ";
    }

    //EDITORA
    if(editora == ""){
        alert('Informe a editora');
        titulo = undefined;
    } else {
        var editoraFormat = localFormat + editora + ", ";
    }

    //ANO E VOLUME
    var anoVolume;
    if (volume == "" && ano != ""){
        //há ano
        anoVolume = editoraFormat + "ano " + ano + ", ";
    } else if (ano == "" && volume != ""){
        //há volume
        anoVolume = editoraFormat + "v. " + volume + ", ";
    } else if(ano != "" && volume != ""){
        //há ano e volume
        anoVolume = editoraFormat + "ano " + ano + ", " + "v. " + volume + ", ";
    }

    //FASCICULO
    if(fasciculo == ""){
        alert('Informe o fasciculo');
        titulo = undefined;
    } else {
        var fasciculoFormat = anoVolume + "n. " + fasciculo + ", ";
    }

    //DATA DE PUBLICAÇÃO
    var dataPubliFormat;
    if((diaPublicacao == "" && mesPublicacao == "" && anoPublicacao == "") || (mesPublicacao == "" && anoPublicacao == "")){
        alert('Informe a data de publicação');
        autoresFormt = undefined;
    } else if(diaPublicacao == "" && mesPublicacao == ""){
        dataPubliFormat = fasciculoFormat + anoPublicacao + ".";
    } else if( diaPublicacao == ""){
        dataPubliFormat = fasciculoFormat + mesPublicacao + ". " + anoPublicacao + ".";
    }
    else {
        dataPubliFormat = fasciculoFormat + diaPublicacao + " " + mesPublicacao + ". " + anoPublicacao + ".";
    }

    citacaoAutores = citacaoAutores + anoPublicacao + ")";
    citacaoSemAutores = citacaoSemAutores + anoPublicacao + ")";

    //RESULTADO
    var result = dataPubliFormat;

    if (titulo == undefined)
        alert('Ocorreu um erro! Certifique-se que todos os campos foram preenchidos corretamente');
    else{
        document.getElementById('result').innerHTML = "Referência: " + result;
        document.getElementById('citacao').innerHTML = "Citacão no texto: " + citacaoAutores + " ou " + citacaoSemAutores;
    }

}