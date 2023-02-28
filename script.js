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

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));
