const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('id')); //Vai ao url buscar o id da cidade

let avaliacoes = JSON.parse(localStorage.getItem("avaliacoes"));

const avaliacao = avaliacoes[id]; //Vai buscar a cidade que está na posiçao correspondente ao ID
console.log(avaliacao);
document.getElementById('nome').innerText = avaliacao.nome; 
document.getElementById('profissao').innerText = avaliacao.profissao;
document.getElementById('descricao').innerText = avaliacao.descricao;
document.getElementById('imagem1').src = avaliacao.imagem1;
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