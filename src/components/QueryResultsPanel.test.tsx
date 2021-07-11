import { render } from '@testing-library/react';

import QueryResultsPanel, { QueryResultsPanelProps } from './QueryResultsPanel';


describe('QueryResultsPanel', () => {
  it('renders', () => {
    const props: QueryResultsPanelProps = { query: '' };
    const { getByText } = render(<QueryResultsPanel {...props} />);
    const header = getByText('QueryResults Panel');
    expect(header).toBeInTheDocument();
  })
});
