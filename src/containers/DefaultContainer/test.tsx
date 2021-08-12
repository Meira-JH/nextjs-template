import { render, screen } from '@testing-library/react';

import DefaultContainer from '.';

describe('DefaultContainer', () => {
  it('should have default container text', () => {
    render(<DefaultContainer />);

    expect(screen.getByText('Welcome to'));
  });
});
