
export class LoginPage{

    loginLocator = {
       loginButton: ".login-btn",
       userName:"#username",
       password:"#password",
       loginSubmit:"button[type='submit']"
    }

    openURL() {
        cy.visit(Cypress.env('baseUrl'));
      }
    


    login_with_invalid_data(){       

        cy.get(this.login_with_invalid_data.loginButton).click()
        cy.get(this.login_with_invalid_data.userName).type(faker.internet.email)
        cy.get(this.login_with_invalid_data.password).type(faker.internet.password)
        cy.get(this.login_with_invalid_data.loginSubmit).click()
        
      
    }

}