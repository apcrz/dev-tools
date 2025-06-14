import { NextRequest, NextResponse } from "next/server";
import pedidos from "./pedidos.json";
export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page") || "1", 10);
        const limit = parseInt(searchParams.get("limit") || "10", 10);

        const clienteIdFiltro = parseInt(searchParams.get("clienteId") || "0", 10);
        const totalMin = parseFloat(searchParams.get("totalMin") || "0");
        const totalMax = parseFloat(searchParams.get("totalMax") || `${Number.MAX_VALUE}`);

        const inicio = (page - 1) * limit;
        const fim = inicio + limit;

        const pedidosFiltrados = pedidos.filter((pedido) => {
            const clienteIdMatch = clienteIdFiltro ? pedido.clienteId === clienteIdFiltro : true;
            const totalMatch = pedido.total >= totalMin && pedido.total <= totalMax;

            return clienteIdMatch && totalMatch;
        });

        const pedidosPaginados = pedidosFiltrados.slice(inicio, fim);

        return NextResponse.json(
            {
                data: pedidosPaginados,
                meta: {
                    page,
                    limit,
                    total: pedidosFiltrados.length,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Erro ao buscar pedidos" },
            { status: 500 }
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log('POST /api/pedido', body);
        body.id = Math.floor(Math.random() * 1000); 
        return NextResponse.json( body , { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Erro ao cadastrar o pedido' }, { status: 500 });
    }
}
