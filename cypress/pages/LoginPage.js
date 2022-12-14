class LoginPage {
    //element call section
    elements = {
        emailInputBox: () => cy.get('input[type="text"]'),
        passwordInputBox: () =>  cy.get('input[type="password"]'),
        signInButton: () => cy.get('button').contains('Login'),
        dashboardHeader: () => cy.get('.mantine-4bipru').contains('Dashboard')
        //errorNotification: () => cy.get('.ant-message-notice-content')
    }
    //action call section
    userLogin = (username, password) => {
        this.elements.emailInputBox().type(username)
        this.elements.passwordInputBox().type(password)
        this.elements.signInButton().click()         
    }

    verifyElementsAfterLogin = () => {
        //universal wait
        //cy.wait(10000)

        //option3 - wait for API to finish calling by using intercept command
        cy.intercept('https://cloudshift.uat.digitalrecruiter.net/')
        cy.url().should('eq', Cypress.env('baseUrl'))
        this.elements.dashboardHeader().should('be.visible')
    }

    verifyLoginError = () => {
        const error = this.elements.errorNotification().should('be.visible')
        try{
        if(error.contains('Incorrect username or password.')){
            throw "Incorrect username or password"
        }
        if(error.contains('Password attempts exceeded')){
            throw "Password attempts exceeded."
        }
        }catch(err) {
            err
        }
    }
    
}

module.exports = new LoginPage();