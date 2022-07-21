
Tela de Home: 
![Anotadin - HomePage](https://user-images.githubusercontent.com/90586912/170794695-a3e46222-a41a-4907-8e74-9387c63d2957.png)

Tela de Login:
![anotadin4](https://user-images.githubusercontent.com/90586912/172060470-bd16fad9-81ef-43ea-b242-7ec1df064e62.png)

Tela de Cadastro: 
![anotadin3](https://user-images.githubusercontent.com/90586912/172060478-e33f98d4-14b0-46e0-8b7c-16d1d860b985.png)

Tela Dashboard de Criptomoedas: 
![anotadin1](https://user-images.githubusercontent.com/90586912/172055723-36057a7b-d6b2-4e26-b17c-019f04899b96.png)

Tela Dashboard de Criptomoedas -> Modal para Adicionar um Registro de Criptomoeda:
![anotadin2](https://user-images.githubusercontent.com/90586912/172060490-528f7ee0-cc1d-47e6-ae07-8d59b78364aa.png)

Tela Dashboard de Criptomoedas -> Modal para Editar Informações do Usuário:
![anotadin8](https://user-images.githubusercontent.com/90586912/172060576-9db66740-b95a-4359-bc2b-37dbd354a040.png)

Tela Dashboard de Rendimentos:
![anotadin5](https://user-images.githubusercontent.com/90586912/172060533-d64122dc-d6ce-4981-9e86-6c0a5ae79d5f.png)

Tela Dashboard de Rendimentos -> Modal para Editar um Registro de Criptomoeda:
![anotadin6](https://user-images.githubusercontent.com/90586912/172060499-2cac34c0-e926-4595-992d-9eff8d049fa1.png)

Tela Dashboard de Rendimentos -> Modal para Confirmar Exclusão de um Registro de Criptomoeda:
![anotadin7](https://user-images.githubusercontent.com/90586912/172060502-e0d06d8a-809c-4c2f-bc7c-be56fa7248ca.png)


# Anotadin App

Link da API: https://github.com/guilherme-braga4/API-anotadin-app

# Link do Projeto Online: https://anotadin-app.herokuapp.com/

# Como Clonar o Repositório do Anotadin App [FRONTEND]
Clonando o Repo - git clone https://github.com/guilherme-braga4/anotadin-app.git [Utilize a branch Prod] 

Instalando Dependências - npm install ou yarn install

Ligando o App - npm run dev(O app rodará no endereço local porta 3000 /(http://localhost:3000/)

# Como Clonar o Repositório do Anotadin API [API]

Clonando o Repo - git clone https://github.com/guilherme-braga4/API-anotadin-app.git [Utilize a branch Prod] 

Instalando Dependências - npm install ou yarn install

Conecte a aplicação a um banco de dados MySQL. Você pode alterar as configurações do Banco de Dados no arquivo .env

Para criar as Tabelas do banco de dados, execute o comando: node ace migration:run 

Ligando a API - npm run dev(O app rodará no endereço local porta 3000 /(http://localhost:3333/)

# 🤔 Pontos de melhorias/correções (Em progresso):
🔨 Organizar melhor os componentes;
🔨 Refatorar códigos visando mais organização;
🔨 Responsividade;
🔨 Alterar roteamento após Autenticação de Cadastro, para logar automaticamente;
🔨 Aprimorar o fluxo do compartilhamento de dados entre a aplicação (quase não utilizei props);
🔨 Implementar uma função que calcula a projeção de ganhos, baseado na valorização dos últimos 30 dias multiplicado pela quantidade (R$) desse ativo.
🔨 Bug: Após alterar editar um registro de criptomoeda, a quantidade dessa cripto não atualiza.
🔨 Ainda há bugs de roteamento a serem resolvidos
🔨 Penso em implementar um HOC para garantir mais performance e organização




