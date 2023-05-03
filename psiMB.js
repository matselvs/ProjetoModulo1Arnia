// Essa função seleciona o elemento HTML que contém a classe 'modal-container'
const modal = document.querySelector('.modal-container')
const modaledit = document.querySelector('.modal-container-edit')
const modalview = document.querySelector('.modal-container-view')
// Essa função seleciona o elemento HTML que contém a tag 'tbody'
const tbody = document.querySelector('tbody')
// Essas três funções selecionam os elementos HTML com os respectivos IDs
const sCodigo = document.querySelector('#m-codigo')
const sNome = document.querySelector('#m-nome')
const sCPF = document.querySelector('#m-cpf')
const sDatadeNascimento = document.querySelector('#m-data')
const sEmail = document.querySelector('#m-email')
const sGenero = document.querySelector('#m-genero')
const sNacionalidade = document.querySelector('#m-nac')
const sNaturalidade = document.querySelector('#m-nat')
const sProfissão = document.querySelector('#m-pro')
const sEscolaridade = document.querySelector('#m-escola')
const sEstadocivil = document.querySelector('#m-relacionamento')
const sMãe = document.querySelector('#m-mae')
const sPai = document.querySelector('#m-pai')

const eCodigo = document.querySelector('#m-codigoE')
const eNome = document.querySelector('#m-nomeE')
const eCPF = document.querySelector('#m-cpfE')
const eDatadeNascimento = document.querySelector('#m-dataE')
const eEmail = document.querySelector('#m-emailE')
const eGenero = document.querySelector('#m-generoE')
const eNacionalidade = document.querySelector('#m-nacE')
const eNaturalidade = document.querySelector('#m-natE')
const eProfissão = document.querySelector('#m-proE')
const eEscolaridade = document.querySelector('#m-escolaE')
const eEstadocivil = document.querySelector('#m-relacionamentoE')
const eMãe = document.querySelector('#m-maeE')
const ePai = document.querySelector('#m-paiE')


const vCodigo = document.querySelector('#m-codigoV')
const vNome = document.querySelector('#m-nomeV')
const vCPF = document.querySelector('#m-cpfV')
const vDatadeNascimento = document.querySelector('#m-dataV')
const vEmail = document.querySelector('#m-emailV')
const vGenero = document.querySelector('#m-generoV')
const vNacionalidade = document.querySelector('#m-nacV')
const vNaturalidade = document.querySelector('#m-natV')
const vProfissão = document.querySelector('#m-proV')
const vEscolaridade = document.querySelector('#m-escolaV')
const vEstadocivil = document.querySelector('#m-relacionamentoV')
const vMãe = document.querySelector('#m-maeV')
const vPai = document.querySelector('#m-paiV')
// Essa função seleciona o botão HTML com o ID 'btnSalvar'
const btnSalvar = document.querySelector('#btnSalvar')
const btnEditar = document.querySelector('#btnEditar')
// Variáveis globais
let itens
let id

// Essa função abre o modal e permite o usuário editar ou inserir um item na tabela
function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  // Essa função fecha o modal quando o usuário clica fora do modal
  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  // Se estiver editando um item existente, preenche os campos com os dados do item
  if (edit) {
    
    sNome.value = itens[index].nome
    sCPF.value = itens[index].cpf
    sDatadeNascimento.value = itens[index].data
    sEmail.value = itens[index].email
    sGenero.value = itens[index].genero
    sNacionalidade.value = itens[index].nac
    sNaturalidade.value = itens[index].nat
    sProfissão.value = itens[index].pro
    sEscolaridade.value = itens[index].escola
    sEstadocivil.value = itens[index].relacionamento
    sMãe.value = itens[index].mae
    sPai.value = itens[index].pai
    id = index
  } else {
    // Se estiver adicionando um novo item, limpa os campos
   
    sNome.value = ''
    sCPF.value = ''
    sDatadeNascimento.value = ''
    sEmail.value = ''
    sGenero.value = ''
    sNacionalidade.value = ''
    sNaturalidade.value = ''
    sProfissão.value = ''
    sEscolaridade.value = ''
    sEstadocivil.value = ''
    sMãe.value = ''
    sPai.value = ''
  }
  
}
//
async function openModalview( index = 0) {
  modalview.classList.add('active')

  // Essa função fecha o modal quando o usuário clica fora do modal
  modalview.onclick = e => {
    if (e.target.className.indexOf('modal-container-view') !== -1) {
      modalview.classList.remove('active')
    }
  }
 const paciente = await getPacient(index)

 vNome.value = paciente.nome
 vCPF.value = paciente.cpf
 vDatadeNascimento.value = paciente.data
 vEmail.value = paciente.email
 vGenero.value = paciente.genero
 vNacionalidade.value = paciente.nac
 vNaturalidade.value = paciente.nat
 vProfissão.value = paciente.pro
 vEscolaridade.value = paciente.escola
 vEstadocivil.value = paciente.relacionamento
 vMãe.value = paciente.mae
 vPai.value = paciente.pai
}

