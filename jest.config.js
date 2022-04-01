const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

const customJestConfig = {
	moduleDirectories: [ 'node_modules', './' ],
	setupFilesAfterEnv: ['./src/jest-setup.ts'],
	testEnvironment: 'jest-environment-jsdom',
	modulePathIgnorePatterns: ['cypress'],
};

module.exports = createJestConfig(customJestConfig);