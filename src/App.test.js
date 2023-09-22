import { render } from "@testing-library/react"; //screen
import App from "./App";

test("renders GitHub link", () => {
  render(<App />);
  //   const linkElement = screen.getByText(/GitHub/i);
  //   expect(linkElement).toBeInTheDocument();
});
