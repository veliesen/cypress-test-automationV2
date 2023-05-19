import ForgetInfoPage from "../pages/ForgetInfoPage";
import MainPage from "../pages/Mainpage";

describe('Login Module', () =>{
    const main = new MainPage;
    const forgetInfo=new ForgetInfoPage;

    it ('TC001 - Login User Control', () => {
        main.openWebSite();
        main.fillUsername("veli123");
        main.fillPassword(12345);
        main.clickLogin();     

    })
    it ('TC002 - Login User Control', () => {

        main.openWebSite();
        main.fillUsername("ali123");
        main.fillPassword(123);
        main.clickLogin();     

    })
    it ('TC003 - Login User Control', () => {

        main.openWebSite();
        main.fillUsername("ahmet");
        main.fillPassword(1234);
        main.clickLogin();     

    })
    it ('TC004 - Forget User Control', () => {

        main.openWebSite();
        forgetInfo.clickForgetInfo()
        forgetInfo.checkText();

           

    })

})

