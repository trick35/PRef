function publicacaoPeriodicaRef(){
    var titulo = document.getElementById('titulo').value;
    var local = document.getElementById('local').value;
    var editora = document.getElementById('editora').value;
    var diaInicio = document.getElementById('diaInicio').value;
    var mesInicio = document.getElementById('mesInicio').value;
    var anoInicio = document.getElementById('anoInicio').value;
    var diaEncerramento = document.getElementById('diaEncerramento').value;
    var mesEncerramento = document.getElementById('mesEncerramento').value;
    var anoEncerramento = document.getElementById('anoEncerramento').value;

    //formatação do titulo
    if(titulo == ""){
        alert('Informe o titulo');
    } else {
        var tituloFormat = titulo + ". ";
    }

    //formatacão do local
    if(local == ""){
        alert('Informe o local');
        titulo = undefined
    } else{
        var localFormat = local + ": ";
    }

    //formatação da editora
    if(editora == ""){
        alert('Informe a editora');
        titulo = undefined
    } else {
        var editoraFormat = editora + ", ";
    }

    //formatação da data de inicio
    if(anoInicio == ""){
        alert('Informe a data de início da publicação');
        titulo = undefined
    } else {
        var anoInicioFormat = anoInicio + "-";
    }

    //formatação da data de encerramento caso haja. Se não tiver o resultado será formatado
    if(anoEncerramento == ""){
        //não há um ao de encerramento
        var result = tituloFormat + localFormat + editoraFormat + anoInicioFormat;
    } else {
        //há um ano de encerramento
        result = tituloFormat + localFormat + editoraFormat + anoInicioFormat + anoEncerramento;
    }

    //CITAÇÃO NO TEXTO
    var citacaoAutores = titulo + " (" + anoInicio + ")";
    var citacaoSemAutores = "(" + titulo + ", " + anoInicio + ")";

    //RESULTADO
    if (titulo == undefined)
        alert('Ocorreu um erro! Certifique-se que todos os campos foram preenchidos corretamente');
    else{
        document.getElementById('result').innerHTML = "Referência: " + result;
        document.getElementById('citacao').innerHTML = "Citacão no texto: " + citacaoAutores + " ou " + citacaoSemAutores;
    }
}