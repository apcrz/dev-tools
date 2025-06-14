import GeneratePassword from '../components/GeneratePassword';

export default function Page() {
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='text-4xl font-bold'>Gerador de Senhas</h1>
            <GeneratePassword />
        </div>
    );
}