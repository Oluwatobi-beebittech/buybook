import { render } from "@testing-library/react";

import { Navigation } from "./Navigation";

describe("navigation", () => {
	it("renders without crashing", () => {
		const { getByRole } = render(<Navigation/>);
		expect(getByRole("navigation")).toBeDefined();
	});

});
