import { RegisterPage } from "../../pages/registerPage";
const registerObj = new RegisterPage();


describe(" Registration check with valid data", () => {
  it("oneClick registration ", () => {

    registerObj.openURL();
    registerObj.oneClickSignUp();
    
   });


   it("oneClick registration with search ", () => {

    registerObj.openURL();
    registerObj.oneClick_signup_with_search()
    
   });


   it("Email with registration", () => {

    registerObj.openURL();
    registerObj.email_with_signup()
    
   });



   it("Phone with registration", () => {

    registerObj.openURL();
    registerObj.phone_with_signup()
   })





  
});
