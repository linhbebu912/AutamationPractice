/// <reference types ="Cypress" />

import { homePagelocators } from "../pageLocators/homePageLocators";
import { signInPageLocators } from "../pageLocators/signInPageLocators";


class HomePage {

    clickSignInButton(){
        cy.clickAnElement(homePagelocators.signInButton)
}

}

export default HomePage;