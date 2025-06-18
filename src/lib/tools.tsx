import { FaWrench, FaCode, FaServer, FaFileCode, FaExchangeAlt, FaShieldAlt } from 'react-icons/fa';


const TOOL_GROUPS = [
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

export default TOOL_GROUPS;