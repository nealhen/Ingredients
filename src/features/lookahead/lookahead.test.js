import React from 'react';
import { render } from '@testing-library/react';
import Lookahead from './lookahead';

test('renders lookahead', () => {
    const { getByText } = render(
        <Lookahead />
    );

    expect(getByText(/learn/i)).toBeInTheDocument();
});
