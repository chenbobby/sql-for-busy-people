import { render } from '@testing-library/react';

import DatabasePanel, { DatabasePanelProps } from './DatabasePanel';


describe('DatabasePanel', () => {
  it('renders', () => {
    const props: DatabasePanelProps = { tableNames: ['table'] };
    const { getByText } = render(<DatabasePanel {...props} />);
    const header = getByText('Database Panel');
    expect(header).toBeInTheDocument();
  })
});
