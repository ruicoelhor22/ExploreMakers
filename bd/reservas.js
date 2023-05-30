let reservas = [{
    "day": "30", 
    "month": "5", 
    "year": "2023", 
    "events": [{
        "id": "0",
        "emailvis" : "ruicoelhor22@gmail.com",
        "cidade": "Porto",
        //"idguia": "g1",
        "nome": "tuk1h",
        "tipo": "tuk-tuk",
        "horainicio" : "15:00",
        "horafim" : "16:00",
        //"duracao": "1h",
        "preco": "60",
        "imagem" : "img/porto.jpg",

    }]
    
},

{
    "day": "31", 
    "month": "5", 
    "year": "2023", 
    "events": [{
        "id": "0",
        "emailvis" : "ruicoelhor22@gmail.com",
        "cidade": "Porto",
        //"idguia": "g1",
        "nome": "tuk1h",
        "tipo": "a pé",
        "horainicio" : "03:00PM",
        "horafim" : "16:00",
        //"duracao": "1h",
        "preco": "60",
        "imagem" : "img/lisboa.jpg"

}]


}]

localStorage.setItem("reservas", JSON.stringify(reservas));
