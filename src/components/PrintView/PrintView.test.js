import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PrintView from './PrintView';

describe('<PrintView />', () => {
  test('it should mount', () => {
    render(<PrintView />);
    
    const printView = screen.getByTestId('PrintView');

    expect(printView).toBeInTheDocument();
  });
});