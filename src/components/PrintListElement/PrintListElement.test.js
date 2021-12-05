import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PrintListElement from './PrintListElement';

describe('<PrintListElement />', () => {
  test('it should mount', () => {
    render(<PrintListElement />);
    
    const printListElement = screen.getByTestId('PrintListElement');

    expect(printListElement).toBeInTheDocument();
  });
});