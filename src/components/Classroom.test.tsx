import { render } from '@testing-library/react';

import Classroom from './Classroom';


describe('Classroom', () => {
  it('renders a main element', () => {
    const { getByRole, getByText } = render(<Classroom><p>Hi!</p></Classroom>);
    const main = getByRole('main');
    expect(main).toBeInTheDocument();
    const child = getByText('Hi!');
    expect(child).toBeInTheDocument();
  })
});
