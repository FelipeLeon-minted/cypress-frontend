var myAccountPageLocators = {
    emailAddressLabel: ".my-account-my-profile dd:eq(2)"
}

class MyAccountPage {
    emailAddressLabel() {return cy.get(myAccountPageLocators.emailAddressLabel);}
}

export default MyAccountPage;