function trabAcademicoEletronicoRef(){
    var autor1 = document.getElementById('autor1').value;
    var autor1Sobrenome = document.getElementById('autor1Sobrenome').value;
    var autor2 = document.getElementById('autor2').value;
    var autor2Sobrenome = document.getElementById('autor2Sobrenome').value;
    var autor3 = document.getElementById('autor3').value;
    var autor3Sobrenome = document.getElementById('autor3Sobrenome').value;
    var autor4 = document.getElementById('autor4').value;
    var autor4Sobrenome = document.getElementById('autor4Sobrenome').value;
    var titulo = document.getElementById('titulo').value;
    var anoDeposito = document.getElementById('anoDeposito').value;
    var tipoTrabalho = document.getElementById('tipoTrabalho').value;
    var grauCurso = document.getElementById('grauCurso').value;
    var vinculoAcademico = document.getElementById('vinculoAcademico').value;
    var local = document.getElementById('local').value;
    var anoDefesa = document.getElementById('anoDefesa').value;
    var entidade = document.getElementById('entidade').value;

    //elementos opcionais
    var subtitulo = document.getElementById('subtitulo').value;
    var orientador = document.getElementById('orientador').value;
    var doi = document.getElementById('doi').value;

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
    //5- Coordenador

    //VERIFICANDO SE HÁ MAIS DE 4 AUTORES
    var mais4autores = document.getElementById('mais4autores');

    //VERIFICANDO SE A OBRA NÃO POSSUI AUTORES
    var semAutores = document.getElementById('semAutores');

    //FORMATACAO DE AUTORES
    var autor1Format = autor1Sobrenome.toUpperCase() + ", " + autor1;
    var autor2Format = autor2Sobrenome.toUpperCase() + ", " + autor2;
    var autor3Format = autor3Sobrenome.toUpperCase() + ", " + autor3;
    var autor4Format = autor4Sobrenome.toUpperCase() + ", " + autor4;
    var autoresFormt;

    //VERIFICAÇÃO DA QUANTIDADE DE AUTORES
    if (tipoAutor != 1 && tipoAutor != 2 && !semAutores.checked) {
        swal("Erro!", "Informe o tipo do autor!", "error");
        return;

    } else if (responsabilidade != 1 && responsabilidade != 2 && responsabilidade != 3 && responsabilidade != 4 && responsabilidade != 5 && !semAutores.checked) {
        swal("Erro!", "Informe a responsabilidade intelectual do autor!", "error");
        return;
        //document.querySelector("#responsabilidade").focus();

    } else if (mais4autores.checked) {
        var inicialAutor1 = autor1[0];
        autoresFormt = autor1Sobrenome.toUpperCase() + ", " + inicialAutor1 + ". " + " <i>et al</i>";

    } else if (tipoAutor == 2 && entidade == "" && !semAutores.checked) {
        //alert('Nome da entidade não informado');
        swal("Erro!", "Nome da entidade não informado!", "error");
        return;

    } else if (tipoAutor == 1 && (autor1 == "" || autor1Sobrenome == "") && !semAutores.checked) {
        //alert("Autor 1 deve ser informado");
        swal("Erro!", "Autor 1 deve ser informado!", "error");
        return;
        //autoresFormt = undefined;

    } else if (tipoAutor == 2 && entidade != "" && !semAutores.checked) {
        autoresFormt = entidade;

    } else if (autor1 != "" && autor2 == "" && !semAutores.checked) {
        //existe apenas um autor
        autoresFormt = autor1Format;

    } else if (autor2 != "" && autor3 == "" && !semAutores.checked) {
        //possui dois autores
        autoresFormt = autor1Format + "; " + autor2Format;

    } else if (autor1 != "" && autor2 != "" && autor3 != "" && autor4 == "" && !semAutores.checked) {
        //possui 3 autores
        autoresFormt = autor1Format + "; " + autor2Format + "; " + autor3Format;

    } else if (autor1 != "" && autor2 != "" && autor3 != "" && autor4 != "" && !semAutores.checked) {
        //possui 4 autores
        autoresFormt = autor1Format + "; " + autor2Format + "; " + autor3Format + "; " + autor4Format;

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
    if(titulo == ""){
        //não inseriu título
        swal("Erro!", "Informe o título da obra!", "error");
        return;

    } else if (semAutores.checked) {
        //não há autores
        if(subtitulo != ""){
            tituloFormat = titulo + ": " + subtitulo + ". ";
        } else{
            tituloFormat = titulo + ". ";
        }    
    } else {
        //há autores
        if(subtitulo != ""){
            tituloFormat = autoresFormt + ". " + titulo.bold() + ": " + subtitulo + ". "; 
        } else{
            tituloFormat = autoresFormt + ". " + titulo.bold() + ". ";
        }
    }

    //Caso haja orientador
    if(orientador != ""){
        tituloFormat = tituloFormat + "Orientador: " + orientador + ". ";
    }
    
    //ANO DEPÓSITO
    var anoDepositoFormat = "";
    if(anoDeposito == ""){
        //não foi inserido o ano de depósito
        swal("Erro!", "Informe o ano de depósito!", "error");
        return;
    } else {
        anoDepositoFormat = tituloFormat + anoDeposito + ". ";
    }

    //TIPO DE TRABALHO
    var tipoTrabalhoFormat;
    if(tipoTrabalho == ""){
        //o tipo do trabalho não foi inserido
        swal("Erro!", "Informe o tipo de trabalho!", "error");
        return;
    } else {
        tipoTrabalhoFormat = anoDepositoFormat + tipoTrabalho + " (";
    }

    //GRAU E CURSO
    var grauCursoFormat;
    if(grauCurso == ""){
        //o grau e o curso não foram inseridos
        swal("Erro!", "Informe o grau e o curso!", "error");
        return;
    } else {
        grauCursoFormat = tipoTrabalhoFormat + grauCurso + ") - ";
    }

    //VINCULAÇÃO ACADÊMICA
    var vinculoAcademicoFormat;
    if(vinculoAcademico == ""){
        //o vinculo academico não foi inserido
        swal("Erro!", "Informe a vinculação acadêmica!", "error");
        return;
    } else {
        vinculoAcademicoFormat = grauCursoFormat + vinculoAcademico + ", ";
    }

    //LOCAL
    var localFormat;
    if(local == ""){
        localFormat = vinculoAcademicoFormat + "[<i>S. l.</i>], ";
        
    } else {
        localFormat = vinculoAcademicoFormat + local + ", ";
    }

    //ANO DE DEFESA
    var anoFormat;
    if(anoDefesa == ""){
        swal("Erro!", "Informe o ano de defesa/apresentação!", "error");
        return;
    } else {
        anoFormat = localFormat + anoDefesa + ".";
    }

    var result = anoFormat;

    //caso haja doi
    if(doi != ""){
        result = result + " DOI " + doi + ".";
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

    //CITAÇÃO NO TEXTO
    var citacaoAutores;
    var citacaoSemAutores;
    if(tipoAutor == 2){
        //entidade
        citacaoAutores = entidade + " ("+ anoDefesa + ")";
        citacaoSemAutores = "("+ entidade.toUpperCase() + ", " + anoDefesa + ")";
    }
    if(mais4autores.checked){
        //usar a abreviação de quatro autores
        citacaoAutores = autor1Sobrenome + " <i>et al</i>. (" + anoDefesa + ")";
        citacaoSemAutores = "(" + autor1Sobrenome.toUpperCase() + " <i>et al</i>., " + anoDefesa + ")";
    
    } else if(semAutores.checked){
        //não há autores
        citacaoAutores = titulo + " (" + anoDefesa + ")";
        citacaoSemAutores = "(" + titulo + ", " + anoDefesa + ")";

    } else if(autor1Sobrenome != "" && autor2Sobrenome == "" && autor3Sobrenome == ""){
        //há somente um autor
        citacaoAutores = autor1Sobrenome + " ("+ anoDefesa + ")";
        citacaoSemAutores = "("+ autor1Sobrenome.toUpperCase() + ", " + anoDefesa + ")";

    } else if(autor1Sobrenome != "" && autor2Sobrenome != "" && autor3Sobrenome == ""){
        //há dois autores
        citacaoAutores = autor1Sobrenome + " e " + autor2Sobrenome +  " ("+ anoDefesa + ")";
        citacaoSemAutores = "("+ autor1Sobrenome.toUpperCase() + "; " + autor2Sobrenome.toUpperCase() + ", " + anoDefesa + ")";

    } else if(autor1Sobrenome != "" && autor2Sobrenome != "" && autor3Sobrenome != "" && autor4Sobrenome == ""){
        //há três autores
        citacaoAutores = autor1Sobrenome + ", " + autor2Sobrenome + " e " + autor3Sobrenome + " ("+ anoDefesa + ")";
        citacaoSemAutores = "("+ autor1Sobrenome.toUpperCase() + "; " + autor2Sobrenome.toUpperCase() + "; " + autor3Sobrenome.toUpperCase() + ", " + anoDefesa + ")"

    } else if(autor1Sobrenome != "" && autor2Sobrenome != "" && autor3Sobrenome != "" && autor4Sobrenome != ""){
        //há quatro autores
        citacaoAutores = autor1Sobrenome + ", " + autor2Sobrenome + " e " + autor3Sobrenome + " ("+ anoDefesa + ")";
        citacaoSemAutores = "("+ autor1Sobrenome.toUpperCase() + "; " + autor2Sobrenome.toUpperCase() + "; " + autor3Sobrenome.toUpperCase() + ", " + anoDefesa + ")"
    }


    //RESULTADO
    document.getElementById('result').innerHTML = "Referência: " + result;
    document.getElementById('citacao').innerHTML = "Citacão no texto: " + citacaoAutores + " ou " + citacaoSemAutores;
}
