// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add('clickAnElement', (locator) =>{
    cy.xpath(locator).click();
})
Cypress.Commands.add('getAnElement', (locator) =>{
    return cy.xpath(locator)
})

Cypress.Commands.add('fillIn', (locator, content) =>{
    cy.xpath(locator).type(content);
})
Cypress.Commands.add('dropdown', (locator, option) =>{
    cy.xpath(locator).select(option);
})

Cypress.Commands.add('clickRandom', (locator) => {
    cy.xpath(locator).then( ($ele)=>{
        const index = Math.floor(Math.random()*$ele.length)
        cy.wrap($ele[index]).invoke('text').as('text')
        cy.wrap($ele[index]).click()
        return cy.wrap('@text')
    })}
)
Cypress.Commands.add('getElement', (locator) => {
    return cy.xpath(locator)
})

Cypress.Commands.add('getText', ((locator)=>{
    return cy.xpath(locator).text();
}))

Cypress.Commands.add('getInteger', ((locator) => {
    return cy.xpath(locator).invoke('text').then(parseInt)
}))
// import 'cypress-file-upload'
//s
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })