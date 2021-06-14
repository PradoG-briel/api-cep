'use strict';

const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('estado').value = endereco.uf;
}

const pesquisarCep = async() => {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json`;
    // metodo 1
    // fetch(url).then(response => console.log(response.json()).then(console.log));
    // metodo 2
    const dados = await fetch(url);
    const endereco = await dados.json();
    preencherFormulario(endereco);
}

document.getElementById('cep')
        .addEventListener('focusout',pesquisarCep);

