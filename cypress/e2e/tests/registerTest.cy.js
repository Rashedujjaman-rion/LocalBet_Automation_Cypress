import { RegisterPage } from "../../pages/registerPage";


const registerObj = new RegisterPage();
import registerData from "../../fixtures/registerData.json";

describe(" Registration check with valid data", () => {
  it("oneClick registration ", () => {

    registerObj.openURL();
    registerObj.oneClickSignUp();
    // registerObj.openURL();
    // registerObj.enterFirstName(registerData.firstName);
   });


   it.only("oneClick registration with search ", () => {

    registerObj.openURL();
    registerObj.oneClick_signup_with_search()
    
   });



  
});
