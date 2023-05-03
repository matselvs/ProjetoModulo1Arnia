// 1. pega o botão que abre
var btn = document.querySelectorAll("button.modal-button");

//2. os modal
var modals = document.querySelectorAll('.modal');

// 3.pega o span que fecha o modal
var spans = document.getElementsByClassName("close");

// 4.abre o modal quando clica
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// 5. fecha o modal quando o user cluca no x
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

//6. quando o usuario clica fora do modal ele fecha
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}
//1 faz o dropdown
const dropdownBtn = document.querySelector(".fa-caret-down");
dropdownBtn.addEventListener("click", toggleDropdown);

// 2. Criar a div de dropdown
const dropdownMenu = document.createElement("div");
dropdownMenu.classList.add("dropdown-menu");

// 3. Adicionar os links como filhos da div de dropdown
const link1 = document.createElement("a");
link1.href = "#";
link1.textContent = "Editar";
dropdownMenu.appendChild(link1);

const link2 = document.createElement("a");
link2.href = "#";
link2.textContent = "Excluir";
dropdownMenu.appendChild(link2);

// 4. Estilizar a div de dropdown
dropdownMenu.style.position = "absolute";
dropdownMenu.style.top = "50px";
dropdownMenu.style.right = "0";
dropdownMenu.style.height = "85px";
dropdownMenu.style.width = "85px";
dropdownMenu.style.textAlign = "center";
dropdownMenu.style.backgroundColor = "#fff";
dropdownMenu.style.border = "1px solid #ccc";
dropdownMenu.style.borderRadius = "4px";
dropdownMenu.style.padding = "10px 10px";
link1.style.textDecoration = "none";
link2.style.textDecoration = "none";
link1.style.display = "block";
link2.style.display = "block";
link1.style.marginBottom = "10px";
link2.style.marginBottom = "15px";
link1.style.color = "blue";
link2.style.color = "red";

// 5. Adicionar evento de clique para fechar o dropdown
document.addEventListener("click", (e) => {
  if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.style.display = "none";
  }
});

function toggleDropdown() {
  dropdownMenu.style.display = dropdownMenu.style.display === "none" ? "block" : "none";
  document.body.appendChild(dropdownMenu);
}

/*///////////////////////////////////////////////////////////////////////////////////////////////////////*/
// o botão de ver mais e ver menos
function myFunction() {
   var dots = document.getElementById("dots");
   var moreText = document.getElementById("more");
   var btnText = document.getElementById("myBtn");
 
   if (dots.style.display === "none") {
     dots.style.display = "inline";
     btnText.innerHTML = "Ver mais";
     moreText.style.display = "none";
   } else {
     dots.style.display = "none";
     btnText.innerHTML = "Ver menos";
     moreText.style.display = "inline";
   }
 }
 ///////////////////////////////////////////////////////////////////////////////////

 // faz uma solicitação HTTP GET para o servidor JSON para obter os detalhes do usuário atualmente conectado
fetch('https://renderapiprojetomodulo1.onrender.com/users/1')
.then(response => response.json())
.then(data => {
  // substitui o "@Daniel" pelo nome de usuário retornado pelo servidor JSON
  const welcomeMessage = document.querySelector('.header-right p');
  welcomeMessage.innerHTML = `Bem vindo, <b>${data.name}</b> `;
})
.catch(error => console.error(error));
