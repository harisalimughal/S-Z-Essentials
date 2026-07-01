import { render, screen } from '@testing-library/react';
import FAQ from './Faq';

describe('FAQ page', () => {
  test('renders customer feedback section above the FAQ heading', () => {
    render(<FAQ />);

    expect(screen.getByText('Customer Feedback')).toBeInTheDocument();
    expect(screen.getByText('Aarav Sharma')).toBeInTheDocument();
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });
});
