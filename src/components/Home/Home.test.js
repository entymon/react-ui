import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store'
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

describe('<Home />', () => {
  test('it should mount', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const home = screen.getByTestId('Home');

    expect(home).toBeInTheDocument();
  });
});