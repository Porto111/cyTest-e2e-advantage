describe('Compras', () => {
    beforeEach(() => {
        cy.sessionLogin()
    })

    it('Renovando o meu escritorio', () => {
        cy.buscarEAdicionarProdutos();

    })
})

