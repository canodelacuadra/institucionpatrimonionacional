// src/components/__tests__/Button.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Button from '../src/components/Button';

test('renderiza el Button correctamente y coincide con el snapshot', () => {
    const { asFragment } = render(<Button text="Click Me" style={{ backgroundColor: 'blue', color: 'white' }} />);
    expect(asFragment()).toMatchSnapshot();
});
