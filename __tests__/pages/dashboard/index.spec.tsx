import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import Home from '@/pages/dashboard';

describe("Home", () => {
    it('should render the text "Dashboard"', () => {
      render(<Home />);
      const textElement = screen.getByText("Dashboard");
      expect(textElement).toBeInTheDocument();
    });
});