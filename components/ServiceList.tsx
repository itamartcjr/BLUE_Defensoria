import React from 'react';
import ServiceItem from './ServiceItem';

interface ServiceListProps {
    services: {
        id: number;
        service: string;
        status: string;
    }[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-full">
            <div className="bg-gray-100 p-5 rounded-lg shadow-md">
                <h2 className="text-xl text-black font-bold mb-4">Lista de Serviços</h2>
                <div className="space-y-4">
                    {services
                        .filter(service => ["up", "warning", "error"].includes(service.status))
                        .map(service => (
                            <ServiceItem key={service.id} service={service as any} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceList;
