import { render } from '@testing-library/react';

import TextbookPanel from './TextbookPanel';


describe('TextbookPanel', () => {
  it('renders', () => {
    const { getByText } = render(<TextbookPanel><p>Hi!</p></TextbookPanel>);

    const header = getByText('Textbook Panel');
    expect(header).toBeInTheDocument();

    const child = getByText('Hi!');
    expect(child).toBeInTheDocument();
  });
});
