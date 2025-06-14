'use client';

import React from 'react';
import { Tabs } from "flowbite-react";
import Header from '@/app/components/api-fake/Header';
import Auth from '@/app/components/api-fake/Auth';
import Clientes from '@/app/components/api-fake/Clientes';
import Produtos from '@/app/components/api-fake/Produtos';
import Pedidos from '@/app/components/api-fake/Pedidos';

const ApiFakePage: React.FC = () => {
    return (
        <div className='justify-center h-full'>
            <Header />
            <Tabs aria-label="Tabs with icons" variant="underline">
                <Tabs.Item active title="Autenticação">
                    <Auth />
                </Tabs.Item>

                <Tabs.Item title="Clientes">
                    <Clientes />
                </Tabs.Item>

                <Tabs.Item title="Produtos">
                    <Produtos />
                </Tabs.Item>

                <Tabs.Item title="Pedidos">
                    <Pedidos />
                </Tabs.Item>
            </Tabs>
        </div>
    );
};

export default ApiFakePage;