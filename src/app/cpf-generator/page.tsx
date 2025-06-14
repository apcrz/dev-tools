import GenerateCpf from '../components/GenerateCpf';

export default function Page() {
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='text-4xl font-bold mb-4'>Gerador de CPF</h1>
            <GenerateCpf />
        </div>
    );
}