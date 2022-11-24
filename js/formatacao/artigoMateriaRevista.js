function artigoMateriaRevistaRef(){
    var autor1 = document.getElementById('autor1').value;
    var autor1Sobrenome = document.getElementById('autor1Sobrenome').value;
    var autor2 = document.getElementById('autor2').value;
    var autor2Sobrenome = document.getElementById('autor2Sobrenome').value;
    var autor3 = document.getElementById('autor3').value;
    var autor3Sobrenome = document.getElementById('autor3Sobrenome').value;
    var autor4 = document.getElementById('autor4').value;
    var autor4Sobrenome = document.getElementById('autor4Sobrenome').value;
    var tituloPeriodico = document.getElementById('tituloPeriodico').value;
    var tituloParte = document.getElementById('tituloParte').value;
    var local = document.getElementById('local').value;
    var volume = document.getElementById('volume').value;
    var ano = document.getElementById('ano').value;
    var numero = document.getElementById('numero').value;
    var pagInicialFinal = document.getElementById('pagInicialFinal').value;
    var diaPublicacao = document.getElementById('diaPublicacao').value;
    var mesPublicacao = document.getElementById('mesPublicacao').value;
    var anoPublicacao = document.getElementById('anoPublicacao').value;
    var entidade = document.getElementById('entidade').value;

    //elementos opcionais
    var subtituloParte = document.getElementById('subtituloArtigo').value;
    var subtituloPeriodico = document.getElementById('subtituloPeriodico').value;

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

    } else if (mais4autores.checked) {
        var inicialAutor1 = autor1[0];
        autoresFormt = autor1Sobrenome.toUpperCase() + ", " + inicialAutor1 + ". " + " <i>et al</i>";

    } else if (tipoAutor == 1 && autor1 == "" || autor1Sobrenome == "" && !semAutores.checked) {
        //alert("Autor 1 deve ser informado");
        swal("Erro!", "Autor 1 deve ser informado!", "error");
        return;

    } else if (tipoAutor == 2 && entidade == "" && !semAutores.checked) {
        //alert('Nome da entidade não informado');
        swal("Erro!", "Nome da entidade não informado!", "error");
        return;

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
    if(tituloPeriodico != "" && tituloParte != ""){
        if (semAutores.checked) {
            //não há autores
            if(subtituloParte != "" && subtituloPeriodico == ""){
                //há subtitulo somente na parte (artigo)
                tituloFormat = tituloParte + ": " + subtituloParte + ". " + tituloPeriodico.bold() + ", ";
            
            } else if (subtituloParte == "" && subtituloPeriodico != ""){
                //há subtitulo somente no periodico
                tituloFormat = tituloParte + ". " + tituloPeriodico.bold() + ": " + subtituloPeriodico + ", ";
            
            } else if( subtituloParte != "" && subtituloPeriodico != ""){
                //há subtitulo nos dois
                tituloFormat = tituloParte + ": " + subtituloParte + ". " + tituloPeriodico.bold() + ": " + subtituloPeriodico + ", ";
            
            } else {
                //não há subtitulo
                tituloFormat = tituloParte + ". " + tituloPeriodico.bold() + ", ";
            }
        } else {
            //há autores
            if(subtituloParte != "" && subtituloPeriodico == ""){
                //há subtitulo somente na parte (artigo)
                tituloFormat = autoresFormt + ". " + tituloParte + ": " + subtituloParte + ". " + tituloPeriodico.bold() + ", ";
            
            } else if (subtituloParte == "" && subtituloPeriodico != ""){
                //há subtitulo somente no periodico
                tituloFormat = autoresFormt + ". " + tituloParte + ". " + tituloPeriodico.bold() + ": " + subtituloPeriodico + ", ";
            
            } else if( subtituloParte != "" && subtituloPeriodico != ""){
                //há subtitulo nos dois
                tituloFormat = autoresFormt + ". " + tituloParte + ": " + subtituloParte + ". " + tituloPeriodico.bold() + ": " + subtituloPeriodico + ", ";
            
            } else {
                //não há subtitulo
                tituloFormat = autoresFormt + ". " + tituloParte + ". " + tituloPeriodico.bold() + ", ";
            }
        }
    } else if(tituloPeriodico == "" && tituloParte != ""){
        swal("Erro!", "Informe o título do periódico!", "error");
        return;
    } else {
        swal("Erro!", "Nenhum título foi informado!", "error");
        return;
    }
    

    //LOCAL
    var localFormat;
    if(local == ""){
        localFormat = tituloFormat + "[<i>S. l.</i>], ";
        
    } else {
        localFormat = tituloFormat + local + ", ";
    }

    //ANO e VOLUME
    var anoVolume;
    if(ano != "" && volume == ""){
        //ha somente ano
        anoVolume = "ano " + ano;
    } else if(volume != "" && ano == ""){
        //há somente volume
        anoVolume = "v. " + volume;
    } else if (ano != "" && volume != ""){
        //há ano e volume
        anoVolume = "ano " + ano + ", v. " + volume;
    } else {
        swal("Erro!", "Informe o ano ou o volume!", "error")
        return;
    }
    var anoVolumeFormat = localFormat + anoVolume;

    //NÚMERO
    var numeroFormat;
    if(numero == ""){
        swal("Erro!", "Informe o número!", "error");
        return;
    } else {
        numeroFormat = anoVolumeFormat + ", n " + numero + ", ";
    }

    var paginasFormat;
    //PAGINAÇÃO
    if(pagInicialFinal == ""){
        swal("Erro!", "Informe a paginação!", "error");
        return;
    } else {
        paginasFormat = numeroFormat + "p. " + pagInicialFinal + ", ";
    }

    //DATA DE PUBLICAÇÃO
    var dataPubliFormat;
    if((diaPublicacao == "" && mesPublicacao == "" && anoPublicacao == "") || (mesPublicacao == "" && anoPublicacao == "")){
        swal("Erro!", "Informe a data de publicação!", "error");
        return;
    } else if(diaPublicacao == "" && mesPublicacao == ""){
        dataPubliFormat = paginasFormat + anoPublicacao + ".";
    } else if( diaPublicacao == ""){
        dataPubliFormat = paginasFormat + mesPublicacao + ". " + anoPublicacao + ".";
    }
    else {
        dataPubliFormat = paginasFormat + diaPublicacao + " " + mesPublicacao + ". " + anoPublicacao + ".";
    }

    result = dataPubliFormat;

    //CITAÇÃO NO TEXTO
    var citacaoAutores;
    var citacaoSemAutores;
    if(tipoAutor == 2){
        //entidade
        citacaoAutores = entidade + " ("+ anoPublicacao + ")";
        citacaoSemAutores = "("+ entidade.toUpperCase() + ", " + anoPublicacao + ")";
    }
    if(mais4autores.checked){
        //usar a abreviação de tres autores
        citacaoAutores = autor1Sobrenome + " <i>et al</i>. (" + anoPublicacao + ")";
        citacaoSemAutores = "(" + autor1Sobrenome.toUpperCase() + " <i>et al</i>., " + anoPublicacao + ")";
    
    } else if(semAutores.checked){
        //não há autores
        citacaoAutores = tituloParte + " (" + anoPublicacao + ")";
        citacaoSemAutores = "(" + tituloParte + ", " + anoPublicacao + ")";

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
    document.getElementById('result').innerHTML = "Referência: " + result;
    document.getElementById('citacao').innerHTML = "Citacão no texto: " + citacaoAutores + " ou " + citacaoSemAutores;
}