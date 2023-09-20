const botao = document.querySelector('button');
const divConteudo = document.querySelector('.conteudo')

botao.addEventListener('click', function(botao){
    divConteudo.classList.toggle('oculta');
})