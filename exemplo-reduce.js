const numeros = [1, 2, 3, 11, 5, 0, 7, 8]; // 37

const soma = numeros.reduce((total, numeroAtual) => total + numeroAtual);
console.log('Soma:', soma);

const maximo = numeros.reduce(
    (numeroMaior, numeroAtual) => numeroAtual > numeroMaior ? numeroAtual : numeroMaior
)
console.log('Máximo:', maximo);

const minimo = numeros.reduce(
    (numeroMenor, numeroAtual) => numeroAtual < numeroMenor ? numeroAtual : numeroMenor
)
console.log('Mínimo:', minimo);

const saldo = numeros.reduce((saldoAtual, debito) => saldoAtual - debito, 500);
console.log('Saldo:', saldo);

const media = numeros.reduce((media, valorAtual, indice, numeros) => {
    media += valorAtual;

    if(indice == numeros.length-1) {
        return media / numeros.length;
    }

    return media;
});
console.log('Média:', media);