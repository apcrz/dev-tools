'use client';

import { useState } from 'react';

const Base64Encoder = () => {
    const [input, setInput] = useState<string>('');

    const handleInputChange = (value: string) => {
        setInput(value);
    };

    const encoded = btoa(input || '');

    return (
        <div className="flex flex-col items-center p-4">
            <div className="flex w-full max-w-4xl space-x-4">
                <textarea
                    className="w-1/2 p-4 border rounded resize-none"
                    rows={10}
                    placeholder="Digite o texto aqui..."
                    value={input}
                    onChange={(e) => handleInputChange(e.target.value)}
                />
                <textarea
                    className="w-1/2 p-4 border rounded resize-none bg-gray-100"
                    rows={10}
                    value={encoded}
                    readOnly
                />
            </div>
        </div>
    );
};

export default Base64Encoder;
