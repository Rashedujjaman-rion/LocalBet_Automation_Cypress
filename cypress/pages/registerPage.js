import { faker } from '@faker-js/faker';
export class RegisterPage {
  weblocators = {
    signUp: ".signup-btn",
    signUpButton: "//button[@type='submit' and .//span[text()='sign up ']]",  
    successMsg:".signup-confirmation-container > :nth-child(1) > .ant-typography" ,
    countrySelect:"//span[@class='ant-select-selection-item']/div/div/div/img[@alt='flag-icon']",
    countryType:"//input[@id='countryUuid']",
    countryIndiaClick:'//*[@class="ant-space-item"]//p[text()="India"]'
        
  };

  openURL() {
    cy.visit(Cypress.env('baseUrl'));
  }

  oneClickSignUp() {
    cy.get(this.weblocators.signUp).click();
    cy.wait(2000)
    cy.xpath(this.weblocators.signUpButton).click();
    cy.get(this.weblocators.successMsg).should('have.text', 'Thank you for Registration');
    cy.wait(2000);
    cy.xpath("(//div[@class='download-icon flex items-center justify-center'])[2]/img[@alt='Download']").click();
    cy.wait(4000);
    cy.xpath("//div[@class='action-icon flex justify-center items-center']//*[name()='svg']").click()
    cy.wait(2000);
    cy.xpath("//div[@class='flex items-center gap-3 bg-[#F4F4F4] rounded px-2 py-1 relative cursor-pointer']").click();
    cy.get('.p-4 > :nth-child(2) > .w-full > .ant-typography').click()
    
  }

   //oneClick registration with country,currency search

 
  oneClick_signup_with_search() {
    cy.get(this.weblocators.signUp).click();
  // Click on the flag icon to open the country selector dropdown
  cy.xpath(
    this.weblocators.countrySelect
  ).click();
  // Ensure the input field exists and force typing "India" into it
  cy.xpath(this.weblocators.countryType)
    .should("exist")
    .type("India", { force: true });
  // Wait for the dropdown options to be populated
  cy.wait(2000);
  // Select "India" from the dropdown options
  cy.xpath(this.weblocators.countryIndiaClick).click();
  cy.xpath(this.weblocators.signUpButton).click();
  cy.get(this.weblocators.successMsg).should('have.text', 'Thank you for Registration');
  cy.wait(2000);
  cy.xpath("(//div[@class='download-icon flex items-center justify-center'])[2]/img[@alt='Download']").click();
  cy.wait(4000);
  cy.xpath("//div[@class='action-icon flex justify-center items-center']//*[name()='svg']").click()
  cy.wait(2000);
  cy.xpath("//div[@class='flex items-center gap-3 bg-[#F4F4F4] rounded px-2 py-1 relative cursor-pointer']").click();
  cy.get('.p-4 > :nth-child(2) > .w-full > .ant-typography').click()
  }


//Email with signup
  email_with_signup(){

    cy.get(this.weblocators.signUp).click();
    cy.wait(4000)
    cy.get('#rc-tabs-4-tab-email > .ant-space').click()
    cy.get('#email').type(faker.internet.email());
    cy.get('#password').type("123456")
    cy.xpath(this.weblocators.signUpButton).click();
    cy.wait(2000);

    const otp="123456"
    function enterOtp() {
       

      // Iterate over each character of the OTP and type it into the corresponding input field
      otp.split('').forEach((digit, index) => {
          cy.get(`input[aria-label="Please enter OTP character ${index + 1}"]`)
              .type(digit, { delay: 0 }); // Set delay to 0 for faster typing
      });
      
  }
  enterOtp();
 
    cy.get('.ant-form-item-control-input-content > .ant-btn').click()
    cy.wait(2000);

    cy.xpath("//div[@class='flex items-center gap-3 bg-[#F4F4F4] rounded px-2 py-1 relative cursor-pointer']").click();
    cy.get('.p-4 > :nth-child(2) > .w-full > .ant-typography').click()
      

  }


  //Phone with signUp

  phone_with_signup() {
    cy.get(this.weblocators.signUp).click();
    cy.wait(4000);

    // Generate a random Bangladeshi phone number
    const generateBangladeshiPhoneNumber = () => {
        const prefixes = ['013', '014', '015', '016', '017', '018', '019'];
        const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const randomNumber = Math.floor(10000000 + Math.random() * 90000000); // Generates an 8-digit number
        return randomPrefix + randomNumber;
    }

    const phoneNumber = generateBangladeshiPhoneNumber();
    cy.get('[data-node-key="phone"]').click();
    cy.get('#phone').type(phoneNumber);
    cy.get('#password').type("123456");
    cy.xpath(this.weblocators.signUpButton).click();
    cy.wait(2000);

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
    cy.wait(2000);

    cy.xpath("//div[@class='flex items-center gap-3 bg-[#F4F4F4] rounded px-2 py-1 relative cursor-pointer']").click();
    cy.get('.p-4 > :nth-child(2) > .w-full > .ant-typography').click();
}

}


  


  












  

