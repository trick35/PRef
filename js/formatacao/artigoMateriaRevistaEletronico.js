function artigoMateriaRevistaEletronicoRef() {
    var autor1 = document.getElementById('autor1').value;
    var autor1Sobrenome = document.getElementById('autor1Sobrenome').value;
    var autor2 = document.getElementById('autor2').value;
    var autor2Sobrenome = document.getElementById('autor2Sobrenome').value;
    var autor3 = document.getElementById('autor3').value;
    var autor3Sobrenome = document.getElementById('autor3Sobrenome').value;
    var titulo = document.getElementById('titulo').value;
    var tituloParte = document.getElementById('tituloParte').value;
    var local = document.getElementById('local').value;
    var volume = document.getElementById('volume').value;
    var ano = document.getElementById('ano').value;
    var fasciculo = document.getElementById('fasciculo').value;
    var pagInicialFinal = document.getElementById('pagInicialFinal').value;
    var diaPublicacao = document.getElementById('diaPublicacao').value;
    var mesPublicacao = document.getElementById('mesPublicacao').value;
    var anoPublicacao = document.getElementById('anoPublicacao').value;
    var entidade = document.getElementById('entidade').value;

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

    //VERIFICANDO SE HÁ MAIS DE 3 AUTORES
    var mais3autores = document.getElementById('mais3autores');

    //VERIFICANDO SE A OBRA NÃO POSSUI AUTORES
    var semAutores = document.getElementById('semAutores');

    //FORMATACAO DE AUTORES
    var autor1Format = autor1Sobrenome.toUpperCase() + ", " + autor1;
    var autor2Format = autor2Sobrenome.toUpperCase() + ", " + autor2;
    var autor3Format = autor3Sobrenome.toUpperCase() + ", " + autor3;
    var autoresFormt;

    //VERIFICAÇÃO DA QUANTIDADE DE AUTORES
    if (tipoAutor != 1 && tipoAutor != 2 && !semAutores.checked) {
        alert('Informe o tipo do autor');

    } else if (responsabilidade != 1 && responsabilidade != 2 && responsabilidade != 3 && responsabilidade != 4 && !semAutores.checked) {
        alert('Informe a responsabilidade intelectual do autor');

    } else if (mais3autores.checked) {
        var inicialAutor1 = autor1[0];
        autoresFormt = autor1Sobrenome.toUpperCase() + ", " + inicialAutor1 + ". " + " et al";

    } else if (tipoAutor == 1 && autor1 == "" && autor1Sobrenome == "" && !semAutores.checked) {
        alert("Autor 1 deve ser informado");
        autoresFormt = undefined;

    } else if (tipoAutor == 2 && entidade == "" && !semAutores.checked) {
        alert('Nome da entidade não informado');

    } else if (tipoAutor == 2 && entidade != "" && !semAutores.checked) {
        autoresFormt = entidade;

    } else if (autor1 != "" && autor2 == "" && !semAutores.checked) {
        //existe apenas um autor
        autoresFormt = autor1Format;

    } else if (autor2 != "" && autor3 == "" && !semAutores.checked) {
        //possui dois autores
        autoresFormt = autor1Format + "; " + autor2Format;

    } else if (autor1 != "" && autor2 != "" && autor3 != "" && !semAutores.checked) {
        //possui 3 autores
        autoresFormt = autor1Format + "; " + autor2Format + "; " + autor3Format;

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
    if(titulo != "" && tituloParte != ""){
        if (semAutores.checked) {
            //não há autores
            tituloFormat = tituloParte + ". " + titulo.bold() + ", ";
        } else {
            //há autores
            tituloFormat = autoresFormt + ". " + tituloParte + ". " + titulo.bold() + ", ";
        }
    } else if(titulo == "" && tituloParte != ""){
        alert('Informe o título da publicação')
    } else {
        alert('Nenhum título foi informado')
    }
    

    //LOCAL
    var localFormat = tituloFormat + local + ", ";

    //ANO e VOLUME
    var anoVolume;
    if (ano != "" && volume == "") {
        //ha somente ano
        anoVolume = "ano " + ano;
    } else if (volume != "" && ano == "") {
        //há somente volume
        anoVolume = "v. " + volume;
    } else {
        //há ano e volume
        anoVolume = "ano " + ano + ", v. " + volume + ", ";
    }
    var anoVolumeFormat = localFormat + anoVolume;

    //FASCÍCULO
    var fasciculoFormat;
    if (fasciculo == "") {
        alert('Informe o fasciculo')
    } else {
        fasciculoFormat = anoVolumeFormat + ", n " + fasciculo + ", ";
    }

    var paginasFormat;
    //PAGINAÇÃO
    if (pagInicialFinal == "") {
        paginasFormat = fasciculoFormat;
    } else {
        paginasFormat = fasciculoFormat + "p. " + pagInicialFinal + ", ";
    }

    //DATA DE PUBLICAÇÃO
    var dataPubliFormat;
    if ((diaPublicacao == "" && mesPublicacao == "" && anoPublicacao == "") || (mesPublicacao == "" && anoPublicacao == "")) {
        alert('Informe a data de publicação');
        autoresFormt = undefined;
    } else if (diaPublicacao == "" && mesPublicacao == "") {
        dataPubliFormat = paginasFormat + anoPublicacao + ".";
    } else if (diaPublicacao == "") {
        dataPubliFormat = paginasFormat + mesPublicacao + ". " + anoPublicacao + ".";
    }
    else {
        dataPubliFormat = paginasFormat + diaPublicacao + " " + mesPublicacao + ". " + anoPublicacao + ".";
    }

    //CITAÇÃO NO TEXTO
    var citacaoAutores;
    var citacaoSemAutores;
    if (tipoAutor == 2) {
        //entidade
        citacaoAutores = entidade + " (" + anoPublicacao + ")";
        citacaoSemAutores = "(" + entidade.toUpperCase() + ", " + anoPublicacao + ")";
    }
    if (mais3autores.checked) {
        //usar a abreviação de tres autores
        citacaoAutores = autor1Sobrenome + " <i>et</i> al. (" + anoPublicacao + ")";
        citacaoSemAutores = "(" + autor1Sobrenome.toUpperCase() + " <i>et</i> al., " + anoPublicacao + ")";

    } else if (semAutores.checked) {
        //não há autores
        citacaoAutores = titulo + " (" + anoPublicacao + ")";
        citacaoSemAutores = "(" + titulo + ", " + anoPublicacao + ")";

    } else if (autor1Sobrenome != "" && autor2Sobrenome == "" && autor3Sobrenome == "") {
        //há somente um autor
        citacaoAutores = autor1Sobrenome + " (" + anoPublicacao + ")";
        citacaoSemAutores = "(" + autor1Sobrenome.toUpperCase() + ", " + anoPublicacao + ")";

    } else if (autor1Sobrenome != "" && autor2Sobrenome != "" && autor3Sobrenome == "") {
        //há dois autores
        citacaoAutores = autor1Sobrenome + " e " + autor2Sobrenome + " (" + anoPublicacao + ")";
        citacaoSemAutores = "(" + autor1Sobrenome.toUpperCase() + "; " + autor2Sobrenome.toUpperCase() + ", " + anoPublicacao + ")";

    } else if (autor1Sobrenome != "" && autor2Sobrenome != "" && autor3Sobrenome != "") {
        //há três autores
        citacaoAutores = autor1Sobrenome + ", " + autor2Sobrenome + " e " + autor3Sobrenome + " (" + anoPublicacao + ")";
        citacaoSemAutores = "(" + autor1Sobrenome.toUpperCase() + "; " + autor2Sobrenome.toUpperCase() + "; " + autor3Sobrenome.toUpperCase() + ", " + anoPublicacao + ")"
    }

    //CASO SEJA UMA PUBLICAÇÃO EM MEIO ELETRONICO
    var fonte = document.getElementById('fonte').value;
    var diaAcesso = document.getElementById('diaAcesso').value;
    var mesAcesso = document.getElementById('mesAcesso').value;
    var anoAcesso = document.getElementById('anoAcesso').value;
    var cdrom = document.getElementById('cdrom');
    var online = document.getElementById('online');
    var resultParcial;
    if (cdrom.checked || online.checked) {
        if (cdrom.checked) {
            resultParcial = dataPubliFormat + " CD-ROM."
        } else {
            if (fonte == "" || diaAcesso == "" || mesAcesso == "" || anoAcesso == "") {
                alert('Preencha todos os campos corretamente')
                autoresFormt = undefined;
            } else {
                resultParcial = dataPubliFormat + " Disponível em: " + fonte + ". Acesso em: " + diaAcesso + " " + mesAcesso + ". " + anoAcesso + "."
            }
        }
    } else {
        alert('Informe o meio eletrônico de publicação')
    }

    //RESULTADO
    var result = resultParcial;
    if (autoresFormt == undefined && !semAutores.checked)
        alert('Ocorreu um erro! Certifique-se que todos os campos foram preenchidos corretamente');
    else {
        document.getElementById('result').innerHTML = "Referência: " + result;
        document.getElementById('citacao').innerHTML = "Citacão no texto: " + citacaoAutores + " ou " + citacaoSemAutores;
    }
}