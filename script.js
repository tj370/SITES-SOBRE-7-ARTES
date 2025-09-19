document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('botao-acessibilidade');
  const opcoes = document.getElementById('opcoes-acessibilidade');
  const aMais = document.getElementById('aumentar-fonte');
  const aMenos = document.getElementById('diminuir-fonte');

  botao.addEventListener('click', () => {
    const aberto = opcoes.classList.toggle('apresenta-lista');
    botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    botao.classList.toggle('rotacao-botao');
  });

  let tamanho = 1; // rem
  aMais.addEventListener('click', () => {
    tamanho = Math.min(tamanho + 0.1, 1.6);
    document.body.style.fontSize = `${tamanho}rem`;
  });
  aMenos.addEventListener('click', () => {
    tamanho = Math.max(tamanho - 0.1, 0.8);
    document.body.style.fontSize = `${tamanho}rem`;
  });
});
