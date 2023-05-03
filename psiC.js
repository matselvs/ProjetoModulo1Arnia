document.addEventListener("DOMContentLoaded", () => {
  const form1 = document.getElementById("form1");
  const senhaForm = document.getElementById("senhaFormulario");

  form1.addEventListener('submit', (event) => {
    event.preventDefault();
    form1.style.display = "none";
    senhaForm.style.display = "block";
  });

  const form2 = document.getElementById('form2');

  form2.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    fetch('https://renderapiprojetomodulo1.onrender.com/users?email=' + email.value)
      .then(response => response.json())
      .then(users => {
        if (users.length > 0) {
          alert('Usuário já existe');
          return;
        }
        fetch('https://renderapiprojetomodulo1.onrender.com/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: name.value, email: email.value, password: password.value })
        })
        .then(response => response.json())
        .then(() => {
          alert('Usuário cadastrado com sucesso!');
          
        })
        .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  });
});
