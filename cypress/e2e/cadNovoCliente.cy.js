describe('Sign up', () => {
    const user = Cypress.env('USER_NAME')
    const password = Cypress.env('USER_PASSWORD')
    it('inscrição realizada com sucesso', () => {
        cy.preencherEEnviarFormulário(user, password)

    })
})