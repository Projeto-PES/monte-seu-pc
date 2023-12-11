INSERT INTO USUARIO (email, nome, senha, ehAdmin, token, sessao)
VALUES
    ('teste0@email.com', 'joao', B'00000000000000001111111111111111', 0, B'10101010', NOW()),
    ('teste2@email.com', 'mari', B'11111111111111110000000000000000', 1, B'11111010', NOW());

INSERT INTO USUARIO (email, nome, senha, token, sessao)
VALUES ('teste3@email.com', 'josé', B'00000000000000001111111111111111', B'10101111', NOW());

INSERT INTO COMPUTADORES VALUES
    (1,'pc 1 jose', 1),
    (2,'pc 1 mari', 2);

INSERT INTO PECAS (nome, marca, tipo) VALUES
    ('H610M (rev.1.0)', 'Gigabyte', 'Placa-mãe'),
    ('A520M-A PRO', 'MSI', 'Placa-mãe'),
    ('A620M S2H', 'Gigabyte', 'Placa-mãe');

UPDATE PECAS SET pot = 80 WHERE pot = 0;

INSERT INTO PROPRIEDADE VALUES
    ('AM4','Possui socket AM4, para processadores AMD.'),
    ('AM5','Possui socket AM5, para processadores AMD.'),
    ('DDR4-exclusivo','É incompatível com outras gerações DDR.'),
    ('LGA1700','Possui socket LGA1200, para processadores Intel.');

INSERT INTO PECAS_PROP VALUES
    (1, 'LGA1700'),
    (1, 'DDR4-exclusivo'),
    (2, 'AM4'),
    (3, 'AM5');

INSERT INTO PECAS (nome, marca, tipo, pot) VALUES
    ('i3-12100F', 'Intel', 'Processador', 55),
    ('Ryzen 5 5600G', 'AMD', 'Processador', 65),
    ('Ryzen 9 7900x', 'AMD', 'Processador', 170);

INSERT INTO PROPRIEDADE VALUES
    ('Alder Lake','Possui a arquitetura Alder Lake, para processadores Intel da 12a geração.');

INSERT INTO PECAS_PROP VALUES
    (4,'Alder Lake'),
    (5,'AM4'),
    (6,'AM5');

INSERT INTO PECAS (nome, marca, tipo) VALUES
    ('Basics CB8GS2666', 'Crucial', 'Memória'),
    ('Fury Beast KF432C16BB/8', 'Kingston', 'Memória'),
    ('Signature Line PSD58G520041', 'Patriot', 'Memória');

UPDATE PECAS SET pot = 3 WHERE pot = 0;

INSERT INTO PROPRIEDADE VALUES
    ('SO-DIMM','Compatível com o módulo de memória SO-DIMM, convencionalmente usado em notebooks.'),
    ('DIMM','Compatível com o módulo de memória DIMM.'),
    ('DDR4','Geração DDR4 de memória.'),
    ('DDR5','Geração DDR5 de memória.');

INSERT INTO PECAS_PROP VALUES
    (7,'DDR4'),
    (7,'SO-DIMM'),
    (8,'DDR4'),
    (8,'DIMM'),
    (9,'DIMM'),
    (9,'DDR5'),
    (1,'DIMM'),
    (2,'DIMM'),
    (3,'DIMM');

INSERT INTO PECAS (nome, marca, tipo, pot) VALUES
    ('PS-200V4', 'C3Tech', 'Fonte', 200),
    ('TRS-230 V1.2', 'Tronos', 'Fonte', 230),
    ('BPC-s427v1.0', 'BrazilPC', 'Fonte', 400);

INSERT INTO INCOMPAT_PROP (prop1, prop2) VALUES
    ('DDR4-exclusivo','DDR5'),
    ('AM4','DDR5'),
    ('AM5','DDR4'),
    ('Alder Lake','AM4'),
    ('Alder Lake','AM5'),
    ('AM4','AM5'),
    ('AM4','SO-DIMM'),
    ('AM4','LGA1700'),
    ('AM5','LGA1700'),
    ('AM5','SO-DIMM'),
    ('AM5','AM4'),
    ('DDR4','AM5'),
    ('LGA1700','AM4'),
    ('LGA1700','AM5'),
    ('SO-DIMM','AM4'),
    ('SO-DIMM','AM5');