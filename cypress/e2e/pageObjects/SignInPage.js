/// <reference types ="Cypress" />

import { signInPageLocators } from "../pageLocators/signInPageLocators";

class SignIn {
    fillInEmail(email){
        cy.fillIn(signInPageLocators.emailInput, email)
        // cy.xpath(signInPageLocators.emailInput).type('linh')
        cy.clickAnElement(signInPageLocators.createAnAccount)
    }
    getErrorMessage(){
        return cy.getAnElement(signInPageLocators.createAccountError)
    }
    getHeading(){
        return cy.getAnElement(signInPageLocators.heading)
    }
    fillInPersonalInformation(){
        cy.clickAnElement(signInPageLocators.Mr)
        cy.fillIn(signInPageLocators.firstName, 'Linh')
        cy.fillIn(signInPageLocators.lastName, 'Nguyen')
        cy.fillIn(signInPageLocators.password, '12345@')
        cy.dropdown(signInPageLocators.date, '1')
        cy.dropdown(signInPageLocators.month, '2')
        cy.dropdown(signInPageLocators.year,'1991')
        cy.fillIn(signInPageLocators.address, '17 ton duc thang')
        cy.fillIn(signInPageLocators.city, 'Hanoi')
        cy.dropdown(signInPageLocators.state, '1')
        cy.fillIn(signInPageLocators.zipcode, '10000')
        cy.fillIn(signInPageLocators.mobile, '0987688934')
        cy.clickAnElement(signInPageLocators.registerButton)
    }
    
    signIn(email, password){
        cy.fillIn(signInPageLocators.emailSignIn, email)
        cy.fillIn(signInPageLocators.password, password)
    }
    getErrorMessage2(){
        return cy.getAnElement(signInPageLocators.authenticationFail)
    }
}

export default SignIn;