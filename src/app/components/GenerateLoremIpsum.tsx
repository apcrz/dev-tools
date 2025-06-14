"use client";

import { useState } from "react";
import { HiClipboard, HiCheck } from "react-icons/hi2";

const LoremIpsumGenerator = () => {
    const [paragraphs, setParagraphs] = useState(1);
    const [loremText, setLoremText] = useState("");
    const [isCopied, setIsCopied] = useState(false);

    const generateLoremIpsum = () => {
        const lorem = [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ];
        let generatedText = "";
        for (let i = 0; i < paragraphs; i++) {
            generatedText += lorem.join(" ") + "\n\n";
        }
        setLoremText(generatedText.trim());
    };

    const handleCopy = () => {
        if (loremText) {
            navigator.clipboard.writeText(loremText).then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
            });
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl h-auto space-y-6 mx-4">
                <div>
                    <label className="block text-lg font-medium text-gray-900 mb-2">
                        Quantidade de parágrafos:
                    </label>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <input
                            type="number"
                            min="1"
                            max="10"
                            value={paragraphs}
                            onChange={(e) => setParagraphs(Number(e.target.value))}
                            className="w-20 p-2 border border-gray-300 rounded text-gray-800 focus:ring-gray-500 text-lg"
                        />
                        <input
                            type="range"
                            min="1"
                            max="10"
                            value={paragraphs}
                            onChange={(e) => setParagraphs(Number(e.target.value))}
                            className="flex-grow h-2 bg-gray-300 rounded-lg focus:ring-gray-500"
                        />
                    </div>
                </div>

                <button
                    onClick={generateLoremIpsum}
                    className="w-full bg-gray-800 text-white p-3 rounded-lg text-lg font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                    Gerar Lorem Ipsum
                </button>

                <div className="relative">
                    <textarea
                        value={loremText}
                        readOnly
                        rows={10}
                        className="w-full p-4 pr-16 border border-gray-300 rounded-lg text-gray-800 bg-gray-50 focus:ring-gray-500 text-lg resize-none"
                    />
                    <button
                        onClick={handleCopy}
                        className={`absolute top-4 right-4 ${isCopied ? "text-green-500" : "text-gray-500 hover:text-gray-700"}`}
                    >
                        {isCopied ? <HiCheck className="w-6 h-6" /> : <HiClipboard className="w-6 h-6" />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoremIpsumGenerator;
