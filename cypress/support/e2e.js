// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Custom command for login
Cypress.Commands.add('login', (username, password) => {
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
})

// Custom command for checking table data
Cypress.Commands.add('have.validTableData', { prevSubject: true }, (subject) => {
    cy.wrap(subject).find('tr').should('have.length.at.least', 1)
    cy.wrap(subject).find('th').should('exist')
    cy.wrap(subject).find('td').should('exist')
})

// Custom command for waiting for an element to be visible
Cypress.Commands.add('waitForElement', (selector, timeout = 10000) => {
    cy.get(selector, { timeout }).should('be.visible')
})

// Custom command for clearing and typing in an input
Cypress.Commands.add('clearAndType', { prevSubject: true }, (subject, text) => {
    cy.wrap(subject).clear().type(text)
})

// Custom command for checking if an element exists
Cypress.Commands.add('elementExists', (selector) => {
    cy.get('body').then(($body) => {
        if ($body.find(selector).length > 0) {
            return cy.wrap(true)
        }
        return cy.wrap(false)
    })
})