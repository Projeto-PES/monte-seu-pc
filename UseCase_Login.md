### Login

**Ator:** Usuário ou Admin

**Fluxo normal:**

1. — Fornecer credenciais da conta;
1. — Sistema conecta à conta;

**Extensões:**

1.a — As credenciais são definidas por e-mail e senha, sendo o último 
criptografado no DB;  
1.b — Em caso de credenciais inválidas, uma mensagem de erro será apresentada;  
2.a — Recursos como salvamento de configuração ou avaliação das peças devem ser
exclusivos de usuários logados no sistema.
2.a — A sessão do Admnin deve persistir significativamente menos em relação à do
Usuário.

> [!NOTE]
> Autenticação de dois fatores para Admins parece uma boa ideia para
impressionar.