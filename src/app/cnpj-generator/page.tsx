import GenerateCnpj from '../components/GenerateCnpj';

export default function Page() {
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='text-4xl font-bold mb-4'>Gerador de CNPJ</h1>
            <GenerateCnpj />
        </div>
    );
}