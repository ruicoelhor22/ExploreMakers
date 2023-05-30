let listaGuias = [{
    "id": "0",
    "nome": "Guia1",
    "linguagens": "Portugues, Ingles, Frances",
    "imagem": "img/guide1",
},

{
    "id": "1",
    "nome": "Guia2",
    "linguagens": "Portugues, Ingles, Frances",
    "imagem": "img/guide2",
},

{
    "id": "2",
    "nome": "Guia3",
    "linguagens": "Portugues, Ingles, Frances",
    "imagem": "img/guide3",
},

{
    "id": "3",
    "nome": "Guia4",
    "linguagens": "Portugues, Ingles, Frances",
    "imagem": "img/guide4",
},



]

localStorage.setItem("guias", JSON.stringify(listaGuias));
