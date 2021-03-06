import { jest } from '@jest/globals';
import { render } from '@testing-library/react';

import QueryPanel from './QueryPanel';


describe('QueryPanel', () => {
  it('renders', () => {
    const mockSetQuery = jest.fn();
    const props = { query: 'SELECT 1;', setQuery: mockSetQuery };
    const { getByText } = render(<QueryPanel {...props} />);
    const header = getByText('Query Panel');
    expect(header).toBeInTheDocument();
  })
});
