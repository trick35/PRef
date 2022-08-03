function formata(){
    //pegar os dados do formulário
    var autor1 = document.getElementById("autor1").value;
    var autor1Sobrenome = document.getElementById("autor1Sobrenome").value.toUpperCase();
    var autor2 = document.getElementById("autor2").value;
    var autor2Sobrenome = document.getElementById("autor2Sobrenome").value.toUpperCase();
    var autor3 = document.getElementById("autor3").value;
    var autor3Sobrenome = document.getElementById("autor3Sobrenome").value.toUpperCase()
    var titulo = document.getElementById("titulo").value.bold();
    var edicao = document.getElementById("edicao").value;
    var local = document.getElementById("local").value;
    var editora = document.getElementById("editora").value;
    var dataPub = document.getElementById("dataPublicacao").value;

    var dataPublicacao = new Date(dataPub);
    var anoPub = dataPublicacao.getFullYear();

    //formatar as informações
    
    //formatação dos autores
    //AUTOR 1:
    var inicial1Autor1 = autor1[0].toUpperCase();
    var forAutor1 = autor1Sobrenome + ", " + inicial1Autor1;

    //AUTOR 2:
    if(autor2 != ""){
        var inicial1Autor2 = autor2[0].toUpperCase();
        var forAutor2 = "; " + autor2Sobrenome + ", " + inicial1Autor2;
    }

    //AUTOR 3:
    if(autor3 != ""){
        var inicial1Autor3 = autor3[0].toUpperCase();
        var forAutor3 = "; " + autor3Sobrenome + ", " + inicial1Autor3;
    }

    //EDIÇÃO:
    var forEdicao = ". " + edicao + ". ed. ";

    //LOCAL:
    var forLocal = local + ": ";

    //EDITORA
    editora = editora + ", "
    
    if(autor2 == "" && autor3 == ""){
        var formata = forAutor1 + ". " + titulo + forEdicao + forLocal + editora + anoPub;
    } else if(autor2 != "" && autor3 == ""){
        var formata = forAutor1 + forAutor2 + ". " + titulo + forEdicao + forLocal + editora;
    } else if (autor2 != "" && autor3 != ""){
        var formata = forAutor1 + forAutor2 + forAutor3 + ". " + titulo + forEdicao + forLocal + editora;
    }
    
    document.write(formata);
}