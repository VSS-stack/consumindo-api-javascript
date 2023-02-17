var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => response.json())
.then(response => console.log(response));

console.log(consultaCep);