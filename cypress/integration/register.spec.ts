/// <reference types="cypress" />
// @ts-check

describe('Register page', () => {
	beforeEach(()=> {
		cy.visit('/register');
	});

	it('should have input fields', () => {
		cy.get('[data-cy*="first-name-cy"]').type('Alpha');
		cy.get('[data-cy*="last-name-cy"]').type('Omega');
		cy.get('[data-cy*="email-cy"]').type('abc@gmail.com');
		cy.get('[data-cy*="phone-cy"]').type('8989745765');
		cy.get('[data-cy*="password-main-cy"]').type('1234');
		cy.get('[data-cy*="confirm-password-cy"]').type('1234');
		cy.get('[data-cy*="remember-me-cy"]').click();
		cy.get('[data-cy*="submit-cy"]').click();
	});

	it('should validate fields', () => {
		cy.get('[data-cy*="first-name-cy"]').type(' ');
		cy.get('[data-cy*="last-name-cy"]').type(' ');
		cy.get('[data-cy*="email-cy"]').type('abc@gmailcom');
		cy.get('[data-cy*="phone-cy"]').type('89897465');
		cy.get('[data-cy*="password-main-cy"]').type('1234');
		cy.get('[data-cy*="confirm-password-cy"]').type('134');
		cy.get('[data-cy*="submit-cy"]').click();

		cy.get('.ant-form-item-explain-error')
			.contains('Please input your first name');
		cy.get('.ant-form-item-explain-error')
			.contains('Please input your last name');
		cy.get('.ant-form-item-explain-error')
			.contains('Text in the input does not match an email pattern');
		cy.get('.ant-form-item-explain-error')
			.contains('Use the 10-digits of the phone number omitting the first 0');
		cy.get('.ant-form-item-explain-error')
			.contains('The two passwords that you entered do not match!');
	});
});