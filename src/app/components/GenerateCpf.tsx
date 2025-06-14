"use client";

import { useEffect, useState } from "react";
import { HiClipboard, HiCheck } from "react-icons/hi2";

const ufs = [
    { sigla: "AC", nome: "Acre" },
    { sigla: "AL", nome: "Alagoas" },
    { sigla: "AP", nome: "Amapá" },
    { sigla: "AM", nome: "Amazonas" },
    { sigla: "BA", nome: "Bahia" },
    { sigla: "CE", nome: "Ceará" },
    { sigla: "DF", nome: "Distrito Federal" },
    { sigla: "ES", nome: "Espírito Santo" },
    { sigla: "GO", nome: "Goiás" },
    { sigla: "MA", nome: "Maranhão" },
    { sigla: "MT", nome: "Mato Grosso" },
    { sigla: "MS", nome: "Mato Grosso do Sul" },
    { sigla: "MG", nome: "Minas Gerais" },
    { sigla: "PA", nome: "Pará" },
    { sigla: "PB", nome: "Paraíba" },
    { sigla: "PR", nome: "Paraná" },
    { sigla: "PE", nome: "Pernambuco" },
    { sigla: "PI", nome: "Piauí" },
    { sigla: "RJ", nome: "Rio de Janeiro" },
    { sigla: "RN", nome: "Rio Grande do Norte" },
    { sigla: "RS", nome: "Rio Grande do Sul" },
    { sigla: "RO", nome: "Rondônia" },
    { sigla: "RR", nome: "Roraima" },
    { sigla: "SC", nome: "Santa Catarina" },
    { sigla: "SP", nome: "São Paulo" },
    { sigla: "SE", nome: "Sergipe" },
    { sigla: "TO", nome: "Tocantins" },
];

const ufToNonoDigito: { [key: string]: number } = {
    RS: 0,
    DF: 1, GO: 1, MT: 1, MS: 1, TO: 1,
    PA: 2, AM: 2, AC: 2, AP: 2, RO: 2, RR: 2,
    CE: 3, MA: 3, PI: 3,
    PE: 4, RN: 4, PB: 4, AL: 4,
    BA: 5, SE: 5,
    MG: 6,
    RJ: 7, ES: 7,
    SP: 8,
    PR: 9, SC: 9,
};

const CPFGenerator = () => {
    const [cpf, setCpf] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    const [selectedUF, setSelectedUF] = useState<string>("PR");

    const handleCopy = () => {
        navigator.clipboard.writeText(cpf).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    };

    const handleGenerateCpf = (selectedUF: string): string => {
        const generateRandomDigits = (length: number): string =>
            Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");

        const firstNineDigits =
            selectedUF.trim() === "XX"
                ? generateRandomDigits(9)
                : generateRandomDigits(8) + ufToNonoDigito[selectedUF as keyof typeof ufToNonoDigito];

        const calculateCheckDigits = (cpf: string): string => {
            const calculateDigit = (factor: number): number => {
                const sum = cpf
                    .split("")
                    .reduce((acc, num) => acc + parseInt(num) * factor--, 0);
                return (11 - (sum % 11)) % 10;
            };

            const firstCheckDigit = calculateDigit(10);
            const secondCheckDigit = calculateDigit(11);
            return `${firstCheckDigit}${secondCheckDigit}`;
        };

        const cpfWithCheckDigits = firstNineDigits + calculateCheckDigits(firstNineDigits);
        return cpfWithCheckDigits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    };


    useEffect(() => {
        setCpf(handleGenerateCpf(selectedUF));
    }, [selectedUF]);

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
                            setCpf(handleGenerateCpf(e.target.value));
                        }}
                    >
                        <option key="Aleatório" value="XX   ">Aleatório</option>
                        {ufs.map((uf) => (
                            <option key={uf.sigla} value={uf.sigla}>
                                {uf.nome} ({uf.sigla})
                            </option>
                        ))}
                    </select>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        value={cpf}
                        readOnly
                        className="w-full p-4 pr-16 border border-gray-300 rounded-lg text-gray-800 bg-gray-50 focus:ring-gray-500 text-xl"
                        placeholder="CPF gerado"
                    />
                    <button
                        onClick={handleCopy}
                        className={`absolute inset-y-0 right-0 px-4 ${isCopied ? "text-green-500" : "text-gray-500 hover:text-gray-700"}`}
                    >
                        {isCopied ? <HiCheck className="w-6 h-6" /> : <HiClipboard className="w-6 h-6" />}
                    </button>
                </div>
                <button
                    onClick={() => setCpf(handleGenerateCpf(selectedUF))}
                    className="w-full py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 text-lg"
                >
                    Gerar Novo CPF
                </button>
            </div>
        </div>
    );
};

export default CPFGenerator;
                    