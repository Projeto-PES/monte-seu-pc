SELECT * FROM usuario;

SELECT COMPUTADORES.nome as COMPUTADOR_NOME, USUARIO.nome as USUARIO_NOME
FROM computadores
JOIN usuario ON COMPUTADORES.DONO = USUARIO.ID;

SELECT * FROM pecas;

SELECT * FROM propriedade;

SELECT * FROM pecas_prop;

SELECT * FROM incompat_prop;

SELECT PECAS.nome as Peça, PECAS_PROP.prop as Prop, PROPRIEDADE.descricao as Descrição
FROM PECAS
JOIN pecas_prop ON pecas.id = PECAS_PROP.peca
JOIN PROPRIEDADE ON pecas_prop.prop = PROPRIEDADE.nome;

SELECT P1.nome as Peça, P2.nome as Peça_incomp
FROM PECAS P1, PECAS P2
WHERE P2.id IN (
    -- pecas com incompatibilidades de p1
    SELECT PECAS_PROP.peca
    FROM PECAS_PROP
    WHERE PECAS_PROP.prop IN (
        -- incompatibilidades de p1
        SELECT incompat_prop.prop2
        FROM incompat_prop
        WHERE incompat_prop.prop1 IN (
            -- propriedades de p1
            SELECT PECAS_PROP.prop
            FROM PECAS_PROP
            WHERE PECAS_PROP.peca = P1.id
        )
    )
);