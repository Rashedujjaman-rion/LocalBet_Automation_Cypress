import { faker } from '@faker-js/faker';
import 'cypress-file-upload';
export class profilePage {
    profileLocators = {
      ProfileMenu:"//div[@class='flex items-center gap-3 bg-[#F4F4F4] rounded px-2 py-1 relative cursor-pointer']",
      profileNavigation:"//span[text()='My Profile']",
      fullName: ".ant-input",
      birthDay: "input[placeholder='YYYY/MM/DD']",
      verify_button:'.mb-4 > .cursor-pointer',
      //resubmit: "//span[text()='Resubmit']",
      document_filed_click: "//span[@class='ant-select-selection-item' and @title='--']",
      national_id:"//div[@class='ant-space-item']//p[text()='National Id']",
      input_filed:"//div[@class='flex items-center justify-between content-info-right']//input[@placeholder='Enter Document ID']",
      upload_button:"//button[@type='button' and contains(@class, 'upload-btn') and .//span[text()='Upload Files']]",
      contact_info_m: "//div[contains(@class, 'bg-[#dee3ff]')]/img[@alt='checked' and contains(@src, 'edit-icon.svg')]",
      contact_info_m_b: "//div[contains(@class, 'ant-space-item')]//button[contains(@class, 'confirm-yes-btn') and span[text()='Yes ']]",

    };


    //ProfileMenu

    ProfileMenu(){
    
      cy.xpath(this.profileLocators.ProfileMenu).click();
  }

  //profile navigation

  profileNavigation(){
    
    cy.xpath(this.profileLocators.profileNavigation).click();

  }

    //Full name
     profilename(fullname) {
      //cy.wait(4000);
      cy.get(this.profileLocators.fullName).clear();
      cy.get(this.profileLocators.fullName).type(fullname);

    }
    //birthday
    birthdaySelect() {
     
      cy.get(this.profileLocators.birthDay, { timeout: 10000 }).should('be.visible').then((input) => {
        cy.wrap(input).click();
        cy.wrap(input).clear();
        cy.wrap(input).type('1990/05/10');
        
        
    });

  }
  
 // gender select
  genderSlect() {
    cy.xpath("(//div[@class='ant-select-selector'])[2]").click({multiple:true, force:true})
    cy.wait(1000)
    cy.xpath("//div[@class='w-full flex items-center gap-1']/p[text()='Male']").click({ multiple: true, force:true });

  }

  //State feature
  StateSlect() {
    cy.xpath("(//div[@class='ant-select-selector'])[3]").click({multiple: true, force:true})
    cy.xpath("(//p[contains(text(),'Rangpur Division')])[1]")
    .click({multiple: true, force:true});
  
  }


 //city feature
  citySlect() {
    cy.xpath("(//p[contains(text(),'Chilmāri')])[1]").click({multiple: true, force:true});
    cy.xpath("(//p[contains(text(),'Chilmāri')])[1]").should('be.visible').click({multiple: true, force:true});


  }

  //verification
    Verify_idendity() {

    //cy.xpath(this.profileLocators.resubmit, { timeout: 1000 }).click({force:true});
    cy.get(this.profileLocators.verify_button, { timeout: 5000 }).click({force:true});
    cy.get(this.profileLocators.verify_button, { timeout: 5000 }).should('be.visible').click({ force: true });
    cy.get(this.profileLocators.verify_button, { timeout: 5000 }).should('exist').click({ force: true });
   
}

  //document type
  Document_type(){

    cy.xpath(this.profileLocators.document_filed_click).click({ multiple: true, force: true }); 
    cy.xpath(this.profileLocators.national_id).click({force:true});
  
    const randomNumber = faker.datatype.number({ min: 100000000000, max: 999999999999 });
    cy.xpath(this.profileLocators.input_filed).type(randomNumber.toString());
   
  }


  Image_upload = () => {
   

    // Attach files
    cy.xpath("(//span[@class='underline cursor-pointer' and text()='Browse'])[1]").click();
    cy.get('input[type="file"]').eq(1).attachFile('images.jpeg');
    //cy.get('.upload-progress').should('not.exist'); // Adjust based on your app’s upload progress indicator

    cy.xpath("(//span[@class='underline cursor-pointer' and text()='Browse'])[2]").click();
    cy.get('input[type="file"]').eq(2).attachFile('user.jpg');

    //cy.xpath("//button[contains(@class, 'upload-btn')]").should('be.visible').click(); 
    cy.xpath("//button[@class='ant-btn css-1c0na6j ant-btn-primary ant-btn-lg flex items-center justify-center upload-btn gap-1']").should('be.visible').click(); 


 }


 //phone number add

