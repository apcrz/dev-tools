import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'supersecretkey123';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { username, password, simulateError } = body;
        if (!username || !password) {
            return NextResponse.json(
                { message: 'Usuário e senha são obrigatórios' },
                { status: 400 }
            );
        }

        if (simulateError) {
            return NextResponse.json(
                { message: 'Usuário ou senha inválidos' },
                { status: 401 }
            );
        }

        const token = jwt.sign({ id: 1 }, SECRET_KEY, { expiresIn: '1h' });
    
        return NextResponse.json({ token }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: 'Ocorreu um erro ao realizar o login' },
            { status: 500 }
        );
    }
}

export function OPTIONS() {
    return NextResponse.json(null, {
        status: 204,

        headers: {
            'Allow': 'POST, OPTIONS',
        },
    });
}
