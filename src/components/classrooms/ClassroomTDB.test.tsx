import { jest } from '@jest/globals';
import { render } from '@testing-library/react';

import ClassroomTDB from './ClassroomTDB';


describe('ClassroomTDB', () => {
  it('renders a main element', () => {
    const props = { tableNames: ['table1'] as [string], query: 'SELECT 1;', runQuery: jest.fn() };
    const { getByRole, getByText } = render(<ClassroomTDB {...props}><p>Hi!</p></ClassroomTDB>);

    const main = getByRole('main');
    expect(main).toBeInTheDocument();

    const child = getByText('Hi!');
    expect(child).toBeInTheDocument();
  });
});
