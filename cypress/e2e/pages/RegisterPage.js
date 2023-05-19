class RegisterPage{  
        
        clicktoRegister(){
            cy.get("#loginPanel > p:nth-child(3) > a:nth-child(1)").click();
            return this;

        }

        checkText(){
            cy.get("#rightPanel > h1").should("have.text","Signing up is easy!")
            return this;
        }

        firstName(){
            cy.get("[id='customer.firstName']").type("VELI")
            return this;

        }
        lastName(){
            cy.get("[id='customer.lastName']").type("ESEN")
            return this;

        }
        streetName(){
            cy.get("[id='customer.address.street']").type("Atakent")
            return this;

        }
        cityName(){
            cy.get("[id='customer.address.city']").type("Massachussets")
            return this;

        }
        stateName(){
            cy.get("[id='customer.address.state']").type("NJ")
            return this;

        }
        zipCode(){
            var zip=Math.floor(Math.random()*10000);
            cy.get("[id='customer.address.zipCode']").type(zip);
            return this;


        }
        phoneNumber(phoneNumber) {
            cy.get("[id='customer.phoneNumber']").type(phoneNumber)
            return this;


        }
        ssnNumber(ssn){
            cy.get("[id='customer.ssn']").type(ssn)
            return this;


        }
        userName(username1){
            cy.get("[id='customer.username']").type(username1)
            return this;

        }
        password(password1){
            cy.get("[id='customer.password']").type(password1)
            return this;


        }
        repeatedPassword(password2){
            cy.get("[id='repeatedPassword']").type(password2);
            return this;

        }
        completeRegister(){
            cy.get("#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input").click()
            return this;

        }
}

export default RegisterPage;