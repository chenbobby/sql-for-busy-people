import { jest } from '@jest/globals';
import { render } from '@testing-library/react';

import ClassroomAll from './ClassroomAll';


describe('ClassroomAll', () => {
  it('renders a main element', () => {
    const props = { tableNames: ['table1'] as [string], query: '', setQuery: jest.fn() };
    const { getByRole, getByText } = render(<ClassroomAll {...props}><p>Hi!</p></ClassroomAll>);

    const main = getByRole('main');
    expect(main).toBeInTheDocument();

    const child = getByText('Hi!');
    expect(child).toBeInTheDocument();
  });
});
