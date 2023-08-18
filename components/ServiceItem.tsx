import React from 'react';

interface ServiceItemProps {
    service: {
        id: number;
        service: string;
        status: "up" | "warning" | "error";
    };
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => {
    const [status, setStatus] = React.useState(service.status);

    const statusMapping = {
        up: 'Bom',
        warning: 'Apresentando lentidão',
        error: 'Fora do ar'
    };

    const colorMapping = {
        up: 'bg-green-500 hover:bg-green-600',
        warning: 'bg-yellow-500 hover:bg-yellow-600',
        error: 'bg-red-500 hover:bg-red-600'
    };



    return (
        <div
            className={`p-4 rounded-lg text-white transition ${colorMapping[status]}`}
        >
            <span className="font-bold">{service.service}:</span> {statusMapping[status]}
        </div>
    );
};

export default ServiceItem;
