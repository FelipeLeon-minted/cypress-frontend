var pageLocators = {
    usernameTextInput: ".form [name='email']",
    passwordTextInput: ".form [name='password']",
    loginButton: ".form .loginButton"
}

class LoginPage {
    usernameTextInput() {return cy.get(pageLocators.usernameTextInput);}
    passwordTextInput() {return cy.get(pageLocators.passwordTextInput);}
    loginButton() {return cy.get(pageLocators.loginButton);}

    login(username, password){
        this.usernameTextInput().type(username);
        this.passwordTextInput().type(password);
        this.loginButton().click();
    }
}

export default LoginPage;