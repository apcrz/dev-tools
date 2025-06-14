"use client";

import { useState, useEffect, useCallback } from "react";
import { HiClipboard, HiCheck, HiArrowPath } from "react-icons/hi2";

const PasswordGenerator = () => {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(12);
    const [hasUppercase, setHasUppercase] = useState(false);
    const [hasLowercase, setHasLowercase] = useState(true);
    const [hasNumbers, setHasNumbers] = useState(true);
    const [hasSpecialChars, setHasSpecialChars] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        if (password) {
            navigator.clipboard.writeText(password).then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
            });
        }
    };

    const generatePassword = useCallback(() => {
        if (!(hasUppercase || hasLowercase || hasNumbers || hasSpecialChars)) {
            setPassword("");
            return;
        }

        let charset = "";
        if (hasUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (hasLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (hasNumbers) charset += "0123456789";
        if (hasSpecialChars) charset += "!@#$%^&*()_-+=<>?/";

        let generatedPassword = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedPassword += charset[randomIndex];
        }
        setPassword(generatedPassword);
    }, [hasUppercase, hasLowercase, hasNumbers, hasSpecialChars, length]);

    useEffect(() => {
        generatePassword();
    }, [generatePassword]);

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
                <div>
                    <div className="mt-2 space-y-4">
                        {[
                            { id: "uppercase", label: "Maiúsculas", state: hasUppercase, setState: setHasUppercase },
                            { id: "lowercase", label: "Minúsculas", state: hasLowercase, setState: setHasLowercase },
                            { id: "numbers", label: "Números", state: hasNumbers, setState: setHasNumbers },
                            { id: "specialChars", label: "Caracteres Especiais", state: hasSpecialChars, setState: setHasSpecialChars },
                        ].map(({ id, label, state, setState }) => (
                            <label key={id} className="flex items-center space-x-2 text-lg text-gray-900">
                                <input
                                    type="checkbox"
                                    checked={state}
                                    onChange={() => setState(!state)}
                                    className="h-5 w-5 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
                                />
                                <span>{label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="mt-2 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <input
                            type="number"
                            min="8"
                            max="32"
                            value={length}
                            onChange={(e) => setLength(Number(e.target.value))}
                            className="w-20 p-2 border border-gray-300 rounded text-gray-800 focus:ring-gray-500 text-lg"
                        />
                        <input
                            type="range"
                            min="8"
                            max="32"
                            value={length}
                            onChange={(e) => setLength(Number(e.target.value))}
                            className="flex-grow h-2 bg-gray-300 rounded-lg focus:ring-gray-500"
                        />
                    </div>
                </div>

                <div className="relative">
                    <input
                        type="text"
                        value={password}
                        readOnly
                        className="w-full p-4 pr-20 border border-gray-300 rounded-lg text-gray-800 bg-gray-50 focus:ring-gray-500 text-xl"
                        placeholder="Senha gerada"
                    />
                    <button
                        onClick={generatePassword}
                        className="absolute inset-y-0 right-16 px-4 text-gray-500 hover:text-gray-700"
                    >
                        <HiArrowPath className="w-6 h-6" />
                    </button>
                    <button
                        onClick={handleCopy}
                        className={`absolute inset-y-0 right-0 px-4 ${isCopied ? "text-green-500" : "text-gray-500 hover:text-gray-700"}`}
                    >
                        {isCopied ? <HiCheck className="w-6 h-6" /> : <HiClipboard className="w-6 h-6" />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PasswordGenerator;
