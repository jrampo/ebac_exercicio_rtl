import { render, screen } from "@testing-library/react";
import App from "./App";

describe("testa App.tsx", () => {
  it("renderiza corretamente", () => {
    render(<App />);
    expect(screen.getByTestId("comment-button")).toBeInTheDocument();
  });
});
