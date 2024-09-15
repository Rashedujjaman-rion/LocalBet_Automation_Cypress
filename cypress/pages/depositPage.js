export class DepositPage{


    deposit_with_valid_data(){
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
        
        };
        


}



