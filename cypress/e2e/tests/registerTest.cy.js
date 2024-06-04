import { registerPage } from "../../pages/registerPage";
const registerObj = new registerPage();
import registerData from "../../fixtures/registerData.json";

describe(" Registration check with valid data", () => {
  it("oneClick registration ", () => {

    registerObj.openURL();
    registerObj.oneClickSignUp();
    // registerObj.openURL();
    // registerObj.enterFirstName(registerData.firstName);
   });

   it("oneClick registration ", () => {

    registerObj.openURL();
    registerObj.oneClickSignUp();
    // registerObj.openURL();
    // registerObj.enterFirstName(registerData.firstName);
   });

   it.only("oneClick registration ", () => {

    registerObj.openURL();
    registerObj.oneClick_signup_with_search()
    // registerObj.openURL();
    // registerObj.enterFirstName(registerData.firstName);
   });



  
});
