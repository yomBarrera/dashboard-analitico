import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import Home from '@/pages/dashboard';

describe("Home", () => {
  it('should render the text "Región:"', () => {
      render(<Home />);
      const textElement = screen.getByText("Región:");
      expect(textElement).toBeInTheDocument();
    });
});