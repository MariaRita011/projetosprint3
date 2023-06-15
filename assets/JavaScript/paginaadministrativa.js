//Arrays de informações
let titulos = [];
let categorias = [];
let resumos = [];
let autores = [];
let datas = [];
i = 0;

//Criando Function Adicionar
function adicionar() {

    //Váriáveis
    var t = document.getElementById("titulo").value;
    var c = document.getElementById("categoria").value;
    var r = document.getElementById("resumo").value;
    var a = document.getElementById("autor").value;
    var dusa = document.getElementById("data").value;

    var secunica = "section" + i;

    //Conventendo a data
    var dbr = dusa.split('-').reverse().join('/');

    //Caso algum cmpo não tenha sido preenchido
     if (t == '' || c == '' || r == '' || a == '' || dusa == ''||t == '' &&c == '' && r == '' && a == '' && dusa == '') {
         alert("Preencha todos os campos para adicionar uma notícia!");
     } 
else {

    //Adiciondo infos no array
    titulos.push(t);
    categorias.push(c);
    resumos.push(r);
    autores.push(a);
    datas.push(dbr);

//fazendo aparecer na tela
    document.getElementById("ntc").innerHTML += `<section id="${secunica}" >
    <h1 id="titulotodo" >${titulos[i]}</h1>
    <p>${categorias[i]}</p>
    <p>${resumos[i]}</p>
    <p>${autores[i]}</p>
    <p>${datas[i]}</p>
    <button onclick="delet('${secunica}')" class="buttonstodo"> Deletar </button>
    <button onclick="edit()" class="buttonstodo"> Editar </button>
    </section>`;
    
    //Limpando campos
    var t = document.getElementById("titulo").value = '';
    var c = document.getElementById("categoria").value = '';
    var r = document.getElementById("resumo").value = '';
    var a = document.getElementById("autor").value = '';
    var dusa = document.getElementById("data").value = '';

    i++
}

}

function delet(secunica) {
    var section = document.getElementById(secunica);
    section.style.display = "none";
}