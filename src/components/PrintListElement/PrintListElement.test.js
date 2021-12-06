import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store'
import '@testing-library/jest-dom/extend-expect';
import PrintListElement from './PrintListElement';
import { BrowserRouter as Router } from "react-router-dom";

describe('<PrintListElement />', () => {
  test('it should mount', () => {
    render(
      <Provider store={store}>
        <PrintListElement feed={{ objectId: 1 }}/>
      </Provider>
    );

    const printListElement = screen.getByTestId('PrintListElement');

    expect(printListElement).toBeInTheDocument();
  });
});