// faz uma solicitação HTTP GET para o servidor JSON para obter os detalhes do usuário atualmente conectado
fetch('https://renderapiprojetomodulo1.onrender.com/users/1')
  .then(response => response.json())
  .then(data => {
    // substitui o "@Daniel" pelo nome de usuário retornado pelo servidor JSON
    const welcomeMessage = document.querySelector('.header-right p');
    welcomeMessage.innerHTML = `Bem vindo, <b>${data.name}</b> `;
  })
  .catch(error => console.error(error));
