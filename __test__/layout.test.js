import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../src/components/layout';

test('renderiza correctamente el Layout con los datos de GraphQL mockeados', () => {
    const { getByText } = render(<Layout>Contenido de prueba</Layout>);

    // Verifica que el título del Header y el autor se renderizan correctamente
    expect(getByText("Mocked Title")).toBeInTheDocument();
    expect(getByText(/Creado por/)).toBeInTheDocument();
    expect(getByText("Mocked Author")).toBeInTheDocument();

    // Verifica que el contenido del children se renderiza
    expect(getByText("Contenido de prueba")).toBeInTheDocument();
});
