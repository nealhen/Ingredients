import React from 'react';
import { render } from '@testing-library/react';
import Ingredientslookup from './ingredientlookup';

test('renders Ingredientslookup', () => {
    const { getByText } = render(
        <Ingredientslookup />
    );

    expect(getByText(/learn/i)).toBeInTheDocument();
});
