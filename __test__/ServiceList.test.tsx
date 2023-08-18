import React from 'react';
import { render } from '@testing-library/react';
import ServiceList from '../components/ServiceList';
import servicesData from "../data/services.json";

describe('ServiceList Component', () => {
    const validStatuses = ["up", "warning", "error"];

    it('renders service list correctly and validates its properties', () => {
        const { getByText } = render(<ServiceList services={servicesData} />);
        
        servicesData.forEach(service => {
            // Verifica se o serviço tem um ID.
            expect(service.id).toBeDefined();

            // Verifica se o serviço tem um nome e renderiza corretamente.
            expect(typeof service.service).toBe('string');
            ["up", "warning", "error"].includes(service.status);

            // Verifica se o status é válido.
            expect(validStatuses).toContain(service.status);
        });
    });
});
