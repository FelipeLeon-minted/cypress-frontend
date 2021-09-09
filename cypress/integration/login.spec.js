/// <reference types="cypress" />

describe('Login tests', () => {
    beforeEach(() => {
        cy.visit('https://qa.mntd.net/')
    })

    it('Visit login page', () => {
        cy.get('[href="/login"]').click();
        cy.get('.form [name="email"]').type('automation1@minted.com');
        cy.get('.form [name="password"]').type('LX>)^4tr>HN}@~^8');
        cy.get('.form .loginButton').click();
        cy.get('.utility-nav__item--avatar').click();
        cy.contains('Account').click();
        cy.get('.my-account-my-profile dd:eq(2)').should('contain.text', 'automation1@minted.com');
    })
})
