import React from 'react';
import ServiceList from '@/components/ServiceList';
import services from '@/data/services.json';

const HomePage: React.FC<{ services: typeof services }> = ({ services }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto py-8 min-h-screen">
                <h1 className="text-3xl text-black font-bold mb-12 text-center">Status dos Serviços Externos da Defensoria</h1>
                <ServiceList services={services} />
            </div>
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: {
            services
        }
    };
}

export default HomePage;
