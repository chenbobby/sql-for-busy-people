import { render } from '@testing-library/react';

import QueryResultsPanel from './QueryResultsPanel';


describe('QueryResultsPanel', () => {
  it('renders', () => {
    const props = { query: 'SELECT 1;' };
    const { getByText } = render(<QueryResultsPanel {...props} />);
    const header = getByText('QueryResults Panel');
    expect(header).toBeInTheDocument();
  })
});
