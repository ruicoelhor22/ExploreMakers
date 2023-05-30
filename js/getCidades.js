const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('id')); //Vai ao url buscar o id da cidade

let cidades = JSON.parse(localStorage.getItem("cidades"));

const cidade = cidades[id]; //Vai buscar a cidade que está na posiçao correspondente ao ID
console.log(cidade);
document.getElementById('imagem1').src = cidade.imagem1; //Coloca no src da imagem o link que esta no json
document.getElementById('nome').innerText = cidade.nome; 
document.getElementById('nome1').innerText = cidade.nome1;
document.getElementById('descricao').innerText = atividade.descricao;
document.getElementById('imagem2').src = cidade.imagem2;
/*
let prog = cidade.programa;
console.log(prog)
console.log(prog.length)
for (let i = 0; i < prog.length; i++) {
    console.log(prog[i])
    document.getElementById('programa').innerHTML += prog[i] + '<br>'
}
document.getElementById('inclui').innerText = atividade.inclui;
document.getElementById('trazer').innerText = atividade.trazer;
document.getElementById('preco').innerText = atividade.preco;
document.getElementById('extra').innerText = atividade.extra;
*/ 