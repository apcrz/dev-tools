import Base64Encoder from '../components/Base64Encoder';

export default function Page() {
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='text-4xl font-bold mb-4'>Codificador Base64</h1>
            <Base64Encoder />
        </div>
    );
}