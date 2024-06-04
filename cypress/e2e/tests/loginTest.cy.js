import testData from "../../fixtures/testData.json";



describe(" Login ", () => {
    
  it("Login with valid data", () => {

    cy.login(testData.login.username, testData.login.password);
  
})       
   
  
  });