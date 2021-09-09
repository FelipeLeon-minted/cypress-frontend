/// <reference types="cypress" />
import LoginPage from '../support/pages/LoginPage.js'
import HomePage from '../support/pages/HomePage.js'
import MyAccountPage from '../support/pages/MyAccountPage.js';
const loginPage = new LoginPage();
const homePage = new HomePage();
const myAccountPage = new MyAccountPage();

describe('Login tests', () => {
    beforeEach(() => {
        cy.visit('https://qa.mntd.net/')
    })

    it('Visit login page', () => {
        homePage.goToLoginPage();
        loginPage.login('automation1@minted.com', 'LX>)^4tr>HN}@~^8');
        homePage.goToAccountDetails();
        myAccountPage.emailAddressLabel().should('contain.text', 'automation1@minted.com');
    })
})
