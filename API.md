# Listagem:
- `/api/login`;
- `/api/cadastro`;
- `/api/pcs`;
- `/api/pecas`;

## `/api/login`
Ponto de acesso para autenticação.

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
Ponto de acesso para criação de conta.

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
É para ser o ponto de acesso para dados de computadores de um usuário.
Ainda não decidi sobre, aceito recomendações entre fazer um /api/pcs/{user} (não parece muito privado) ou passar o token do usuário para listar.

## `/api/pecas`
Como esse ponto é mais complexo ele não está definido totalmente em parâmetros. O retorno é mais fácil de especificar, e será desta forma:

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