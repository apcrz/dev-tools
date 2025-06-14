import { NextRequest, NextResponse } from "next/server";
import produtos from "./produtos.json";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page") || "1", 10);
        const limit = parseInt(searchParams.get("limit") || "10", 10);

        const nomeFiltro = searchParams.get("nome")?.toLowerCase() || "";
        const precoMin = parseFloat(searchParams.get("precoMin") || "0");
        const precoMax = parseFloat(searchParams.get("precoMax") || `${Number.MAX_VALUE}`);

        const inicio = (page - 1) * limit;
        const fim = inicio + limit;

        const produtosFiltrados = produtos.filter((produto) => {
            const nomeMatch = produto.nome.toLowerCase().includes(nomeFiltro);
            const precoMatch = produto.preco >= precoMin && produto.preco <= precoMax;

            return nomeMatch && precoMatch;
        });

        const produtosPaginados = produtosFiltrados.slice(inicio, fim);

        return NextResponse.json(
            {
                data: produtosPaginados,
                meta: {
                    page,
                    limit,
                    total: produtosFiltrados.length,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Erro ao buscar produtos" },
            { status: 500 }
        );
    }
}


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log('POST /api/produtos', body);
        body.id = Math.floor(Math.random() * 1000); 
        return NextResponse.json( body , { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Erro ao cadastrar o produto' }, { status: 500 });
    }
}