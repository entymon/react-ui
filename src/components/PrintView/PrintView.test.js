import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store'
import '@testing-library/jest-dom/extend-expect';
import PrintView from './PrintView';

describe('<PrintView />', () => {
  test('it should mount', () => {
    render(
      <Provider store={store}>
        <PrintView />
      </Provider>
    );

    const printView = screen.getByTestId('PrintView');

    expect(printView).toBeInTheDocument();
  });
});