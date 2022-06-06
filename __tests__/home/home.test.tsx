import React from 'react';
import '@testing-library/jest-dom';
import { Home } from '../../src/pages/home/home';
import { render, screen } from '@testing-library/react';
describe('Page - Home', () => {
  test('when render need to show 3 items on menu', async () => {
    render(<Home />);
    const menu = await screen.findAllByRole('menu');
    const lenghtMenu = menu.length;
    expect(lenghtMenu).toEqual(3);
  });
});
