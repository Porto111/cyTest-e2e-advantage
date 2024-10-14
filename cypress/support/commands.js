
Cypress.Commands.add('guiLogin', function () {
    var username = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Cypress.env('USER_NAME');
    var password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Cypress.env('USER_PASSWORD');
    cy.visit('https://advantageonlineshopping.com/#/');
    cy.get('#menuUser').click();
    cy.get('[a-hint="Username"]').type(username);
    cy.get('[a-hint="Password"]').type(password, {
        log: false
    });
    cy.get('#sign_in_btn').click();
});


Cypress.Commands.add('sessionLogin', function () {
    var username = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Cypress.env('USER_NAME');
    var password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Cypress.env('USER_PASSWORD');

    var login = function login() {
        return cy.guiLogin(username, password);
    };

    cy.session(username, login);
});
//
//
Cypress.Commands.add('preencherEEnviarFormulário', function (username, password) {


    cy.visit('https://advantageonlineshopping.com/#/register');
    cy.get('#menuUser').click();
    cy.get('.create-new-account').click();
    cy.get(':nth-child(2) > [a-hint="Username"]').type(username);
    cy.get('[sec-name="userEmail"]').type('guiporto88@gmail.com');
    cy.get(':nth-child(3) > [a-hint="Password"]').type(password, {
        log: false
    });
    cy.get('[a-hint="Confirm password"]').type(password, {
        log: false
    });
    cy.get('[sec-name="userFirstName"]').type('Guilherme');
    cy.get('[sec-name="userLastName"]').type('Porto');
    cy.get(':nth-child(2) > :nth-child(3) > .ng-isolate-scope > .inputContainer > label').type('11999999999');
    cy.get('[sec-name="userCountry"] > .inputContainer > .ng-valid').select('Brazil');
    cy.get('[sec-name="userCity"]').type("São Paulo");
    cy.get('[sec-name="userAdress"]').type("Centro");
    cy.get('[sec-name="userState"]').type("São Paulo");
    cy.get('#formCover > :nth-child(3) > :nth-child(4) > .ng-isolate-scope > .inputContainer > label').type('01225000');
    cy.get('[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine').click();

    cy.get('#register_btn').click();

});

Cypress.Commands.add('buscarProtudos', function (produtos) {
    if (!Array.isArray(produtos)) {
        produtos = ['laptop', 'headphone', 'tablet', 'speakers'];
    }
    cy.visit('https://advantageonlineshopping.com/#/');
    produtos.forEach(produtos => {
        cy.get('#mobileSearch > input').clear().type(produtos);
        cy.get('#mobileSearch > svg').click();
    })
});



Cypress.Commands.add('buscarEAdicionarProdutos', function (produtos) {
    // Lista de produtos a serem pesquisados
    var produtos = ['headphone', 'tablet'];  // Evite repetição de produtos, exceto caso seja intencional

    cy.visit('https://advantageonlineshopping.com/#/');

    produtos.forEach((produto) => {
        cy.get('#mobileSearch > input').clear().type(produto);
        cy.get('#mobileSearch > svg').click();
        cy.get('.categoryRight li:nth-child(2)').click();  // Ajuste o seletor conforme a sua necessidade
        cy.get('[name="save_to_cart"]').click();

        // Retorna à página inicial para buscar o próximo produto
        cy.get('.pages > .ng-scope').click();
    });

    // Vai para o carrinho de compras
    cy.get('#menuCart').click();
    cy.get('#checkOutButton').click();
});


// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

