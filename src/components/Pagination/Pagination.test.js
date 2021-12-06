import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store'
import '@testing-library/jest-dom/extend-expect';
import Pagination from './Pagination';

describe('<Pagination />', () => {
  test('it should mount', () => {
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );

    const pagination = screen.getByTestId('Pagination');

    expect(pagination).toBeInTheDocument();
  });
});