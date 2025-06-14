import ConversorTemperatura from '../components/ConversorTemperatura';

type TemperatureUnit = 'celsius' | 'fahrenheit' | 'kelvin';

interface TemperaturasPageProps {
    searchParams: Promise<{
        from?: TemperatureUnit;
        to?: TemperatureUnit;
    }>;
}

export default async function TemperaturasPage({ searchParams }: TemperaturasPageProps) {
    const { from, to } = await searchParams;
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">Conversor de Temperatura</h1>
            <ConversorTemperatura from={from} to={to} />
        </div>
    );
}