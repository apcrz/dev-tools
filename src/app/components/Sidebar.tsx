'use client';

import { useState } from 'react';
import { AiFillTool } from 'react-icons/ai';
import { FiChevronDown, FiChevronUp, FiMenu } from 'react-icons/fi';
import { FaCode, FaWrench, FaLock, FaServer, FaFileCode } from 'react-icons/fa';
import Link from 'next/link';

const tools = [
    {
        group: 'Geradores',
        icon: <FaWrench className="text-lg" />,
        tools: [
            { name: 'Gerador de CPF', href: '/cpf-generator' },
            { name: 'Gerador de CNPJ', href: '/cnpj-generator' },
            { name: 'Gerador de CEP', href: '/cep-generator' },
            { name: 'Gerador de Placa de Carro', href: '/license-plate-generator' },
            { name: 'Gerador de Cartão de Crédito', href: '/credit-card-generator' },
            { name: 'Gerador de Cartão de Débito', href: '/debit-card-generator' },
            { name: 'Gerador de Senhas', href: '/password-generator' },
            { name: 'Gerador de Lorem Ipsum', href: '/lorem-ipsum-generator' },
        ],
    },
    {
        group: 'Codificadores',
        icon: <FaCode className="text-lg" />,
        tools: [
            { name: 'Codificador Base64', href: '/base64-encoder' },
            { name: 'Decodificador Base64', href: '/base64-decoder' },
        ],
    },
    {
        group: 'Calculadoras de Hash',
        icon: <FaLock className="text-lg" />,
        tools: [
            { name: 'Hash MD5', href: '/hash-md5' },
            { name: 'Hash SHA1', href: '/hash-sha1' },
            { name: 'Hash SHA256', href: '/hash-sha256' },
            { name: 'Hash SHA512', href: '/hash-sha512' },
        ],
    },
    {
        group: 'Simulador de APIs',
        icon: <FaServer className="text-lg" />,
        tools: [
            { name: 'API Fake', href: '/api-fake' },

        ],
    },
    {
        group: 'Formatadores',
        icon: <FaFileCode className="text-lg" />,
        tools: [
            { name: 'Embelezador de Código', href: '/code-beautifier' },
        ],
    },
];

export default function Sidebar() {
    const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleGroup = (group: string) => {
        setOpenGroups((prev) => ({
            ...prev,
            [group]: !prev[group],
        }));
    };

    const handleLinkClick = () => {
        if (window.innerWidth < 1024) {
            setSidebarOpen(false);
        }
    };

    return (
        <div className="lg:w-64">
            <div className="flex items-center justify-between bg-white h-16 px-4 lg:hidden shadow-md">
                <button
                    onClick={() => setSidebarOpen(!isSidebarOpen)}
                    className="text-gray-800 focus:outline-none"
                >
                    <FiMenu className="text-2xl" />
                </button>
                {isSidebarOpen && (
                    <div className="flex items-center text-gray-800">
                        <AiFillTool className="mr-2 text-xl" />
                        <span className="font-bold">DevTools</span>
                    </div>
                )}
            </div>

            <div
                className={`absolute top-0 left-0 z-40 h-full w-64 bg-white shadow-md transform transition-transform duration-300 lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex items-center justify-center h-16 bg-gray-800 text-white">
                    <AiFillTool className="mr-2 text-xl" />
                    <span className="font-bold">
                        <Link href="/" className="text-white">
                            DevTools
                        </Link>
                    </span>
                </div>
                <nav className="p-4 overflow-y-auto h-[calc(100vh-4rem)]"> {/* Ajuste a altura e adicione rolagem */}
                    <ul className="space-y-2">
                        {tools.map((group) => (
                            <li key={group.group}>
                                <div
                                    onClick={() => toggleGroup(group.group)}
                                    className="flex items-center justify-between px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100 rounded-lg"
                                >
                                    <div className="flex items-center space-x-3">
                                        {group.icon}
                                        <span>{group.group}</span>
                                    </div>
                                    {openGroups[group.group] ? (
                                        <FiChevronUp className="text-sm" />
                                    ) : (
                                        <FiChevronDown className="text-sm" />
                                    )}
                                </div>
                                <ul
                                    className={`pl-8 mt-2 space-y-1 overflow-hidden transition-[max-height] duration-300 ease-in-out ${openGroups[group.group]
                                        ? 'max-h-[500px]'
                                        : 'max-h-0'
                                        }`}
                                >
                                    {group.tools.map((tool) => (
                                        <li key={tool.name}>
                                            <Link
                                                href={tool.href}
                                                onClick={handleLinkClick}
                                                className="block px-2 py-1 text-gray-600 hover:bg-gray-200 rounded-lg"
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
                ></div>
            )}
        </div>
    );
}
