function artigoMateriaJornalEletronicoRef(){
    var autor1 = document.getElementById('autor1').value;
    var autor1Sobrenome = document.getElementById('autor1Sobrenome').value;
    var autor2 = document.getElementById('autor2').value;
    var autor2Sobrenome = document.getElementById('autor2Sobrenome').value;
    var autor3 = document.getElementById('autor3').value;
    var autor3Sobrenome = document.getElementById('autor3Sobrenome').value;
    var autor4 = document.getElementById('autor4').value;
    var autor4Sobrenome = document.getElementById('autor4Sobrenome').value;
    var tituloJornal = document.getElementById('titulo').value;
    var tituloArtigo = document.getElementById('tituloArtigo').value;
    var local = document.getElementById('local').value;
    var volume = document.getElementById('volume').value;
    var ano = document.getElementById('ano').value;
    var numero = document.getElementById('numero').value;
    var pagInicialFinal = document.getElementById('pagInicialFinal').value;
    var diaPublicacao = document.getElementById('diaPublicacao').value;
    var mesPublicacao = document.getElementById('mesPublicacao').value;
    var anoPublicacao = document.getElementById('anoPublicacao').value;
    var entidade = document.getElementById('entidade').value;
    var numComplemento = document.getElementById('numComplemento').value;
    var nomeComplemento = document.getElementById('nomeComplemento').value;

    //elementos opcionais
    var subtituloArtigo = document.getElementById('subtituloArtigo').value;
    var subtituloJornal = document.getElementById('subtituloJornal').value;
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

    //TIPO DE COMPLEMENTO
    var tipoComplemento = document.querySelector("#tipoComplemento").value;
    //1-Seção; 2-Caderno; 3-Parte
    var nomeTipoComplemento;
    if(tipoComplemento == 1){
        nomeTipoComplemento = "Seção";
    } else if(tipoComplemento == 2){
        nomeTipoComplemento = "Caderno";
    } else {
        nomeTipoComplemento = "Parte";
    }

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

    } else if (tipoAutor == 1 && autor1 == "" || autor1Sobrenome == "" && !semAutores.checked) {
        //alert("Autor 1 deve ser informado");
        swal("Erro!", "Autor 1 deve ser informado!", "error");
        return;
        //autoresFormt = undefined;

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
    if(tituloJornal != "" && tituloArtigo != ""){
        if (semAutores.checked) {
            //não há autores
            if(subtituloArtigo != "" && subtituloJornal == ""){
                //há subtitulo somente na parte (artigo)
                tituloFormat = tituloArtigo + ": " + subtituloArtigo + ". " + tituloJornal.bold() + ", ";
            
            } else if (subtituloArtigo == "" && subtituloJornal != ""){
                //há subtitulo somente no periodico
                tituloFormat = tituloArtigo + ". " + tituloJornal.bold() + ": " + subtituloJornal + ", ";
            
            } else if( subtituloArtigo != "" && subtituloJornal != ""){
                //há subtitulo nos dois
                tituloFormat = tituloArtigo + ": " + subtituloArtigo + ". " + tituloJornal.bold() + ": " + subtituloJornal + ", ";
            
            } else {
                //não há subtitulo
                tituloFormat = tituloArtigo + ". " + tituloJornal.bold() + ", ";
            }
        } else {
            //há autores
            if(subtituloArtigo != "" && subtituloJornal == ""){
                //há subtitulo somente na parte (artigo)
                tituloFormat = autoresFormt + ". " + tituloArtigo + ": " + subtituloArtigo + ". " + tituloJornal.bold() + ", ";
            
            } else if (subtituloArtigo == "" && subtituloJornal != ""){
                //há subtitulo somente no periodico
                tituloFormat = autoresFormt + ". " + tituloArtigo + ". " + tituloJornal.bold() + ": " + subtituloJornal + ", ";
            
            } else if( subtituloArtigo != "" && subtituloJornal != ""){
                //há subtitulo nos dois
                tituloFormat = autoresFormt + ". " + tituloArtigo + ": " + subtituloArtigo + ". " + tituloJornal.bold() + ": " + subtituloJornal + ", ";
            
            } else {
                //não há subtitulo
                tituloFormat = autoresFormt + ". " + tituloArtigo + ". " + tituloJornal.bold() + ", ";
            }
        }
    } else if(tituloJornal == "" && tituloArtigo != ""){
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

    //DATA DE PUBLICAÇÃO, COMPLEMENTO E PAGINAÇÃO
    var dataPubliFormat;
    var complementoFormat;
    var paginasFormat;
    var result;
    if(tipoComplemento != "" && numComplemento != "" && nomeComplemento != ""){
        // a paginação vai por último
        if((diaPublicacao == "" && mesPublicacao == "" && anoPublicacao == "") || (mesPublicacao == "" && anoPublicacao == "")){
            swal("Erro!", "Informe a data de publicação!", "error");
            return;

        } else if(diaPublicacao == "" && mesPublicacao == ""){
            dataPubliFormat = numeroFormat + anoPublicacao + ".";

        } else if( diaPublicacao == ""){
            dataPubliFormat = numeroFormat + mesPublicacao + ". " + anoPublicacao + ".";

        } else {
            dataPubliFormat = numeroFormat + diaPublicacao + " " + mesPublicacao + ". " + anoPublicacao + ". ";
        }

        complementoFormat = dataPubliFormat + nomeComplemento + ", " + nomeTipoComplemento + " " + numComplemento + ", ";
        //paginação
        if(pagInicialFinal == ""){
            swal("Erro!", "Informe a paginação!", "error");
            return;
        } else {
            paginasFormat = complementoFormat + "p. " + pagInicialFinal + ", ";
        }

        result = paginasFormat;
    } else if(tipoComplemento != 1 && tipoComplemento != 2 && tipoComplemento != 3 && numComplemento == "" && nomeComplemento == ""){
        //a paginação do artigo ou matéria precede a data
        //paginação
        var paginasFormat;
        if(pagInicialFinal == ""){
            swal("Erro!", "Informe a paginação!", "error");
            return;
        } else {
            paginasFormat = numeroFormat + "p. " + pagInicialFinal + ", ";
        }

        //data de publicação
        if((diaPublicacao == "" && mesPublicacao == "" && anoPublicacao == "") || (mesPublicacao == "" && anoPublicacao == "")){
            swal("Erro!", "Informe a data de publicação!", "error");
            return;

        } else if(diaPublicacao == "" && mesPublicacao == ""){
            dataPubliFormat = paginasFormat + anoPublicacao + ".";

        } else if( diaPublicacao == ""){
            dataPubliFormat = paginasFormat + mesPublicacao + ". " + anoPublicacao + ".";

        } else {
            dataPubliFormat = paginasFormat + diaPublicacao + " " + mesPublicacao + ". " + anoPublicacao + ".";
        }

        result = dataPubliFormat;
    }

    //caso haja doi
    if(doi != ""){
        result = result + " DOI " + doi + ".";
    }

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
        citacaoAutores = autor1Sobrenome + " <i>et</i> al. (" + anoPublicacao + ")";
        citacaoSemAutores = "(" + autor1Sobrenome.toUpperCase() + " <i>et</i> al., " + anoPublicacao + ")";
    
    } else if(semAutores.checked){
        //não há autores
        citacaoAutores = tituloArtigo + " (" + anoPublicacao + ")";
        citacaoSemAutores = "(" + tituloArtigo + ", " + anoPublicacao + ")";

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
        return
    }

    //RESULTADO
    document.getElementById('result').innerHTML = "Referência: " + result;
    document.getElementById('citacao').innerHTML = "Citacão no texto: " + citacaoAutores + " ou " + citacaoSemAutores;
}