let listaGuias = [{
    "id": "0",
    "nome": "Tânia Ferreira",
    "linguagens": "Português, Inglês",
    "imagem": "img/guia1.jpg",
},

{
    "id": "1",
    "nome": "Artur Pereira",
    "linguagens": "Alemão, Inglês,",
    "imagem": "img/guia2.jpg",
},

{
    "id": "2",
    "nome": "Carolina Silva",
    "linguagens": "Português, Inglês, Francês",
    "imagem": "img/guia3.jpg",
},

{
    "id": "3",
    "nome": "João Borges",
    "linguagens": "Espanhol, Português, Francês",
    "imagem": "img/guia4.jpg",
},



]

localStorage.setItem("guias", JSON.stringify(listaGuias));
