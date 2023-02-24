async function buscaEndereco(cep) {
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro) {
            throw Error('CEP não existe!');
        }
        console.log(consultaCepConvertida);
        return consultaCepConvertida;
    } catch (error) {
        console.log(error);
    }
    
}

let ceps = ['01001000', '13453842'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
Promise.all(conjuntoCeps).then(respostas => console.log(respostas));
