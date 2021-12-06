import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../store'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import PrintList from './PrintList'

const prints = [
  {"division" :"Asian and Mediterranean Art","imagecount":2,"objectnumber":"XZB6","creditline":"Harvard Art Museums/Arthur M. Sackler Museum, Museum Collection","imagepermissionlevel":0,"dated":null,"id":213615,"title":"Set of Four Pigment Brushes, from a set of Japanese printing tools","department":"Department of Asian Art","objectid":213615},
  {"division":"Asian and Mediterranean Art","imagecount":3,"objectnumber":"TL42323.9","creditline":"Promised gift of Robert S. and Betsy G. Feinberg","imagepermissionlevel":0,"dated":"early 20th century","id":340432,"title":"Crows Fighting in Snow","department":"Department of Asian Art","objectid":340432},
  {"division":"Asian and Mediterranean Art","imagecount":4,"objectnumber":"TL42323.7","creditline":"Promised gift of Robert S. and Betsy G. Feinberg","imagepermissionlevel":0,"dated":"1895","id":340540,"title":"Blossoming Plum and Moon","department":"Department of Asian Art","objectid":340540},
  {"division":"Asian and Mediterranean Art","imagecount":2,"objectnumber":"TL42323.5","creditline":"Promised gift of Robert S. and Betsy G. Feinberg","imagepermissionlevel":0,"dated":"1771, Autumn","id":340519,"title":"Wild Geese and Reeds","department":"Department of Asian Art","objectid":340519},
  {"division":"Asian and Mediterranean Art","imagecount":4,"objectnumber":"TL42323.4","creditline":"Promised gift of Robert S. and Betsy G. Feinberg","imagepermissionlevel":0,"dated":"19th century","id":340527,"title":"Tiger","department":"Department of Asian Art","objectid":340527}
]

describe('<PrintList />', () => {
  test('it should mount', () => {
    render(
      <Provider store={store}>
        <PrintList feeds={prints}/>
      </Provider>
    );

    const printList = screen.getByTestId('PrintList');

    expect(printList).toBeInTheDocument();
  });

  test('Link changes the class when hovered', () => {

    const component = renderer.create(
      <Provider store={store}>
        <PrintList feeds={prints}/>
      </Provider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});