class ForgetInfoPage{

    clickForgetInfo (){

        cy.get("#loginPanel > p:nth-child(2) > a").click()
        return this;
    }

    checkText(){
        cy.get("#rightPanel > h1").should("have.text", "Customer Lookup")
        return this;
    }


}
export default ForgetInfoPage;