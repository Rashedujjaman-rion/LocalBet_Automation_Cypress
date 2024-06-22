import testData from "../../fixtures/testData.json";
import { LoginPage } from "../../pages/loginPage";


const loginObj  = new LoginPage();

describe(" Login ", () => {
    
  it("Login with valid data", () => {

    cy.login(testData.login.username, testData.login.password);
  
})      

it.skip("Login with invalid data", () => {

 loginObj.openURL()
 loginObj.login_with_invalid_data()

}) 
   
  
  });