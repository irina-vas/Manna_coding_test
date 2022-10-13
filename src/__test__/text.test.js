/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Text } from '../components/Text';
import { act } from 'react-dom/test-utils';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('Text rendered without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  act(() => {
    root.render(<Text tag="span">Plain text</Text>)
  })
});

it('Text rendered properly', () => {
  const { getByTestId } = render(<Text tag="p">Plain text</Text>);
  expect(getByTestId('text')).toHaveTextContent('Plain text')
});

it('Matches snapshot', () => {
  const tree = renderer.create(<Text tag="p">Plain text</Text>).toJSON();
  expect(tree).toMatchSnapshot();
});

