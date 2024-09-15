import testData from "../../fixtures/loginData.json";
import { LoginPage } from "../../pages/loginPage";


const loginObj  = new LoginPage();

describe('Login and forgot password Testcases', () => {



  it.only('should read login credentials from the text file and perform login', () => {

    cy.oneClickRegistration();
    cy.xpath("//div[@class='flex items-center gap-3 bg-[#F4F4F4] rounded px-2 py-1 relative cursor-pointer']").click();
    cy.get('.p-4 > :nth-child(2) > .w-full > .ant-typography').click();
    // Path to the file
    const filePath = 'cypress/downloads/localbet-login-credential.txt';

    // Read the file
    cy.readFile(filePath).then((text) => {
        // Assuming the text format is: "AccountId: <value> Password: <value>"
        const regex = /AccountId:\s*(\S+)\s*Password:\s*(\S+)/;
        const matches = text.match(regex);

        // Extract the AccountId and Password
        const accountId = matches[1];
        const password = matches[2];

        // Use the AccountId and Password in your login flow
        cy.read_data_with_login(accountId, password);
        

        
    });
});



  it("login with valid data",() => {
      
      cy.login('rashed@softic.ai', '123456');
      // logout 
      cy.xpath("//div[@class='flex items-center gap-3 bg-[#F4F4F4] rounded px-2 py-1 relative cursor-pointer']").click();
      cy.get('.p-4 > :nth-child(2) > .w-full > .ant-typography').click()
  });



it("Login with invalid data", () => {

 loginObj.openURL()
 loginObj.login_with_invalid_data()

}) 
   


it("Forgot password with email", () => {

  loginObj.openURL()
  loginObj.forgot_password_with_email()
 
 }) 


 it.skip("Forgot password with accountID", () => {

  loginObj.openURL()
  loginObj. forgot_password_with_accountId()
 
 }) 




 it("Forgot password with phone", () => {

  loginObj.openURL()
  loginObj.forgot_password_with_phone()
 
 }) 








  
  });