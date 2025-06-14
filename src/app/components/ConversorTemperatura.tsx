'use client';

import { useState, useEffect } from 'react';

type TemperatureUnit = 'celsius' | 'fahrenheit' | 'kelvin';

interface Props {
    from?: TemperatureUnit;
    to?: TemperatureUnit;
}

const temperatureUnits: TemperatureUnit[] = ['celsius', 'fahrenheit', 'kelvin'];

function converterTemperatura(value: number, from: TemperatureUnit, to: TemperatureUnit): number | string {
    if (from === to) return value;

    const conversions: Record<string, (n: number) => number> = {
        'celsius->fahrenheit': n => n * 9 / 5 + 32,
        'fahrenheit->celsius': n => (n - 32) * 5 / 9,
        'celsius->kelvin': n => n + 273.15,
        'kelvin->celsius': n => n - 273.15,
        'fahrenheit->kelvin': n => (n - 32) * 5 / 9 + 273.15,
        'kelvin->fahrenheit': n => (n - 273.15) * 9 / 5 + 32,
    };

    const key = `${from}->${to}`;
    return conversions[key]?.(value) ?? 'Conversão não suportada';
}

export default function ConversorTemperatura({ from = 'celsius', to = 'fahrenheit' }: Props) {
    const [inputValue, setInputValue] = useState('');
    const [fromUnit, setFromUnit] = useState<TemperatureUnit>(from);
    const [toUnit, setToUnit] = useState<TemperatureUnit>(to);
    const [resultado, setResultado] = useState<string | null>(null);

    const isValidUnit = (unit: string): unit is TemperatureUnit => temperatureUnits.includes(unit as TemperatureUnit);

    useEffect(() => {
        if (!isValidUnit(fromUnit) || !isValidUnit(toUnit)) {
            setResultado('Unidade inválida');
            return;
        }

        if (inputValue.trim() === '') {
            setResultado(null);
            return;
        }

        const num = parseFloat(inputValue);
        if (isNaN(num)) {
            setResultado(null);
            return;
        }

        const resultadoConvertido = converterTemperatura(num, fromUnit, toUnit);

        if (typeof resultadoConvertido === 'string') {
            setResultado(resultadoConvertido);
        } else {
            setResultado(`${resultadoConvertido.toFixed(2)} ${capitalize(toUnit)}`);
        }
    }, [inputValue, fromUnit, toUnit]);

    useEffect(() => {
        if (from && temperatureUnits.includes(from)) {
            setFromUnit(from);
        }
        if (to && temperatureUnits.includes(to)) {
            setToUnit(to);
        }
    }, [from, to]);
    
    const capitalize = (s: string) => s[0].toUpperCase() + s.slice(1);

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Conversor de Temperatura</h1>

            <div className="mb-4">
                <label htmlFor="from-unit" className="block mb-1">Temperatura de entrada</label>
                <select
                    id="from-unit"
                    value={fromUnit}
                    onChange={(e) => setFromUnit(e.target.value as TemperatureUnit)}
                    className="w-full p-2 border rounded"
                >
                    {temperatureUnits.map((unit) => (
                        <option key={unit} value={unit}>
                            {capitalize(unit)}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="to-unit" className="block mb-1">Temperatura de saída</label>
                <select
                    id="to-unit"
                    value={toUnit}
                    onChange={(e) => setToUnit(e.target.value as TemperatureUnit)}
                    className="w-full p-2 border rounded"
                >
                    {temperatureUnits.map((unit) => (
                        <option key={unit} value={unit}>
                            {capitalize(unit)}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="input-value" className="block mb-1">Valor</label>
                <input
                    id="input-value"
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Digite um número"
                />
            </div>

            {resultado && (
                <div className="mt-6 p-6 bg-blue-100 border border-blue-300 rounded text-center shadow-sm">
                    <p className="text-lg text-blue-800 font-semibold">
                        Resultado:
                    </p>
                    <p className="text-3xl font-bold text-blue-900 mt-2">
                        {resultado}
                    </p>
                </div>
            )}
        </div>
    );
}
