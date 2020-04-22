function mudaFotoIcone(foto) {
    document.getElementById("icone").src = foto;
}

function listaCidades(estado){
    var cidadesPorEstados = {RN:["Natal", "Parnamirim", "Macaíba", "São Gonçalo", "Extremoz", "Ceará-Mirim"],
                            CE:["Fortaleza"], PB:["João Pessoa"], PE:["Recife"], RJ:["Rio de Janeiro"],
                            SP:["São Paulo"], SC:["Florianópolis"], RS:["Porto Alegre"], MG:["Belo Horizonte"]
                            }

    var options = '';
    
    if(cidadesPorEstados.hasOwnProperty(estado)){
        for(var i=0; i<cidadesPorEstados[estado].length; i++){
            options += '<option value= "' + cidadesPorEstados[estado][i] + '"/>';
        }
    }
    document.getElementById('iCidade').value = "";
    document.getElementById("listCidades").innerHTML = options;
}