import { faker } from '@faker-js/faker';
export class LoginPage{

    loginLocator = {
       loginButton: ".login-btn",
       userName:"#username",
       password:"#password",
       loginSubmit:"button[type='submit']",
       invalid_msg:'.Toastify__toast-body > :nth-child(2)'
    }

    openURL() {
        cy.visit(Cypress.env('baseUrl'));
      }
    


    login_with_invalid_data(){       

        cy.get(this.loginLocator.loginButton).click()
        cy.get(this.loginLocator.userName).type(faker.internet.email({ firstName: 'rashed' }))
        cy.get(this.loginLocator.password).type(faker.internet.password({ length: 8 }))
        cy.get(this.loginLocator.loginSubmit).click()
        cy.get(this.loginLocator.invalid_msg).should('have.text', 'User not found')
        
      
    }

}