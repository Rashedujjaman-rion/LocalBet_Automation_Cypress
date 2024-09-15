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
    


    login_with_invalid_data() {       

        cy.get(this.loginLocator.loginButton).click()
        cy.get(this.loginLocator.userName).type(faker.internet.email({ firstName: 'rashed' }))
        cy.get(this.loginLocator.password).type(faker.internet.password({ length: 8 }))
        cy.get(this.loginLocator.loginSubmit).click()
        cy.get(this.loginLocator.invalid_msg).should('have.text', 'User not found')
        
      
    }

    forgot_password_with_email() {
        cy.get('.ant-space > :nth-child(1) > .ant-btn').click();
        cy.get('.forgot-btn').click();
        cy.get('#username').type("rashed@softic.ai");
        cy.get('.ant-form-item-control-input-content > .ant-btn').click();
    
        const otp = "123456";
        function enterOtp() {
            // Iterate over each character of the OTP and type it into the corresponding input field
            otp.split('').forEach((digit, index) => {
                cy.get(`input[aria-label="Please enter OTP character ${index + 1}"]`)
                    .type(digit, { delay: 0 }); // Set delay to 0 for faster typing
            });
        }
        enterOtp();
    
        cy.get('.ant-form-item-control-input-content > .ant-btn').click();
    
        // Generate a random 8-digit password
        const generateRandomPassword = () => {
            return Math.random().toString().slice(2, 10); // Slices out 8 digits
        }
    
        const newPassword = generateRandomPassword();
        cy.get('#newPassword').type(newPassword);
        cy.get('#confirmPassword').type(newPassword);
        cy.get('.ant-form-item-control-input-content > .ant-btn').click();
        cy.get('.reset-text').should('contain.text', 'Your password has reset');
        cy.get('.action-icon').click();
        cy.wait(2000)
    }
    

    forgot_password_with_accountId() {
        cy.get('.ant-space > :nth-child(1) > .ant-btn').click();
        cy.get('.forgot-btn').click();
        cy.get('#username').type("3a090f012");
        cy.get('.ant-form-item-control-input-content > .ant-btn').click();
    
        const otp = "123456";
        function enterOtp() {
            // Iterate over each character of the OTP and type it into the corresponding input field
            otp.split('').forEach((digit, index) => {
                cy.get(`input[aria-label="Please enter OTP character ${index + 1}"]`)
                    .type(digit, { delay: 0 }); // Set delay to 0 for faster typing
            });
        }
        enterOtp();
    
        cy.get('.ant-form-item-control-input-content > .ant-btn').click();
    
        // Generate a random 8-digit password
        const generateRandomPassword = () => {
            return Math.random().toString().slice(2, 10); // Slices out 8 digits
        }
    
        const newPassword = generateRandomPassword();
        cy.get('#newPassword').type(newPassword);
        cy.get('#confirmPassword').type(newPassword);
        cy.get('.ant-form-item-control-input-content > .ant-btn').click();
        cy.get('.reset-text').should('contain.text', 'Your password has reset');
        cy.get('.action-icon').click();
        cy.wait(2000)
    }


    
    forgot_password_with_phone() {
        cy.get('.ant-space > :nth-child(1) > .ant-btn').click();
        cy.get('.forgot-btn').click();
        cy.wait(2000)
        cy.get('#rc-tabs-5-tab-phone > .ant-space').click();
        cy.wait(2000)
        cy.get('#phone > .ant-input').type("01921298565");
        cy.wait(2000)
        cy.get('#phone > .ant-input').click()
        cy.get('.ant-form-item-control-input-content > .ant-btn').click();
    
        const otp = "123456";
        function enterOtp() {
            // Iterate over each character of the OTP and type it into the corresponding input field
            otp.split('').forEach((digit, index) => {
                cy.get(`input[aria-label="Please enter OTP character ${index + 1}"]`)
                    .type(digit, { delay: 0 }); // Set delay to 0 for faster typing
            });
        }
        enterOtp();
    
        cy.get('.ant-form-item-control-input-content > .ant-btn').click();
    
        // Generate a random 8-digit password
        const generateRandomPassword = () => {
            return Math.random().toString().slice(2, 10); // Slices out 8 digits
        }
    
        const newPassword = generateRandomPassword();
        cy.get('#newPassword').type(newPassword);
        cy.get('#confirmPassword').type(newPassword);
        cy.get('.ant-form-item-control-input-content > .ant-btn').click();
        cy.get('.reset-text').should('contain.text', 'Your password has reset');
        cy.get('.action-icon').click();
        cy.wait(2000)
    }



    }

