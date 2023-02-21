var consultaCep = fetch('https://viacep.com.br/ws/01001005/json/')
.then(response => response.json())
.then(r => {
    if (r.erro) {
        throw Error('esse cep não existe');
    }else {
        console.log(r);
    }
})
.catch(e => console.log(e));

console.log(consultaCep);
