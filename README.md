# Testes de ponta a ponta com Cypress

Projeto de amostra para demonstrar testes de ponta a ponta (e2e) escritos com [Cypress](https://cypress.io) em execução no GitHub Actions.

## Pré-requisitos

Para clonar e executar este projeto, você precisará de:

- [git](https://git-scm.com/downloads) (usei a versão `2.34.1` ao escrever este documento)
- [Node.js](https://nodejs.org/en/) (usei a versão `v18.16.1` ao escrever este documento)
- npm (usei a versão `9.8.0` ao escrever este documento)

**Observação:** Ao instalar o Node.js, o npm é instalado automaticamente. 🚀

## Instalação

Para instalar as dependências de desenvolvimento, execute `npm install` (ou `npm i` para abreviar.)

## Configurando as variáveis ​​de ambiente

Antes de executar os testes, algumas variáveis ​​de ambiente precisam ser configuradas.

Faça uma cópia do arquivo [`cypress.env.example.json`](./cypress.env.example.json) como `cypress.env.json` e defina os valores apropriados para todas as variáveis.

**Observação:** O arquivo `cypress.env.json` não é rastreado pelo git, pois está listado no arquivo `.gitignore`.

## Executando os testes

Neste projeto, você pode executar testes nos modos interativo e headless, tanto em viewports de desktop quanto de tablet.

### Modo headless

Execute `npm test` (ou `npm t` para abreviar) para executar todos os testes no modo headless usando uma viewport de desktop.

Execute `npm run test:tablet` para executar os testes apropriados no modo headless usando uma viewport de tablet.

### Modo interativo

Execute `npm run cy:open` para abrir o **Cypress App** para executar testes no modo interativo usando uma viewport de desktop.

Execute `npm run cy:open:tablet` para abrir o **Cypress App** para executar testes no modo interativo usando uma viewport de tablet.

---

Feito por ([Porto111](https://github.com/Porto111)).
