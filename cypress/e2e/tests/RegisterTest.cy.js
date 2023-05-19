import RegisterPage from "../pages/RegisterPage";
import BaseLib from "../base/BaseLib";

describe('Register Page', () =>{
    const registerPage=new RegisterPage
    const baseLib =new BaseLib
    
    it ('TC002 - Register User ', () => {  

        
        
        cy.visit("https://parabank.parasoft.com/parabank/index.htm");      

        registerPage.clicktoRegister();
        registerPage.firstName();
        registerPage.lastName();
        registerPage.streetName();
        registerPage.phoneNumber(baseLib.randomNumber());
        registerPage.cityName();
        registerPage.stateName();
        registerPage.zipCode();
        registerPage.ssnNumber(222);
        registerPage.userName("veli"+ baseLib.randomNumber());
        registerPage.password(12345);
        registerPage.repeatedPassword(12345);
        registerPage.completeRegister();


        
        

    })

   
})
