import React from 'react';
import { render } from '@testing-library/react';

import IndexPage from '.';

describe('<IndexPage />', () => {
  it('should have a link to page 2', () => {
    const { getByText } = render(<IndexPage />);
    const link = getByText('Go to page 2');
    expect(link).toHaveAttribute('href', '/page-2/');
  });
});
