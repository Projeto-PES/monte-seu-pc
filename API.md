# Listagem:
- `/api/login`;
- `/api/cadastro`;
- `/api/pcs`;
- `/api/pecas`;

## `/api/login`
Ponto de acesso para autenticação. Use `POST`.

### Parâmetros de requisição: 
- `email`: string com o email do usuário;
- `senha`: string com a senha do usuário (não precisa fazer hash).

### Respostas:
#### `200`:
- Tudo deu certo;
- Será retornado um token de sessão (não precisa implementar no protótipo).
- Body da resposta:
```json
{
    "token": "<token>"
}
```
#### `400`:
- Login inválido.

## `/api/cadastro`
Ponto de acesso para criação de conta. Use `POST`.

### Parâmetros de requisição:
- `nome`: string com o nome do usuário;
- `email`: string com o email do usuário;
- `senha`: string com a senha do usuário (não precisa fazer hash).

### Respostas:
#### `200`:
- Tudo deu certo.
#### `400`:
- Algum dado inválido (não há checkup então provavelmente não haverá).
#### `409`:
- Já existe uma conta com este e-mail.

## `/api/pcs`
Ponto de acesso para listagem dos computadores do usuário.

### Parâmetros de requisição: 
- `token`: string com o token do usuário (enviado via header).

### Respostas:
#### `200`:
- Tudo deu certo.
- É retornada uma lista com todos os computadores do usuário.
- Body da resposta:
```json
{
    "pcs": [
        {
            "id": 1,
            "nome": "pcExemplo1"
        },
        {
            "id": 2,
            "nome": "pcExemplo2"
        },
        ...
    ]
}
```
#### `400`:
- Token inválido (sessão expirada ou simplesmente um token errado).


## `/api/pecas`

Ponto de acesso para as peças, filtradas pela compatibilidade com propriedades. Use `POST`.

### Parâmetros de requisição: 
- `tipo`: string com o tipo de peça a ser procurado. É um parâmetro de busca e, como tal, deve ser enviado pela url. Ex.: `/api/pecas?tipo=fonte`;
- `props`: array com o id de cada propriedade a ser usada no filtro. Deve ser enviado no body da requisição.
- `pot`: potência total das peças escolhidas (exceto a fonte).
- `fontepot`: potência fornecida pela fonte escolhida (0 caso não haja).
Ex.:
```json
{
    "pot": 1
    "fontepot": 10
    "props": [1, 2, 3, 4]
}
```
Para arrays vazios (caso de um computador vazio)
```json
{
    "pot": 0,
    "fontePot": 0,
    "props": []
}
```
### Respostas:
#### `200`:
- Tudo deu certo;
- Será retornado na resposta um array de peças compatíveis;
- Body da resposta:
```json
{
    "pecas" : [
        {
            "id": 1
            "nome": "exemplo1",
            "marca": "exemplo1.1",
            "img": "exemplo/1.2",
            "aval": 4,
            "pot": 11
            "props": [
                { 
                    "nome": "prop1ex",
                    "desc": "prop1.1ex"
                },
                ...
            ]
        },
        {
            "id": 2
            "nome": "exemplo2",
            "marca": "exemplo2.1",
            "img": "exemplo/2.2",
            "aval": 3,
            "pot": 22,
            "props": [
                { 
                    "nome": "prop2ex",
                    "desc": "prop2.1ex"
                },
                ...
            ]
        },
        ...
    ]
}
```
#### `400`:
- tipo inválido (vazio ou simplesmente errado).