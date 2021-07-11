import { render } from '@testing-library/react';

import ClassroomTO from './ClassroomTO';


describe('ClassroomTO', () => {
  it('renders a main element', () => {
    const props = { tableNames: ['table1'] as [string] };
    const { getByRole, getByText } = render(<ClassroomTO {...props}><p>Hi!</p></ClassroomTO>);

    const main = getByRole('main');
    expect(main).toBeInTheDocument();

    const child = getByText('Hi!');
    expect(child).toBeInTheDocument();
  });
});
