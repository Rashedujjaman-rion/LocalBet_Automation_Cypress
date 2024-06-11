import testData from "../../fixtures/testData.json";
import { LoginPage } from "../../pages/loginPage";


const loginObj  = new loginPage();

describe(" Login ", () => {
    
  it("Login with valid data", () => {

    cy.login(testData.login.username, testData.login.password);
  
})      

it("Login with invalid data", () => {

  

}) 
   
  
  });