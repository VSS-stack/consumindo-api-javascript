async function buscaEndereco() {
    try {
        var consultaCep = await fetch('https://viacep.com.br/ws/01001005/json/');
        var consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro) {
            throw Error('CEP não existe!');
        }
        console.log(consultaCepConvertida);
    } catch (error) {
        console.log(error);
    }
    
}

buscaEndereco();
