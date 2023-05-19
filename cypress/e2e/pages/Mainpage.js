class MainPage {

    openWebSite(){
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        return this;
    }

    fillUsername(value){
        cy.get("[id='loginPanel'] [name='username']").type(value);
        return this;
    }

    fillPassword(number){
        cy.get("[id='loginPanel'] [name='password']").type(number);
        return this;
    }

    clickLogin(){
        cy.get("[id='loginPanel'] [class='button']").click();
        return this;
    }

    checkText(){

        cy.get("#rightPanel > div > div > h1").should ("have.text" , "Accounts Overview");
        return this;
    }


}

export default MainPage;