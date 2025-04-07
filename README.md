 
## Criação de uma API REST - Sem utilizar bibliotecas externas.

### Sobre

> Este projeto está organizado em duas pastas: a primeira reúne meus estudos realizados durante o curso que estou fazendo, e a segunda contém um desafio proposto pelos instrutores. Executei esse desafio com excelência, o que me permitiu absorver ainda mais o conteúdo abordado no curso. A ideia era utilizar apenas recursos nativos do Node.js para fazer a API funcionar, sem depender de nenhuma biblioteca externa para essa finalidade.


## Tecnologia usadas

- Node.js 22.14

## Execução do projeto

**Requer o NODE (npm) e o GIT instalado!**
~~~javascript
 1. git clone https://github.com/wwilliamsantana/nodejs-fundamentals-study.git
 2. cd .\nodejs-fundamentals-study\
 3. npm install
 4. npm  run dev
~~~~

**Utilizei o Insomnia para fazer requisição para a API

### ROTAS

#### GET - /tasks
> Return TASKS
> Possibilidade de envio de query para pesquisas entre os tasks

#### POST - /tasks
> RETURN - HTTP Status 201

#### PATCH - /tasks/:id/complete
> RETURN Deu tudo certo - HTTP Status 204 <br>
> RETURN Error - HTTP Status 404

#### PUT - /tasks/:id
 
> RETURN Deu tudo certo - HTTP Status 204<br>
> RETURN Error - HTTP Status 404

#### DELETE - /tasks/:id
> RETURN Deu tudo certo - HTTP Status 204<br>
> RETURN Error - HTTP Status 404