//

// Essa função abre o modal e permite o usuário editar ou inserir um item na tabela
async function openModaledit( index = 0) {
  modaledit.classList.add('active')

  // Essa função fecha o modal quando o usuário clica fora do modal
  modaledit.onclick = e => {
    if (e.target.className.indexOf('modal-container-edit') !== -1) {
      modaledit.classList.remove('active')
    }
  }
 const paciente = await getPacient(index)
  // Se estiver editando um item existente, preenche os campos com os dados do item

  eNome.value = paciente.nome
  eCPF.value = paciente.cpf
  eDatadeNascimento.value = paciente.data
  eEmail.value = paciente.email
  eGenero.value = paciente.genero
  eNacionalidade.value = paciente.nac
  eNaturalidade.value = paciente.nat
  eProfissão.value = paciente.pro
  eEscolaridade.value = paciente.escola
  eEstadocivil.value = paciente.relacionamento
  eMãe.value = paciente.mae
  ePai.value = paciente.pai
 
  btnEditar.onclick = async e => {
    // Verifica se o nome e o CPF foram preenchidos
    if (eNome.value == '' || eCPF.value == '') {
      return
    }
  
    e.preventDefault();
  
    await editPatient(index,{
      nome: eNome.value,
      cpf: eCPF.value,
      data: eDatadeNascimento.value,
      email: eEmail.value,
      genero: eGenero.value,
      nac: eNacionalidade.value,
      nat: eNaturalidade.value,
      pro: eProfissão.value,
      escola: eEscolaridade.value,
      relacionamento: eEstadocivil.value,
      mae: eMãe.value,
      pai: ePai.value,
    });
  
      abrirpopup()
      // Fecha o modal
      modaledit.classList.remove('active');
    }
  ;
}

//
// Essa função remove um item da lista pelo índice
async function deleteItem(id) {
  await deletePatient(id)

  await loadItens()
}


