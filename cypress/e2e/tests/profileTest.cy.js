import testData from "../../fixtures/testData.json";
import { profilePage } from "../../pages/profilePage";

//Profile variable
const profileobj = new profilePage

//Personal Info
describe("Personal Info", () => {
    
  it("Personal Info", () => {

     cy.login(testData.login.username, testData.login.password);
     //cy.oneClickRegistration();
     profileobj.ProfileMenu();
     profileobj.profileNavigation();
     profileobj.profilename(testData.profile.fullName);
     profileobj.birthdaySelect();
     profileobj.genderSlect();
     profileobj.StateSlect();
     profileobj.citySlect();
     
  })
    
});

//Verification
describe("Verification ", () => {
    
  it("Verification With Doc Type And Image upload", () => {
     cy.login(testData.login.username, testData.login.password);
     //cy.oneClickRegistration();
     profileobj.ProfileMenu();
     profileobj.profileNavigation();
     profileobj.Verify_idendity();
     profileobj.Document_type();
     profileobj.Image_upload();
     
     
  })
    
});

//Contact Info
describe("Contact Info", () => {
    
   it("Phone & Email Add and Edit  With Valid Data", () => {

     cy.oneClickRegistration();
     //cy.login(testData.login.username, testData.login.password);
     profileobj.ProfileMenu();
     profileobj.profileNavigation();
     profileobj.phone_add();
     profileobj.phone_number_edit();
     profileobj.profile_email_add();
     profileobj.profile_email_edit();

 
  })
    
});




   




      





