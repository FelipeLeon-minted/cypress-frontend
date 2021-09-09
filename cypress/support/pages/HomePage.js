var homePageLocators = {
    loginButton: "[href='/login']",
    userButton: ".utility-nav__item--avatar",
    accountButton: "Account"
}

class HomePage {
    loginButton() {return cy.get(homePageLocators.loginButton);}
    userButton() {return cy.get(homePageLocators.userButton);}
    accountButton() {return cy.contains(homePageLocators.accountButton);}
    
    initialGoToHomePage(){
        cy.visit('https://qa.mntd.net/')
    }

    goToLoginPage(){
        this.loginButton().click();
    }

    goToAccountDetails(){
        this.userButton().click();
        this.accountButton().click();
    }
}

export default HomePage;