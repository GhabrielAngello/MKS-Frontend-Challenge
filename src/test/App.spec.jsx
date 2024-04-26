import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { SelectedItemContext } from '../Context/SelectedItemContext';

jest.mock('../hooks/useProductData', () => ({
  __esModule: true,
  useProductData: jest.fn(() => ({
    data: [],
    isLoading: false,
    isError: false,
  })),
}));

test('renders Header, Card, and Footer', () => {
  const { container } = render(
    <SelectedItemContext.Provider value={{ selectItems: [], setSelectItems: () => {} }}>
      <App />
    </SelectedItemContext.Provider>
  );

  // Verificação usando classes CSS
  const headerByClass = container.querySelector('.header');
  const containerProductsByClass = container.querySelector('.container-products');
  const footerByClass = container.querySelector('.footer');

  expect(headerByClass).not.toBeNull(); 
  expect(containerProductsByClass).not.toBeNull(); 
  expect(footerByClass).not.toBeNull();
});
