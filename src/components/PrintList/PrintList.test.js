import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PrintList from './PrintList';

describe('<PrintList />', () => {
  test('it should mount', () => {
    render(<PrintList />);
    
    const printList = screen.getByTestId('PrintList');

    expect(printList).toBeInTheDocument();
  });
});