// Essa função insere um novo item na tabela
function insertItem(item) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td> ${item.id}</td>
    <td> ${item.nome}</td>
    <td> ${item.cpf}</td>
    <td class="acao">
      <button onclick="openModalview(${item.id})"><img src="/logo/novo.png" alt=""></button>
    </td>
    <td class="acao">
      <button onclick="openModaledit(${item.id})"><img src="/logo/novo (1).png" alt=""></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${item.id})"><img src="/logo/novo (2).png" alt=""></button>
    </td>
  `
  tbody.appendChild(tr)
}

// Essa função é chamada quando o usuário clica no botão salvar
btnSalvar.onclick = async e => {
  // Verifica se o nome e o CPF foram preenchidos
  if (sNome.value == '' || sCPF.value == '') {
    return
  }

  e.preventDefault();

  


    // Salva as informações
    if (id !== undefined) {
      itens[id].nome = sNome.value;
      itens[id].cpf = sCPF.value;
      itens[id].data = sDatadeNascimento.value;
      itens[id].email = sEmail.value;
      itens[id].genero = sGenero.value;
      itens[id].nac = sNacionalidade.value;
      itens[id].nat = sNaturalidade.value;
      itens[id].pro = sProfissão.value;
      itens[id].escola = sEscolaridade.value;
      itens[id].relacionamento = sEstadocivil.value;
      itens[id].mae = sMãe.value;
      itens[id].pai = sPai.value;
    } else {
      await createPatient({
        nome: sNome.value,
        cpf: sCPF.value,
        data: sDatadeNascimento.value,
        email: sEmail.value,
        genero: sGenero.value,
        nac: sNacionalidade.value,
        nat: sNaturalidade.value,
        pro: sProfissão.value,
        escola: sEscolaridade.value,
        relacionamento: sEstadocivil.value,
        mae: sMãe.value,
        pai: sPai.value,
      });
    }
    abrirpopup()
    // Fecha o modal
    modal.classList.remove('active');
  }
;

async function loadItens() {
  itens = await getPacients()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('pacientes')) ?? []
const setItensBD = () => localStorage.setItem('pacientes', JSON.stringify(itens))

loadItens()
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//dropdown

// 1. Adicionar evento de clique no ícone de dropdown
const dropdownBtn = document.querySelector(".fa-caret-down");
dropdownBtn.addEventListener("click", toggleDropdown);

// 2. Criar a div de dropdown
const dropdownMenu = document.createElement("div");
dropdownMenu.classList.add("dropdown-menu");

// 3. Adicionar os links como filhos da div de dropdown
const link1 = document.createElement("a");
link1.href = "Prontuario.html";
link1.textContent = "Prontuários";
dropdownMenu.appendChild(link1);

const link2 = document.createElement("a");
link2.href = "index.html";
link2.textContent = "Sair";
dropdownMenu.appendChild(link2);

// 4. Estilizar a div de dropdown
dropdownMenu.style.position = "absolute";
dropdownMenu.style.top = "50px";
dropdownMenu.style.right = "0";
dropdownMenu.style.height = "65px"
dropdownMenu.style.backgroundColor = "#fff";
dropdownMenu.style.border = "1px solid #ccc";
dropdownMenu.style.borderRadius = "4px";
dropdownMenu.style.padding = "5px 10px";
link1.style.textDecoration = "none";
link2.style.textDecoration = "none";
link1.style.display = "block";
link2.style.display = "block";
link1.style.marginBottom = "10px";
link2.style.marginBottom = "15px";

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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//filtragem//
const filterBtn = document.querySelector('.filtro');
const searchInput = document.querySelector('.Pesquisar');

// Ao clicar no botão filtrar
filterBtn.addEventListener('click', async () => {
  // Obter os pacientes do JSON
  const pacientes = await getPacients(searchInput.value )
 

  // Limpar tabela atual
  tbody.innerHTML = '';
  pacientes.forEach((item, index) => {
    insertItem(item, index)
  })
 
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//json//
async function createPatient (pacientes){
  await fetch ('https://renderapiprojetomodulo1.onrender.com/pacientes',{
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    }, 
    body: JSON.stringify(pacientes),
  })

}
async function editPatient (id, paciente){
  await fetch ('https://renderapiprojetomodulo1.onrender.com/pacientes/'+ id,{
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    }, 
    body: JSON.stringify(paciente),
  })

}
async function getPacients(search= ''){
  const response = await fetch ('https://renderapiprojetomodulo1.onrender.com/pacientes?nome_like=' + search)
  const pacientes = await response.json()
  return pacientes
}
async function getPacient(id){
  const response = await fetch ('https://renderapiprojetomodulo1.onrender.com/pacientes/' + id)
  const paciente = await response.json()
  return paciente
}
async function deletePatient (id){
  await fetch ('https://renderapiprojetomodulo1.onrender.com/pacientes/' + id,{
    method: 'DELETE',
   
  })

}
/////////////////////////////////////////////////////////////////////////////////////////////
function abrirpopup(  ){

// Cria o popup
    const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <img src="https://media.tenor.com/0AVbKGY_MxMAAAAC/check-mark-verified.gif" alt="Your image">
    <p>Paciente cadastrado com sucesso!</p>
    <button>OK</button>
  `;

  // Adiciona o popup ao body
  document.body.appendChild(popup);

  // Fecha o popup depois de 3 segundos
  setTimeout(() => {
    popup.remove();
  }, 3000);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// faz uma solicitação HTTP GET para o servidor JSON para obter os detalhes do usuário atualmente conectado
fetch('https://renderapiprojetomodulo1.onrender.com/users/1')
  .then(response => response.json())
  .then(data => {
    // substitui o "@Daniel" pelo nome de usuário retornado pelo servidor JSON
    const welcomeMessage = document.querySelector('.header-right p');
    welcomeMessage.innerHTML = `Bem vindo, <b>${data.name}</b> `;
  })
  .catch(error => console.error(error));

