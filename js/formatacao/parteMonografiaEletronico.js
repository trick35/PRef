function parteMonografiaEletronicoRef(){
    //REFERENCIA DA PARTE/CAPITULO
    var autor1Parte = document.getElementById('autor1Parte').value;
    var autor1SobrenomeParte = document.getElementById('autor1SobrenomeParte').value;
    var autor2Parte = document.getElementById('autor2Parte').value;
    var autor2SobrenomeParte = document.getElementById('autor2SobrenomeParte').value;
    var autor3Parte = document.getElementById('autor3Parte').value;
    var autor3SobrenomeParte = document.getElementById('autor3SobrenomeParte').value;
    var autor4Parte = document.getElementById('autor4Parte').value;
    var autor4SobrenomeParte = document.getElementById('autor4SobrenomeParte').value;
    var tituloParte = document.getElementById('tituloParte').value;
    var entidadeParte = document.getElementById('entidadeParte').value;

    //elementos opcionais
    var subtitulo = document.getElementById('subtitulo').value;
    var isbn = document.getElementById('isbn').value;
    var doi = document.getElementById('doi').value;

    //TIPO AUTOR
    var tipoAutorParte = document.querySelector("#tipoAutorParte").value;
    //1- Pessoa física
    //2- Entidade

    //RESPONSABILIDADE INTELECTUAL
    var responsabilidadeParte = document.querySelector("#responsabilidadeParte").value;
    //1- Autor
    //2- Editor
    //3- Tradutor
    //4- Organizador

    //VERIFICANDO SE HÁ MAIS DE 3 AUTORES
    var mais4autoresParte = document.getElementById('mais4autoresParte');

    //VERIFICANDO SE A OBRA NÃO POSSUI AUTORES
    var semAutoresParte = document.getElementById('semAutoresParte');

    //FORMATACAO DE AUTORES
    var autor1ParteFormat = autor1SobrenomeParte.toUpperCase() + ", " + autor1Parte;
    var autor2ParteFormat = autor2SobrenomeParte.toUpperCase() + ", " + autor2Parte;
    var autor3ParteFormat = autor3SobrenomeParte.toUpperCase() + ", " + autor3Parte;
    var autor4ParteFormat = autor4SobrenomeParte.toUpperCase() + ", " + autor4Parte;
    var autoresParteFormt;

    //autores da obra:
    var autoresFormt;

    //VERIFICAÇÃO DA QUANTIDADE DE AUTORES
    if (tipoAutorParte != 1 && tipoAutorParte != 2 && !semAutoresParte.checked) {
        swal("Erro!", "Informe o tipo do autor da parte!", "error");
        return;

    } else if (responsabilidadeParte != 1 && responsabilidadeParte != 2 && responsabilidadeParte != 3 && responsabilidadeParte != 4 && responsabilidadeParte != 5 && !semAutoresParte.checked) {
        //alert('Informe a responsabilidade intelectual do autor');
        swal("Erro!", "Informe a responsabilidade intelectual do autor da parte!", "error");
        return;

    } else if (mais4autoresParte.checked) {
        var inicialAutor1Parte = autor1Parte[0];
        autoresParteFormt = autor1SobrenomeParte.toUpperCase() + ", " + inicialAutor1Parte + ". " + " <i>et al</i>";

    } else if (tipoAutorParte == 1 && autor1Parte == "" || autor1SobrenomeParte == "" && !semAutoresParte.checked) {
        //alert("Autor 1 deve ser informado");
        swal("Erro!", "Autor 1 da parte deve ser informado!", "error");
        return;

    } else if (tipoAutorParte == 2 && entidadeParte == "" && !semAutoresParte.checked) {
        //alert('Nome da entidade não informado');
        swal("Erro!", "Nome da entidade da parte não informado!", "error");
        return;

    } else if (tipoAutorParte == 2 && entidadeParte != "" && !semAutoresParte.checked) {
        autoresParteFormt = entidadeParte;

    } else if (autor1Parte != "" && autor2Parte == "" && !semAutoresParte.checked) {
        //existe apenas um autor
        autoresParteFormt = autor1ParteFormat;

    } else if (autor2Parte != "" && autor3Parte == "" && !semAutoresParte.checked) {
        //possui dois autores
        autoresParteFormt = autor1ParteFormat + "; " + autor2ParteFormat;

    } else if (autor1Parte != "" && autor2Parte != "" && autor3Parte != "" && autor4Parte == "" && !semAutoresParte.checked) {
        //possui 3 autores
        autoresParteFormt = autor1ParteFormat + "; " + autor2ParteFormat + "; " + autor3ParteFormat;

    } else if (autor1Parte != "" && autor2Parte != "" && autor3Parte != "" && autor4Parte != "" && !semAutoresParte.checked) {
        //possui 4 autores
        autoresParteFormt = autor1ParteFormat + "; " + autor2ParteFormat + "; " + autor3ParteFormat + "; " + autor4ParteFormat;

    }

    if (tipoAutorParte == 1 && responsabilidadeParte == 1) {
        //autor
        autoresParteFormt = autoresParteFormt;
    } else if (tipoAutorParte == 1 && responsabilidadeParte == 2) {
        //editor
        autoresParteFormt = autoresParteFormt + " (Ed.)"

    } else if (tipoAutorParte == 1 && responsabilidadeParte == 3) {
        //compilador
        autoresParteFormt = autoresParteFormt + " (Comp.)"

    } else if (tipoAutorParte == 1 && responsabilidadeParte == 4) {
        //organizador
        autoresParteFormt = autoresParteFormt + " (Org.)"

    } else if (tipoAutorParte == 1 && responsabilidadeParte == 5) {
        //coordenador
        autoresParteFormt = autoresParteFormt + " (Coord.)"
    }


    //FORMATAÇÃO DO TITULO JUNTO COM OS AUTORES
    var tituloParteFormat;
    if(tituloParte != ""){
        if (semAutoresParte.checked) {
            //não há autores
            tituloParteFormat = tituloParte + ". ";
        } else {
            //há autores
            tituloParteFormat = autoresParteFormt + ". " + tituloParte + ". ";
        }
    } else {
        swal("Erro!", "Informe o título da parte!", "error");
        return;
    }
    

    var resultParte = tituloParteFormat;

    //--------------------------------------------------------------------------------------
    //REFERENCIA DOS DADOS DA NO TODO
    var autor1 = document.getElementById('autor1').value;
    var autor1Sobrenome = document.getElementById('autor1Sobrenome').value;
    var autor2 = document.getElementById('autor2').value;
    var autor2Sobrenome = document.getElementById('autor2Sobrenome').value;
    var autor3 = document.getElementById('autor3').value;
    var autor3Sobrenome = document.getElementById('autor3Sobrenome').value;
    var autor4 = document.getElementById('autor4').value;
    var autor4Sobrenome = document.getElementById('autor4Sobrenome').value;
    var titulo = document.getElementById('titulo').value;
    var edicao = document.getElementById('edicao').value;
    var local = document.getElementById('local').value;
    var editora = document.getElementById('editora').value;
    var anoPublicacao = document.getElementById('anoPublicacao').value;
    var entidade = document.getElementById('entidade').value;
    var pag = document.getElementById('pag').value;

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
    var mais4autores = document.getElementById('mais4autores');

    //VERIFICANDO SE A OBRA NÃO POSSUI AUTORES
    var semAutores = document.getElementById('semAutores');

    //FORMATACAO DE AUTORES
    var autor1Format = autor1Sobrenome.toUpperCase() + ", " + autor1;
    var autor2Format = autor2Sobrenome.toUpperCase() + ", " + autor2;
    var autor3Format = autor3Sobrenome.toUpperCase() + ", " + autor3;
    var autor4Format = autor4Sobrenome.toUpperCase() + ", " + autor4;
    //var autoresFormt;

    //VERIFICAÇÃO DA QUANTIDADE DE AUTORES
    if (tipoAutor != 1 && tipoAutor != 2 && !semAutores.checked) {
        swal("Erro!", "Informe o tipo do autor!", "error");
        return;

    } else if (responsabilidade != 1 && responsabilidade != 2 && responsabilidade != 3 && responsabilidade != 4 && responsabilidade != 5 && !semAutores.checked) {
        //alert('Informe a responsabilidade intelectual do autor');
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
    
    //EDIÇÃO
    var edicaoFormat;
    if(edicao == ""){
        edicaoFormat = tituloFormat;
    } else{
        edicaoFormat = tituloFormat + edicao + ". ed. ";
    }

    //LOCAL
    var localFormat;
    if(local == "" && edicao != ""){
        localFormat = edicaoFormat + " [<i>s. l.</i>]: ";

    } else if(local == "" && edicao == ""){
        localFormat = edicaoFormat + " [<i>S. l.</i>]: ";
        
    } else {
        localFormat = edicaoFormat + local + ": ";
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
        editoraFormat = edicaoFormat + "[<i>S. l.: s. n.</i>], ";
    }

    //ANO
    var anoFormat;
    if(anoPublicacao == ""){
        swal("Erro!", "Informe o ano!", "error");
        return;
    } else {
        anoFormat = editoraFormat + anoPublicacao + ".";
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
        //usar a abreviação de quatro autores
        citacaoAutores = autor1Sobrenome + " <i>et</i> al. (" + anoPublicacao + ")";
        citacaoSemAutores = "(" + autor1Sobrenome.toUpperCase() + " <i>et al</i>., " + anoPublicacao + ")";
    
    } else if(semAutores.checked){
        //não há autores
        citacaoAutores = titulo + " (" + anoPublicacao + ")";
        citacaoSemAutores = "(" + titulo + ", " + anoPublicacao + ")";

    } else if(autor1Sobrenome != "" && autor2Sobrenome == "" && autor3Sobrenome == ""){
        //há somente um autor
        citacaoAutores = autor1Sobrenome + " ("+ anoPublicacao + ")";
        citacaoSemAutores = "("+ autor1Sobrenome.toUpperCase() + ", " + anoPublicacao + ")";

    } else if(autor1Sobrenome != "" && autor2Sobrenome != "" && autor3Sobrenome == ""){
        //há dois autores
        citacaoAutores = autor1Sobrenome + " e " + autor2Sobrenome +  " ("+ anoPublicacao + ")";
        citacaoSemAutores = "("+ autor1Sobrenome.toUpperCase() + "; " + autor2Sobrenome.toUpperCase() + ", " + anoPublicacao + ")";

    } else if(autor1Sobrenome != "" && autor2Sobrenome != "" && autor3Sobrenome != "" && autor4Sobrenome == ""){
        //há três autores
        citacaoAutores = autor1Sobrenome + ", " + autor2Sobrenome + " e " + autor3Sobrenome + " ("+ anoPublicacao + ")";
        citacaoSemAutores = "("+ autor1Sobrenome.toUpperCase() + "; " + autor2Sobrenome.toUpperCase() + "; " + autor3Sobrenome.toUpperCase() + ", " + anoPublicacao + ")"

    } else if(autor1Sobrenome != "" && autor2Sobrenome != "" && autor3Sobrenome != "" && autor4Sobrenome != ""){
        //há quatro autores
        citacaoAutores = autor1Sobrenome + ", " + autor2Sobrenome + " e " + autor3Sobrenome + " ("+ anoPublicacao + ")";
        citacaoSemAutores = "("+ autor1Sobrenome.toUpperCase() + "; " + autor2Sobrenome.toUpperCase() + "; " + autor3Sobrenome.toUpperCase() + ", " + anoPublicacao + ")"
    }

    var result = anoFormat;

    //caso haja isbn
    if(isbn != ""){
        result = result + " ISBN " + isbn + "."; 
    }

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
    //RESULTADO
    result = resultParte + "In: " + result;

    document.getElementById('result').innerHTML = "Referência: " + result;
    document.getElementById('citacao').innerHTML = "Citacão no texto: " + citacaoAutores + " ou " + citacaoSemAutores;
}