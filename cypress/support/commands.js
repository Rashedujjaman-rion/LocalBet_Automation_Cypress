require('cypress-xpath');
import { faker } from '@faker-js/faker';
import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand')




// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />
/// <reference types="cypress-xpath" />


// Cypress.Commands.add('generateRandomData', () => {
//   const operatorCode = faker.helpers.arrayElement(['3', '4', '5', '6', '7', '8', '9']); 
//   const phoneNumber = `+8801${operatorCode}${faker.number.numeric(8)}`;
  
//   return {
//     firstName: faker.person.firstName(),
//     lastName: faker.person.lastName(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//     phoneNumber: phoneNumber,
//   };
// });

Cypress.Commands.add("login", (username, password) => {
    cy.visit("https://dev-user.localbet.xyz/");
    cy.get(".login-btn").click({multiple:true, force:true});
    cy.wait(2000)
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get("button[type='submit']").click();
    cy.url().should('eq', 'https://dev-user.localbet.xyz/') 
    cy.wait(2000)
  });


  Cypress.Commands.add("read_data_with_login", (username, password) => {
    //cy.visit("https://dev-user.localbet.xyz/");
    cy.get(".login-btn").click({multiple:true, force:true});
    cy.wait(2000)
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get("button[type='submit']").click();
    cy.url().should('eq', 'https://dev-user.localbet.xyz/') 
    cy.wait(2000)
  });





  Cypress.Commands.add('oneClickRegistration', function() {
    cy.visit("https://dev-user.localbet.xyz/");
    cy.get('.signup-btn').click({ multiple: true, force: true });
    cy.wait(2000);
    cy.xpath("//button[@type='submit' and .//span[text()='sign up ']]").click();
    cy.get(".signup-confirmation-container > :nth-child(1) > .ant-typography").should('have.text', 'Thank you for Registration');
    cy.wait(2000);
    cy.xpath("(//div[@class='download-icon flex items-center justify-center'])[2]/img[@alt='Download']").click();
    cy.wait(4000);
    cy.xpath("//div[@class='action-icon flex justify-center items-center']//*[name()='svg']").click();
    cy.wait(2000);
    //cy.xpath("//div[@class='flex items-center gap-3 bg-[#F4F4F4] rounded px-2 py-1 relative cursor-pointer']").click();
    //cy.get('.p-4 > :nth-child(2) > .w-full > .ant-typography').click();
});

 