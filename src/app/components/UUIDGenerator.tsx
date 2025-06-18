'use client'

import { useState, useEffect } from 'react'
import { Button, Card, TextInput } from 'flowbite-react'
import toast from 'react-hot-toast'

export default function UUIDGenerator() {
    const [uuid, setUuid] = useState('')

    const generateUUID = () => {
        const newUuid = crypto.randomUUID()
        setUuid(newUuid)
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(uuid)
        toast.success('UUID copiado para a área de transferência!')
    }

    useEffect(() => {
        generateUUID()
    }, [])

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <Card className="w-full max-w-lg shadow-lg">
                <h1 className="text-center text-2xl font-bold text-gray-800">
                    Gerador de UUID
                </h1>

                <TextInput
                    type="text"
                    readOnly
                    value={uuid}
                    color="gray"
                    className="w-full text-sm"
                />

                <div className="flex justify-end space-x-3 mt-4">
                    <Button color="gray" onClick={generateUUID}>
                        Gerar novo
                    </Button>
                    <Button color="success" onClick={copyToClipboard}>
                        Copiar
                    </Button>
                </div>
            </Card>
        </div>
    )
}
