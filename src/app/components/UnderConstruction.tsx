import { AiOutlineBuild } from 'react-icons/ai';

export default function UnderConstruction() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto">
                <AiOutlineBuild className="text-6xl text-gray-600 mb-4" />
                <h2 className="text-3xl font-semibold text-gray-800">Página em Construção</h2>
                <p className="text-gray-600 mt-2">
                    Estamos trabalhando nisso! Em breve estará disponível.
                </p>
            </div>
        </div>
    );
}