  phone_add() {

    cy.xpath("(//div[@class='bg-[#dee3ff] sm:w-[34px] w-[25px] sm:h-[32px] h-[25px] flex justify-center items-center rounded-sm cursor-pointer'])[1]").click({ multiple: true, force: true });

    cy.wait(2000);
    
  
   
    cy.get('#phone > .ant-input').click();
    const generateBangladeshiPhoneNumber = () => {
      const prefixes = ['013', '014', '015', '016', '017', '018', '019'];
      const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      const randomNumber = Math.floor(10000000 + Math.random() * 90000000); // Generates an 8-digit number
      return randomPrefix + randomNumber;
  }

    const phoneNumber = generateBangladeshiPhoneNumber();
    cy.get('#phone > .ant-input').type(phoneNumber);
  


    cy.get('#phone > .ant-input').click();
    cy.get('.ant-form-item-control-input-content > .ant-btn > span').click();

    

    const otp="123456"
    function enterOtp() {
      // Iterate over each character of the OTP and type it into the corresponding input field
      otp.split('').forEach((digit, index) => {
          cy.get(`input[aria-label="Please enter OTP character ${index + 1}"]`)
              .type(digit, { delay: 0 }); // Set delay to 0 for faster typing
      });
  }
  enterOtp();

   //cy.get('.ant-form-item-control-input-content > .ant-btn > span').click();
   cy.get('.ant-form-item-control-input-content > .ant-btn > span').click({force:true})
  cy.get('.message').should('have.text', 'Your phone number has been added successfully!');
  cy.get('.action-icon').click( {multiple: true, force: true});


}

//phone number edit
phone_number_edit(){


  //cy.xpath("//div[@class='bg-[#dee3ff] sm:w-[34px] w-[25px] sm:h-[32px] h-[25px] flex justify-center items-center rounded-sm cursor-pointer']/img[@alt='checked']").click({ multiple: true, force: true });
  cy.xpath("(//div[@class='bg-[#dee3ff] sm:w-[34px] w-[25px] sm:h-[32px] h-[25px] flex justify-center items-center rounded-sm cursor-pointer'])[1]").click({multiple:true, force:true})

  cy.get(':nth-child(2) > .ant-btn').click({ multiple: true, force: true });

 
  const otp="123456"
  function enterOtp() {
    // Iterate over each character of the OTP and type it into the corresponding input field
    otp.split('').forEach((digit, index) => {
        cy.get(`input[aria-label="Please enter OTP character ${index + 1}"]`)
            .type(digit, { delay: 0 }); // Set delay to 0 for faster typing
    });
}
enterOtp();

 //cy.get('.ant-form-item-control-input-content > .ant-btn > span').click();
 cy.get('.ant-form-item-control-input-content > .ant-btn > span').click({multiple:true, force:true})
 
    cy.get('#phone > .ant-input').click();
    const generateBangladeshiPhoneNumber = () => {
      const prefixes = ['013', '014', '015', '016', '017', '018', '019'];
      const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      const randomNumber = Math.floor(10000000 + Math.random() * 90000000); // Generates an 8-digit number
      return randomPrefix + randomNumber;
  }

    const phoneNumber = generateBangladeshiPhoneNumber();
    cy.get('#phone > .ant-input').type(phoneNumber);
   

    cy.get('.ant-form-item-control-input-content > .ant-btn > span').click({multiple:true, force:true});

    const otp2="123456"
    function enterOtpp() {
      // Iterate over each character of the OTP and type it into the corresponding input field
      otp2.split('').forEach((digit, index) => {
          cy.get(`input[aria-label="Please enter OTP character ${index + 1}"]`)
              .type(digit, { delay: 0 }); // Set delay to 0 for faster typing
      });
  }
  enterOtpp();
  cy.get('.ant-form-item-control-input-content > .ant-btn > span').click({multiple:true, force:true})


  cy.get('.message').should('have.text', 'Your phone number has been updated successfully!');

  cy.get('.action-icon').click({multiple:true, force:true});

  }

profile_email_add(){

   cy.xpath("//div[@class='bg-[#dee3ff] sm:w-[34px] w-[25px] sm:h-[32px] h-[25px] flex justify-center items-center rounded-sm cursor-pointer']").click({multiple: true, force: true});
   
   cy.get('#email').type(faker.internet.email());
   cy.get('.ant-form-item-control-input-content > .ant-btn > span').click();
   const otp2="123456"
    function enterOtpp() {
      // Iterate over each character of the OTP and type it into the corresponding input field
      otp2.split('').forEach((digit, index) => {
          cy.get(`input[aria-label="Please enter OTP character ${index + 1}"]`)
              .type(digit, { delay: 0 }); // Set delay to 0 for faster typing
      });
  }
  enterOtpp();

  cy.get('.ant-form-item-control-input-content > .ant-btn > span').click();
  cy.get('.message').should('have.text', 'Your email has been added successfully!');

  cy.get('.action-icon').click();

  
}

//profile email edit

  profile_email_edit() {


    cy.xpath("(//div[@class='bg-[#dee3ff] sm:w-[34px] w-[25px] sm:h-[32px] h-[25px] flex justify-center items-center rounded-sm cursor-pointer'])[2]").click({ multiple: true, force: true });

    cy.wait(2000);
    cy.get(':nth-child(2) > .ant-btn').click({ multiple: true, force: true });

    const otp="123456"
    function enterOtp() {
      // Iterate over each character of the OTP and type it into the corresponding input field
      otp.split('').forEach((digit, index) => {
          cy.get(`input[aria-label="Please enter OTP character ${index + 1}"]`)
              .type(digit, { delay: 0 }); // Set delay to 0 for faster typing
      });
  }
  enterOtp();
  cy.get('.ant-form-item-control-input-content > .ant-btn > span').click({multiple:true, force:true});

  cy.get('#email').type(faker.internet.email());
   cy.get('.ant-form-item-control-input-content > .ant-btn > span').click();

   const otp6="123456"
   function enterOtp6() {
     // Iterate over each character of the OTP and type it into the corresponding input field
     otp6.split('').forEach((digit, index) => {
         cy.get(`input[aria-label="Please enter OTP character ${index + 1}"]`)
             .type(digit, { delay: 0 }); // Set delay to 0 for faster typing
     });
 }
 enterOtp6();

 cy.get('.ant-form-item-control-input-content > .ant-btn > span').click({multiple:true, force:true});

 cy.get('.message').should('have.text', 'Your email has been updated successfully!');

 cy.get('.action-icon').click({multiple:true, force:true});
   
  
 }

}


 

  

