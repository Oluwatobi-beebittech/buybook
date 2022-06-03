const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

const customJestConfig = {
	moduleDirectories: [ 'node_modules', './' ],
	setupFilesAfterEnv: ['./src/jest-setup.ts'],
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		"@components": "<rootDir>/src/components"
	},
	modulePathIgnorePatterns: ['cypress', './tests/e2e'],
};

module.exports = createJestConfig(customJestConfig);