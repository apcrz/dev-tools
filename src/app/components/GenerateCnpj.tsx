'use client';

import { useState } from 'react';
import { HiClipboard, HiCheck } from 'react-icons/hi';

interface UF {
    sigla: string;
    nome: string;
}

const ufs: UF[] = [
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'TO', nome: 'Tocantins' },
];

const gerarCnpj = (uf: string, tipo: string): string => {
    const cnpjBase: number[] = [];

    for (let i = 0; i < 8; i++) {
        cnpjBase.push(Math.floor(Math.random() * 10));
    }

    const numeroFilial = tipo === 'filial' ? Math.floor(Math.random() * 10000) : 1;
    const numeroFilialStr = numeroFilial.toString().padStart(4, '0');
    for (let i = 0; i < 4; i++) {
        cnpjBase.push(parseInt(numeroFilialStr[i]));
    }

    let soma = 0;
    const multiplicadores1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < 12; i++) {
        soma += cnpjBase[i] * multiplicadores1[i];
    }

    let resto = soma % 11;
    const primeiroDigito = resto < 2 ? 0 : 11 - resto;
    cnpjBase.push(primeiroDigito);

    soma = 0;
    const multiplicadores2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < 13; i++) {
        soma += cnpjBase[i] * multiplicadores2[i];
    }

    resto = soma % 11;
    const segundoDigito = resto < 2 ? 0 : 11 - resto;
    cnpjBase.push(segundoDigito);

    const cnpjFormatado = `${cnpjBase.slice(0, 2).join('')}.${cnpjBase.slice(2, 5).join('')}.${cnpjBase.slice(5, 8).join('')}/` +
        `${numeroFilialStr}-${cnpjBase.slice(12, 14).join('')}`;
    return cnpjFormatado;
};

const CnpjGenerator: React.FC = () => {
    const [selectedUF, setSelectedUF] = useState<string>('XX');
    const [cnpj, setCnpj] = useState<string>('');
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const [tipoCnpj, setTipoCnpj] = useState<'matriz' | 'filial'>('matriz');

    const handleGenerateCnpj = (uf: string, tipo: string): void => {
        setCnpj(gerarCnpj(uf, tipo));
    };

    const handleCopy = (): void => {
        navigator.clipboard.writeText(cnpj);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="p-4 max-w-full mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
                <div className="mt-2">
                    <label htmlFor="uf-select" className="block">Selecione a UF</label>
                    <select
                        id="uf-select"
                        className="w-full p-2 mt-2 border border-gray-300 rounded font-ubuntu-sans-mono"
                        value={selectedUF}
                        onChange={(e) => {
                            setSelectedUF(e.target.value);
                            handleGenerateCnpj(e.target.value, tipoCnpj);
                        }}
                    >
                        <option key="Aleatório" value="XX">Aleatório</option>
                        {ufs.map((uf) => (
                            <option key={uf.sigla} value={uf.sigla}>
                                {uf.nome} ({uf.sigla})
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mt-4">
                    <label className="block text-lg font-semibold text-gray-700">Selecione o tipo de CNPJ:</label>
                    <div className="flex items-center justify-center space-x-8 mt-4">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="matriz"
                                name="tipoCnpj"
                                value="matriz"
                                checked={tipoCnpj === 'matriz'}
                                onChange={() => setTipoCnpj('matriz')}
                                className="h-5 w-5 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                            />
                            <label htmlFor="matriz" className="ml-2 text-lg font-medium text-gray-800">Matriz</label>
                        </div>

                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="filial"
                                name="tipoCnpj"
                                value="filial"
                                checked={tipoCnpj === 'filial'}
                                onChange={() => setTipoCnpj('filial')}
                                className="h-5 w-5 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                            />
                            <label htmlFor="filial" className="ml-2 text-lg font-medium text-gray-800">Filial</label>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <input
                        type="text"
                        value={cnpj}
                        readOnly
                        className="w-full p-4 pr-16 border border-gray-300 rounded-lg text-gray-800 bg-gray-50 focus:ring-gray-500 text-xl"
                        placeholder="CNPJ gerado"
                    />
                    <button
                        onClick={handleCopy}
                        className={`absolute inset-y-0 right-0 px-4 ${isCopied ? "text-green-500" : "text-gray-500 hover:text-gray-700"}`}
                    >
                        {isCopied ? <HiCheck className="w-6 h-6" /> : <HiClipboard className="w-6 h-6" />}
                    </button>
                </div>

                <button
                    onClick={() => handleGenerateCnpj(selectedUF, tipoCnpj)}
                    className="w-full py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 text-lg"
                >
                    Gerar Novo CNPJ
                </button>
            </div>
        </div>
    );
};

export default CnpjGenerator;
