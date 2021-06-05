# API Gerenciamento de Imoveis
API RESTful para uma plataforma simples de gerenciamento de imóveis.

## Endpoint
O endpoint de conexão com a API REST está no endereço: https://api-gerenciamento-imoveis.herokuapp.com

## Recursos disponíveis
Existem os seguintes recursos que poderão ser acessados pelos métodos GET, POST, PUT e DELETE:<br>
#### Usuários (users) - /users
#### Imóveis (properties) - /properties

## Formato dos Dados
Todos os dados enviados e recebidos pela API estão em JSON (application/json).

## Autenticação
Para obter acesso aos recursos dos imóveis, é necessária uma autenticação por meio de token gerado após o Login.
#### POST Autenticar Usuário
##### Corpo da requisição: 
email, password
##### Resposta: 
Objeto JSON com token gerado

## POST Cadastrar Usuário
Parâmetros | Descrição
:-------   | :------
name       | Nome completo do usuário
cpf        | CPF do usuário
email      | Email
password   | Senha

## Recurso Imóveis
##### Cabeçalho das requisições:
Parâmetro | Valor
:-------   | :------
x-access-token      | Token gerado

## GET Listar Imóveis
/properties
## GET Listar um Imóvel
/properties/{id}
## POST Cadastrar um Imóvel
/properties
##### Corpo da requisição: 
Atributos  | Descrição
:-------   | :------
cep        | CEP do endereço do imóvel
number     | Número do imóvel
complement | Complemento do endereço
rentValue  | Valor do aluguel do imóvel
rooms      | Número de quartos

## PUT Atualizar um Imóvel
/properties/{id}
##### Corpo da requisição: 
Atributos  | Descrição
:-------   | :------
cep        | CEP do endereço do imóvel
number     | Número do imóvel
complement | Complemento do endereço
rentValue  | Valor do aluguel do imóvel
rooms      | Número de quartos

## DELETE Excluir um Imóvel
/properties/{id}
