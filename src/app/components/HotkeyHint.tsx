// components/HotkeyHint.tsx
'use client';

import { useEffect, useState } from 'react';
import { FaKeyboard } from 'react-icons/fa';

export function HotkeyHint() {
    const [showHint, setShowHint] = useState(false);
    const [usedBefore, setUsedBefore] = useState(false);

    useEffect(() => {
        const hasUsed = localStorage.getItem('usedCommandK');
        if (!hasUsed) {
            const timer = setTimeout(() => setShowHint(true), 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    if (usedBefore || !showHint) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={() => {
                    localStorage.setItem('usedCommandK', 'true');
                    setUsedBefore(true);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full shadow-lg animate-bounce"
            >
                <FaKeyboard />
                <span>Pressione <kbd>{navigator?.userAgent?.includes('Mac') ? '⌘K' : 'Ctrl+K'}</kbd></span>
            </button>
        </div>
    );
}