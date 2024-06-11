require('cypress-xpath');
import { faker } from '@faker-js/faker';

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



// cypress/support/commands.js
import { faker } from '@faker-js/faker';

Cypress.Commands.add('generateRandomData', () => {
  const operatorCode = faker.helpers.arrayElement(['3', '4', '5', '6', '7', '8', '9']); 
  const phoneNumber = `+8801${operatorCode}${faker.number.numeric(8)}`;
  
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phoneNumber: phoneNumber,
  };
});




Cypress.Commands.add("login", (username, password) => {
    cy.visit("https://dev-user.localbet.xyz/");
    cy.get(".login-btn").click();
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get("button[type='submit']").click();
  });
