//main.js




document.entrada.addEventListener('submit', leFormulario)

const olJoao = document.querySelector('#olJoao');
const olMaria = document.querySelector('#olMaria');
function leFormulario(event){
    event.preventDefault();
    const fruta = document.entrada.fruta.value;
    const quantidade = document.entrada.quantidade.value;

    console.log(`Solicitado: ${origem} doa: ${quantidade} ${fruta} para ${destino}`);
    
    //document.entrada.submit();
};