/// <reference types="cypress" />

describe('General', () => {
    // Constants for reusable values
    const BASE_URL = 'https://fyrre-magazine-self.vercel.app/';
    const EMAIL_INPUT = '[placeholder="example@mail.com"]';
    const NAV_LINKS = {
        HOME: '[href="/"] > li',
        MAGAZINE: '[href="/magazine"] > li',
        AUTHORS: '[href="/authors"] > li',
        PODCAST: '[href="/podcast"] > li'
    };

    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit(BASE_URL);
    });

    it('should test email input functionality', () => {
        // Test basic email input
        cy.get(EMAIL_INPUT)
            .click()
            .clear()
            .type('test@test.com')
            .should('have.value', 'test@test.com');

        // Test special characters
        cy.get(EMAIL_INPUT)
            .clear()
            .type('test+special@test.com')
            .should('have.value', 'test+special@test.com');

        // Test typing with delay
        cy.get(EMAIL_INPUT)
            .clear()
            .type('slow@typing.com', { delay: 100 })
            .should('have.value', 'slow@typing.com');
    });

    it('should test navigation functionality', () => {
        // Helper function for navigation tests
        const navigateAndVerify = (selector, expectedPath) => {
            cy.get(selector)
                .click()
                .wait(2000) // Consider using cy.intercept() instead of wait
                .url()
                .should('include', expectedPath);
        };

        // Test navigation to different sections
        navigateAndVerify(NAV_LINKS.MAGAZINE, '/magazine');
        navigateAndVerify(NAV_LINKS.HOME, '/');
        navigateAndVerify(NAV_LINKS.AUTHORS, '/authors');
        navigateAndVerify(NAV_LINKS.PODCAST, '/podcast');
        navigateAndVerify(NAV_LINKS.HOME, '/');

        // Test header menu toggle
        const headerMenu = 'header > main > ul > div:last-of-type';
        cy.get(headerMenu)
            .click()
            .wait(1000);
        cy.get(headerMenu)
            .click()
            .wait(1000)
            .click()
            .go("back");
    });
});

