# Onde começa?

O projeto começa na pasta raiz em index.js.
O router do express chamará os middlewares, que por sua vez chamará as validações.

## Testes

Os testes da pasta 'tests' já vieram escritos para avaliação automática

## Sobre 

Os desafios propostos estão neste diretório com a extensão .md

## Como testar

Após servidor iniciado com o comando no terminal 'npm start':

Para métodos GET:
-> digite a devida URL no navegador
EX: http://localhost:3000/talker

Para outros métodos:
-> utilizar o Insomnia ou Postman

------------------- Requisicoes -----------------

### Header

Será OBRIGATÓRIO utilizar um header com a chave:

authorization: 8294j5g4829fj3fz (dezesseis digitos quaisquer)

### Body

Para alguns desafios será necessário passar um JSON no corpo da requisição.

{
    "name": "Luiz",
    "age": 32,
        ... 
}