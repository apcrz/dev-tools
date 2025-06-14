import Base64Decoder from '../components/Base64Decoder';

export default function Page() {
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <h1 className="text-4xl font-semibold mb-6">Decodificador Base64</h1>
            <Base64Decoder />
        </div>
    );
}