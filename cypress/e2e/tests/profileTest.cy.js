import testData from "../../fixtures/testData.json";
import { profilePage } from "../../pages/profilePage";

const profileobj = new profilePage

//
describe("Personal Info", () => {
    
  it.skip("Personal Info", () => {

     //cy.login(testData.login.username, testData.login.password);
     cy.oneClickRegistration();
     profileobj.ProfileMenu();
     profileobj.profileNavigation();
     profileobj.profilename(testData.profile.fullName);
     profileobj.birthdaySelect();
     profileobj.genderSlect();
     profileobj.StateSlect();
     profileobj.citySlect();
     
  })
    
});


describe("Verification ", () => {
    
  it.skip("Verification", () => {

     cy.login(testData.login.username, testData.login.password);
     profileobj.ProfileMenu();
     profileobj.profileNavigation();
     profileobj.Verify_idendity();
     profileobj.Document_type();
     profileobj.Image_upload();
     
     
  })
    
});


describe("Phone & Email add and Edit ", () => {
    
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




   




      





