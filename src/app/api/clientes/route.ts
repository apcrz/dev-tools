import clientes from './clientes.json'
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1', 10);
        const limit = parseInt(searchParams.get('limit') || '10', 10);

        const nomeFiltro = searchParams.get("nome")?.toLowerCase() || "";
        const emailFiltro = searchParams.get("email")?.toLowerCase() || "";
        const telefoneFiltro = searchParams.get("telefone") || "";

        const inicio = (page - 1) * limit;
        const fim = inicio + limit;

        const clientesFiltrados = clientes.filter((cliente) => {
            const nomeMatch = cliente.nomeCompleto.toLowerCase().includes(nomeFiltro);
            const emailMatch = cliente.email.toLowerCase().includes(emailFiltro);
            const telefoneMatch = cliente.telefone.includes(telefoneFiltro);

            return nomeMatch && emailMatch && telefoneMatch;
        });

        const clientesPaginados = clientesFiltrados.slice(inicio, fim);

        return NextResponse.json(
            {
                data: clientesPaginados,
                meta: {
                    page,
                    limit,
                    total: clientesFiltrados.length,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log('POST /api/clientes', body);
        body.id = Math.floor(Math.random() * 1000); 
        return NextResponse.json( body , { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Erro ao cadastrar o cliente' }, { status: 500 });
    }
}