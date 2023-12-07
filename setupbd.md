- Link mariaDB: https://mariadb.org/download/
Para usar é necessário criar um servidor local para o banco de dados e um usuário para ele (durante o setup do instalador no windows ele te guia com isso).
Pessoalmente, estou usando a extensão "[SQLTools](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools)" do VSCode para interagir com o BD. É necessário instalar o "[SQLTools MySQL/MariaDB/TiDB](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools-driver-mysql)" também.

A ideia é fazer uma API para autenticação, gerenciamento dos pcs e fetching das peças. Para isso estou considerando usar o [mariaDB Node.js Connector](https://mariadb.com/kb/en/getting-started-with-the-nodejs-connector/) dentro do next para isso (aparentemente há diferentes formas de fazer isso nele e não sei ainda qual a ideial, via [app](https://nextjs.org/docs/pages/building-your-application/routing/api-routes), [pages](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) e/ou [server components(?)](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-client-with-route-handlers)).

Em ordem de complexidade, as seguintes coisas podem ser feitas:

1. Elaborar uma descrição de minimundo para o banco de dados (é útil para a apresentação e para manter foco no que deve ser feito);
1. Preencher as tabelas com valores de teste (usando o `testValues.sql`);
1. Complementar o SQL com mais regras de negócio (adicionar tipos de peças, outras `CONSTRAINT`s, etc.);
1. Criar as queries necessárias para a API;
1. Implementar a API no nextjs.

OBS.: Alterações das tabelas via edição no `databases.sql` requerem que você reconstrua do zero o database (um `DROP DATABASE <nome do database>` já bastaria). (acho que é por conta dos `IF NOT EXISTS` que coloquei mas não testei sem eles)