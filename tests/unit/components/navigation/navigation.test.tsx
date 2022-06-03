import { cleanup, render, screen } from '@testing-library/react';
import * as React from 'react';

import { Navigation } from '@components';

describe('navigation', () => {
	beforeAll(() => {
		render(<Navigation/>);
	});

	afterAll(() => {
		cleanup();
	});

	it('renders without crashing', () => {
		const navigationBar = screen.getByRole('navigation');
		expect(navigationBar).toBeDefined();
	});

	test('links in navigation are present and have href attributes', () => {
		const aboutLink = screen.getByText('About');
		const loginLink = screen.getByText('Login');
		const registerLink = screen.getByText('Register');

		expect(aboutLink).toBeInTheDocument();
		expect(aboutLink).toHaveAttribute('href', '/about');

		expect(loginLink).toBeInTheDocument();
		expect(loginLink).toHaveAttribute('href', '/login');

		expect(registerLink).toBeInTheDocument();
		expect(registerLink).toHaveAttribute('href', '/register');
	});
});
