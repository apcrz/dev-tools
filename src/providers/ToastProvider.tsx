'use client';

import { ReactNode, createContext, useContext, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

interface ToastContextProps {
    showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined)

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const showToast = (message: string, type?: 'success' | 'error' | 'info') => {
        if (type === 'success') {
            toast.success(message)
        } else if (type === 'error') {
            toast.error(message)
        } else {
            toast(message)
        }
    }

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <Toaster position="top-right" />
        </ToastContext.Provider>
    )
}

export const useToast = () => {
    const context = useContext(ToastContext)
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider')
    }
    return context
}
