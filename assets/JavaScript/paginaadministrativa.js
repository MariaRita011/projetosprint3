//Arrays de informações
let titulos = [];
let categorias = [];
let resumos = [];
let autores = [];
let datas = [];

//Contador
i = 0;


//coletando que dia é hoje
const datadehoje = new Date();


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
    var dbr = dusa.split('-').reverse('').join('/');
    
    
    //Definindo data para comparação
    var dtcompar = dusa.split('-').join('/');
    const dateinput = new Date(dtcompar);
    console.log(dateinput);


    //Caso algum cmpo não tenha sido preenchido
    if (t == '' || c == '' || r == '' || a == '' || dusa == ''||t == '' &&c == '' && r == '' && a == '' && dusa == '') {
        document.getElementById("verificacao").innerHTML = "Preencha todos os campos para adicionar!";
    } 


    //Caso a data seja menor que a data atual
    else if (dateinput.setHours(20) < datadehoje || dateinput.setHours(20) == datadehoje ) {
        document.getElementById("verificacao").innerHTML = "Digite uma data maior que o dia de hoje!";
    }


    //bloco de código
else {
    

    //limpando o campo de verificação
    document.getElementById("verificacao").innerHTML = "";
    //Adiciondo infos no array
    titulos.push(t);
    categorias.push(c);
    resumos.push(r);
    autores.push(a);
    datas.push(dbr);


    //fazendo aparecer na tela
    document.getElementById("ntc").innerHTML += `<section class="sec" id="${secunica}" >
    <div id="conts" ><h1 id="titulotodo" >${titulos[i]}</h1>
    <p class="conteudo" >${categorias[i]}</p>
    <p class="conteudo" >${resumos[i]}</p>
    <p class="conteudo" >${autores[i]}</p>
    <p class="conteudo" >${datas[i]}</p></div>
    <div id="btns" ><button onclick="delet('${secunica}')" class="buttonstodo"> Deletar 🗑️ </button>
    </div>
    </section>`;
    

    //Limpando campos
    var t = document.getElementById("titulo").value = '';
    var c = document.getElementById("categoria").value = '';
    var r = document.getElementById("resumo").value = '';
    var a = document.getElementById("autor").value = '';
    var dusa = document.getElementById("data").value = '';
    

    //adicionando +1 ao contador
    i++
}

}


//Caso o botao deletar seja apertado
function delet(secunica) {
    var section = document.getElementById(secunica);
    section.style.display = "none";
}