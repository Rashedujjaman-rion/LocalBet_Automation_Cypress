
import { faker } from '@faker-js/faker';
import 'cypress-file-upload';



// it("Identity document", () => {
//     cy.login('azim@softic.ai', '111111');
//     cy.get('.gap-4 > .gap-3').click();
//     cy.get('[href="/user/profile/personal-information"]').click();
//     cy.get('.mb-4 > .cursor-pointer').click();
    
//     cy.xpath("//span[@class='ant-select-selection-item' and @title='--']").click();
//     cy.xpath("//div[@class='ant-space-item']//p[text()='National Id']").click();

//     // Generate a random 13-digit number
//     const randomNumber = faker.datatype.number({ min: 1000000000000, max: 9999999999999 });
//     cy.get(':nth-child(4) > .content-info-right > .ant-input').type(randomNumber.toString());

//     cy.xpath("(//span[@class='underline cursor-pointer' and text()='Browse'])[1]").click();
  
//     cy.get('input[type="file"]').eq(1).attachFile('test.png');    
   
//     cy.xpath("(//span[@class='underline cursor-pointer' and text()='Browse'])[2]").click();   
//     cy.get('input[type="file"]').eq(2).attachFile('test2.png');

//     // Wait to ensure file is processed
//     cy.wait(1000);

//     // Optionally, click the "Upload Files" button
//     cy.get('.mb-8 > .ant-btn').click({force:true});

//     // Wait to see if the toast still appears
//     cy.wait(3000);

    
// });




it.skip("Identity document", () => {
    cy.login('azim@softic.ai', '111111');
    cy.get('.gap-4 > .gap-3').click();
    cy.get('[href="/user/profile/personal-information"]').click();


    cy.get('.mb-4 > .cursor-pointer').click();
    
    cy.xpath("//span[@class='ant-select-selection-item' and @title='--']").click();
    cy.xpath("//div[@class='ant-space-item']//p[text()='National Id']").click();

    // Generate a random 13-digit number
    const randomNumber = faker.datatype.number({ min: 1000000000000, max: 9999999999999 });
    cy.get(':nth-child(4) > .content-info-right > .ant-input').type(randomNumber.toString());

   // Interact with the file input and attach the file
    cy.xpath("(//input[@type='file' and @accept='image/png, image/jpeg, image/jpg' and @style='display: none;'])[1]").as('fileInput1');
    cy.get('@fileInput1').attachFile('test.png');

// Verify that the file was selected (this step can be tricky; Cypress might not be able to verify directly)
    cy.get('@fileInput1').then(input => {
    expect(input[0].files[0].name).to.equal('test.png');
    });

    cy.xpath("(//input[@type='file' and @accept='image/png, image/jpeg, image/jpg' and @style='display: none;'])[2]").as('fileInput2');
    cy.get('@fileInput2').attachFile('test2.png');

// Verify that the file was selected
    cy.get('@fileInput2').then(input => {
    expect(input[0].files[0].name).to.equal('test2.png');
    });

    
    cy.wait(5000);
    // Optionally, click the "Upload Files" button
    cy.get('.mb-8 > .ant-btn').click();   
    cy.wait(1000);
});




it.skip("Deposit with valid data", () => {
cy.login('azim@softic.ai', '111111');
cy.get('.gap-4 > .gap-3').click();
cy.get('[href="/user/profile/personal-information"]').click();
cy.wait(1000);
cy.xpath("//span[@class='ant-menu-title-content']/a[@href='/user/account/deposit']").click();
cy.wait(1000);
cy.xpath("(//div[contains(@class, 'gateway-card payment-gateway-card flex flex-col justify-center items-center cursor-pointer relative')])[2]").click()
 // Generate a random Bangladeshi phone number
 const generateBangladeshiPhoneNumber = () => {
    const prefixes = ['013', '014', '015', '016', '017', '018', '019'];
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomNumber = Math.floor(10000000 + Math.random() * 90000000); // Generates an 8-digit number
    return randomPrefix + randomNumber;
}

const phoneNumber = generateBangladeshiPhoneNumber();
cy.get('#mobileNumber').type(phoneNumber);
cy.get('#mobileTrxId').type("xcrwererweewere556ghfdg");
cy.get('#amount').type("500");
cy.get('.ant-form-item-control-input-content > .mb-2').click();
cy.wait(1000);
cy.get('.success-footer > .ant-btn').click();
cy.get('.pending-history > .ant-btn').click({multiple: true,force: true});
cy.get(':nth-child(2) > .ant-btn > span').click()
cy.wait(2000);

});



describe('Login Test', () => {
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
});
