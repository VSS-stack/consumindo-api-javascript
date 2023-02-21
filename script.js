var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => response.json())
.then(r => {
    if (r.erro) {
        throw Error('Esse cep não existe');
    }else {
        console.log(r);
    }
})
.catch(e => console.log(e))
.finally(mensagem => console.log('Processamento concluído!'));

console.log(consultaCep);
