import { render, screen } from "../testUtils/testUtils";
import App from "./App";

//An example of using react-testing-library
describe("App component", async () => {
    test("Should have text Shortcuts on it", () => {
        render(<App />);
        const elem = screen.getByText("Welcome to The Shortcuts Game");
        expect(elem).toBeInTheDocument();
    });
});
