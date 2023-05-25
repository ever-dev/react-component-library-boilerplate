import React from 'react';

import { Button } from '@mui/material';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Button Component', () => {
  it('should display text correctly', () => {
    render(<Button>Button</Button>);

    expect(screen.getByText('Button')).toBeTruthy();
  });

  it('should trigger function when clicked', async () => {
    const fn = jest.fn();
    render(<Button onClick={fn}>Button</Button>);

    await userEvent.click(screen.getByText('Button'));
    expect(fn).toBeCalled();
  });
});
