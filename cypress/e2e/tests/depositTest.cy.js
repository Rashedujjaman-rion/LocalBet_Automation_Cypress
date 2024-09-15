import { DepositPage } from "../../pages/depositPage";

const depositObj = new DepositPage();



describe('Deposit module testcases',() => {

    it("Deposit with valid data",() => {
        
        depositObj.deposit_with_valid_data();
       
    });



})
  