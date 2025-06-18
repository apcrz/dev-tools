'use client';

import { useState, useEffect } from 'react';
import { FaWrench, FaCode, FaServer, FaFileCode, FaExchangeAlt, FaShieldAlt } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp, FiMenu } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const toolGroups = [
    {
        group: 'Geradores',
        icon: <FaWrench className="text-lg" />,
        tools: [
            { name: 'CPF/CNPJ', href: '/generators/docs' },
            { name: 'Senhas Seguras', href: '/generators/passwords' },
            { name: 'UUID', href: '/generators/uuid' },
            { name: 'Dados Fake', href: '/generators/mock-data' },
        ],
    },
    {
        group: 'Codificação',
        icon: <FaCode className="text-lg" />,
        tools: [
            { name: 'Base64 (Encode/Decode)', href: '/encoding/base64' },
            { name: 'URL (Encode/Decode)', href: '/encoding/url' },
            { name: 'JWT Debugger', href: '/encoding/jwt' },
        ],
    },
    {
        group: 'Criptografia',
        icon: <FaShieldAlt className="text-lg" />,
        tools: [
            { name: 'Hash + Comparador', href: '/crypto/hash' },
            { name: 'Cifras', href: '/crypto/ciphers' },
        ],
    },
    {
        group: 'Conversores',
        icon: <FaExchangeAlt className="text-lg" />,
        tools: [
            { name: 'Unidades/Temperatura', href: '/converters/units' },
            { name: 'Bases Numéricas', href: '/converters/numeric' },
            { name: 'Timestamp', href: '/converters/timestamp' },
        ],
    },
    {
        group: 'Debug',
        icon: <FaFileCode className="text-lg" />,
        tools: [
            { name: 'JSON Tools', href: '/debug/json' },
            { name: 'Regex Tester', href: '/debug/regex' },
            { name: 'HTTP Headers', href: '/debug/headers' },
        ],
    },
    {
        group: 'API Tools',
        icon: <FaServer className="text-lg" />,
        tools: [
            { name: 'API Fake', href: '/api-tools/fake' },
            { name: 'Webhook Tester', href: '/api-tools/webhook' },
        ],
    }
];

export default function Sidebar() {
    const pathname = usePathname();
    const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const initialOpenState: Record<string, boolean> = {};

        const activeGroup = toolGroups.find(group =>
            group.tools.some(tool => pathname.startsWith(tool.href))
        );

        if (activeGroup) {
            initialOpenState[activeGroup.group] = true;
        }

        setOpenGroups(initialOpenState);
    }, [pathname]);

    const toggleGroup = (group: string) => {
        setOpenGroups(prev => ({ ...prev, [group]: !prev[group] }));
    };

    const isActiveRoute = (href: string) => {
        return pathname.startsWith(href);
    };

    return (
        <div className="lg:w-64">
            <div className="lg:hidden flex items-center justify-between bg-white h-16 px-4 shadow-md">
                <button
                    onClick={() => setSidebarOpen(!isSidebarOpen)}
                    className="text-gray-800 focus:outline-none"
                >
                    <FiMenu className="text-2xl" />
                </button>
            </div>

            <div className={`
                fixed lg:static z-40 h-full w-64 bg-white shadow-lg lg:shadow-none
                transform transition-transform duration-300 lg:translate-x-0
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="flex items-center justify-center h-16 bg-gray-800 text-white">
                    <span className="font-bold text-xl">DevTools</span>
                </div>

                <nav className="p-4 overflow-y-auto h-[calc(100vh-4rem)]">
                    <ul className="space-y-1">
                        {toolGroups.map((group) => (
                            <li key={group.group}>
                                <button
                                    onClick={() => toggleGroup(group.group)}
                                    className="w-full flex items-center justify-between px-3 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <div className="flex items-center space-x-3">
                                        {group.icon}
                                        <span className="font-medium">{group.group}</span>
                                    </div>
                                    {openGroups[group.group] ? (
                                        <FiChevronUp className="text-sm" />
                                    ) : (
                                        <FiChevronDown className="text-sm" />
                                    )}
                                </button>

                                <ul className={`pl-9 mt-1 space-y-1 overflow-hidden transition-all ${openGroups[group.group] ? 'max-h-96' : 'max-h-0'}`}>
                                    {group.tools.map((tool) => (
                                        <li key={tool.name}>
                                            <Link
                                                href={tool.href}
                                                onClick={() => window.innerWidth < 1024 && setSidebarOpen(false)}
                                                className={`block px-3 py-2 text-sm rounded-lg transition-colors
                                                    ${isActiveRoute(tool.href)
                                                        ? 'bg-blue-50 text-blue-600 font-medium'
                                                        : 'text-gray-600 hover:bg-gray-100'}`}
                                            >
                                                {tool.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
}
