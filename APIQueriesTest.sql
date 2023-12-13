-- 1. para cadastro
-- 1.1 checar ruído
SELECT usuario.ruido
FROM usuario
WHERE usuario.ruido = '<ruido>';
-- 1.2 add usuario
INSERT INTO usuario (email, nome, senha, ruido) VALUES
('<email>', '<nome>', '<senha>', '<ruido>');

-- 2. para login
-- 2.1 validar usuario
SELECT usuario.id
FROM usuario
WHERE usuario.email = '<email>' AND usuario.senha = '<senha>';
-- 2.2 atualizar token
UPDATE usuario
SET token = '<token>', sessao = NOW()
WHERE id = '<id>';
-- 2.3 somente renovar sessão
UPDATE usuario
SET sessao = NOW()
WHERE id = '<id>';

-- 3. para pcs
-- 3.1 listar pcs do usuário
SELECT computadores.id, computadores.nome
FROM computadores
WHERE computadores.dono = '<id do usuario>';

-- 4. para peças
-- 4.1 obter propriedades das peças de um pc
SELECT DISTINCT PECAS_PROP.prop
FROM PECAS_PROP
WHERE PECAS_PROP.peca IN (
    SELECT COMP_PECAS.peca
    FROM COMP_PECAS
    WHERE COMP_PECAS.comp = '<id do pc>'
);
-- 4.1alt obter propriedades das peças de um pc usando JOIN
SELECT DISTINCT pecas_prop.prop
FROM pecas_prop
INNER JOIN comp_pecas
ON comp_pecas.peca = pecas_prop.peca
WHERE comp_pecas.comp = '<id do pc>';
-- 4.2 obter peças compatíveis com propriedades
SELECT *
FROM pecas
WHERE pecas.id NOT IN (
    SELECT pecas_prop.peca
    FROM pecas_prop
    INNER JOIN incompat_prop
    ON incompat_prop.prop2 = pecas_prop.peca
    WHERE incompat_prop.prop1 IN ('<prop1>','<prop2>','...')
);
-- 4.2.1 caso especial da fonte
SELECT *
FROM pecas
WHERE pecas.id NOT IN (
    SELECT pecas_prop.peca
    FROM pecas_prop
    INNER JOIN incompat_prop
    ON incompat_prop.prop2 = pecas_prop.peca
    WHERE incompat_prop.prop1 IN ('<prop1>','<prop2>','...')
) AND pecas.pot > <pot total>;