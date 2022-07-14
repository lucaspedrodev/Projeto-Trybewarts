const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const botao = document.querySelector('.botao');
const check = document.querySelector('#agreement');
document.querySelector('#submit-btn').disabled = true;

function validacao() {
  const valor1 = email.value;
  const valor2 = senha.value;

  if (valor1 === 'tryber@teste.com' && valor2 === '123456') {
    console.log(alert('Olá, Tryber!'));
  } else {
    console.log(alert('Email ou senha inválidos.'));
  }
}
botao.addEventListener('click', validacao);

function ativarBotao() {
  const conteudo = check.value;
  if (conteudo !== null && conteudo !== '') {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
}

document.getElementById('agreement').addEventListener('input', ativarBotao);
