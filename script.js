const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const botao = document.querySelector('.botao');

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
