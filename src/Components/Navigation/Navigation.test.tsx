import { cleanup, render, screen } from "@testing-library/react";
import * as React from "react";

import type { LinkProps } from "next/link";

import { Navigation } from "./Navigation";

jest.mock("next/link", () => (
	{ children }: React.PropsWithChildren<LinkProps>
)=> children
);

describe("navigation", () => {
	beforeAll(() => {
		render(<Navigation/>);
	});

	afterAll(() => {
		cleanup();
	});

	it("renders without crashing", () => {
		const navigationBar = screen.getByRole("navigation");
		expect(navigationBar).toBeDefined();
	});

	test("links in navigation are present and clickable", () => {
		const aboutLink = screen.getByText("About");
		const loginLink = screen.getByText("Login");
		const registerLink = screen.getByText("Register");

		expect(aboutLink).toBeInTheDocument();
		expect(loginLink).toBeInTheDocument();
		expect(registerLink).toBeInTheDocument();
	});
});
