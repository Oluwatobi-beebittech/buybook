/// <reference types="cypress" />
// @ts-check
describe('Renders the index page', () => {
	it('should navigate to pages on the landing screen', () => {
		cy.visit('/');

		cy.get('a[href*="login"]').click();
		cy.url().should('include', '/login');

		cy.get('a[href*="about"]').click();
		cy.url().should('include', '/about');

		cy.get('a[href*="register"]').click();
		cy.url().should('include', '/register');
	});
});

const asModule = {};
export default asModule;