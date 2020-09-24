const inputArquivo = document.getElementById('carregarArquivo');
inputArquivo.addEventListener('change', (event) =>{
    const arquivo = event.target.files[0];
    var reader = new FileReader();

    reader.readAsText(arquivo);

    reader.onload = function(event){

        var csv = event.target.result;

        processarCsv(csv);
    }
});


function processarCsv(csv){
    var allLines = csv.split('\n');
    var linhas = [];

    for(var i = 0; i<allLines.length; i++){
        var dados = allLines[i].split(';');
        var tarr = [];
        for(var j = 0; j<dados.length; j++){
            tarr.push(dados[j]);
        }

        linhas.push(tarr);
    }

    exibirCsvHtml(linhas);
}

function exibirCsvHtml(linhas){
    var row = '';

    for (let index = 0; index < linhas.length; index++) {
        row = row + '<tr>';
        var campos = '';

        linhas[index].forEach(element => {
            if(index == 0){
                campos = campos + '<th bgcolor="aqua">' + element + '</th>';
            }
            else{
                campos = campos + '<th>' + element + '</th>'; 
            }      
        });

        row = row + campos + '<tr>';
    }
    document.getElementById('csv').innerHTML = "<table>" + row + "</table>";
}