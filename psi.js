// Adiciona um evento submit ao formulário de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Obtém os valores dos campos de email e senha
    var email = document.getElementsByName("uemail")[0].value;
    var password = document.getElementsByName("psw")[0].value;

    // Verifica se o email e a senha estão corretos
    isValidUser(email, password)
        .then(function(user) {
            // Redireciona para a página psiMB.html
            window.location.href = "psiMB.html";
        })
        .catch(function(error) {
            // Exibe uma mensagem de erro para o usuário
            alert("Email ou senha inválidos. Por favor, tente novamente.");
        });
});

// Verifica se o email e a senha correspondem a um usuário válido
function isValidUser(email, password) {
    // Cria a URL da API para buscar os dados de usuário do servidor JSON
    var apiUrl = "http://localhost:3000/users?email=" + email + "&password=" + password;

    // Faz uma solicitação de API para buscar os dados de usuário do servidor JSON
    return fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Erro ao buscar os dados de usuário da API");
            }
        })
        .then(function(data) {
            if (data.length > 0) {
                // Retorna os dados do primeiro usuário encontrado com esse email e senha
                return data[0];
            } else {
                throw new Error("Usuário não encontrado com o email e senha fornecidos");
            }
        });
}
