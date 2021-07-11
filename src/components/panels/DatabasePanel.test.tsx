import { render } from '@testing-library/react';

import DatabasePanel from './DatabasePanel';


describe('DatabasePanel', () => {
  it('renders', () => {
    const props = { tableNames: ['table'] as [string] };
    const { getByText } = render(<DatabasePanel {...props} />);

    const header = getByText('Database Panel');
    expect(header).toBeInTheDocument();
  })
});
