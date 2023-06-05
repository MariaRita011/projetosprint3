var arrgeral = [];


//Function Adicionar
function adicionar() {

    var arr = [];
    //Variáveis
    let title = document.getElementById("titulo").value;
    let resum = document.getElementById("resumo").value;
    let categ = document.getElementById("categoria").value;
    let author = document.getElementById("autor").value;
    let date = document.getElementById("data").value;
    let datausa = date;
    let databr = datausa.split('-').reverse().join('/');
    arr.push(title, resum, categ, author, databr);
    arrgeral.push(arr);
    console.log(arrgeral);
    document.getElementById("titulo").value = '';
    document.getElementById("resumo").value = '';
    document.getElementById("categoria").value = '';
    document.getElementById("autor").value = '';
    document.getElementById("data").value = '';
    arr = [];
    console.log(arr);

}