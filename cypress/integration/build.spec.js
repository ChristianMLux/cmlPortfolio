// Welcome to my Portfolio

describe('cml portfolio', () => {
    beforeEach(() => {
        cy.visit("/")
    })
    it("the wip picture should exist", () =>{
        cy.get("[data-cy=wip1]").should("exist")
    })
})