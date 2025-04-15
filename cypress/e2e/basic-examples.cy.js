/**
 * Basic Cypress Examples
 * This file demonstrates fundamental Cypress features and best practices
 */

describe('Basic Cypress Examples', () => {
    // beforeEach hook runs before each test
    beforeEach(() => {
        // Visit the base URL defined in cypress.config.js
        cy.visit('/')
    })

    // Example 1: Basic element selection and interaction
    it('demonstrates basic element selection and interaction', () => {
        // cy.get() - Select elements using CSS selectors
        cy.get('button').should('be.visible')

        // cy.contains() - Select elements by text content
        cy.contains('Submit').click()

        // cy.type() - Type text into input fields
        cy.get('input[type="text"]').type('Hello, Cypress!')

        // cy.clear() - Clear input fields
        cy.get('input[type="text"]').clear()
    })

    // Example 2: Assertions and validation
    it('demonstrates assertions and validation', () => {
        // Should assertions
        cy.get('h1').should('have.text', 'Welcome')
        cy.get('button').should('be.enabled')

        // Expect assertions
        cy.get('ul li').should(($items) => {
            expect($items).to.have.length(3)
            expect($items[0]).to.contain('First item')
        })
    })

    // Example 3: Working with forms
    it('demonstrates form handling', () => {
        // Fill out a form
        cy.get('form').within(() => {
            cy.get('input[name="username"]').type('testuser')
            cy.get('input[name="password"]').type('password123')
            cy.get('select').select('Option 1')
            cy.get('input[type="checkbox"]').check()
            cy.get('input[type="radio"]').first().check()
        })

        // Submit the form
        cy.get('form').submit()
    })

    // Example 4: Working with APIs
    it('demonstrates API testing', () => {
        // Make a GET request
        cy.request('GET', '/api/users').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(3)
        })

        // Make a POST request
        cy.request('POST', '/api/users', {
            name: 'New User',
            email: 'new@example.com'
        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    })

    // Example 5: Working with files
    it('demonstrates file handling', () => {
        // Upload a file
        cy.get('input[type="file"]').attachFile('example.txt')

        // Download a file
        cy.get('a[download]').click()
        cy.readFile('cypress/downloads/example.txt').should('exist')
    })

    // Example 6: Working with iframes
    it('demonstrates iframe handling', () => {
        // Access elements within an iframe
        cy.get('iframe').then(($iframe) => {
            const $body = $iframe.contents().find('body')
            cy.wrap($body).find('button').click()
        })
    })

    // Example 7: Custom commands
    it('demonstrates custom commands', () => {
        // Custom login command (defined in support/commands.js)
        cy.login('username', 'password')

        // Custom assertion command
        cy.get('table').should('have.validTableData')
    })

    // Example 8: Working with aliases
    it('demonstrates aliases', () => {
        // Create an alias
        cy.get('ul li').as('listItems')

        // Use the alias
        cy.get('@listItems').should('have.length', 3)
    })

    // Example 9: Working with timeouts and retries
    it('demonstrates timeouts and retries', () => {
        // Custom timeout
        cy.get('.slow-loading-element', { timeout: 10000 }).should('be.visible')

        // Retry-until
        cy.get('button')
            .should('be.disabled')
            .then(($button) => {
                // Custom retry logic
                return cy.wrap($button).should('be.enabled')
            })
    })
}) 