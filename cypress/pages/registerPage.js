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
  }
 
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
  }
  
}