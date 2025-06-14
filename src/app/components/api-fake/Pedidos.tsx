export default function Pedidos() {
    return (
        <>

            <p className="mb-4">
                O endpoint de pedidos permite criar, listar, atualizar e excluir pedidos.
                Cada pedido está vinculado a um cliente e inclui uma lista de produtos e o total calculado.
            </p>
            <strong>GET /api/pedidos</strong> <br />
            Retorna a lista de pedidos cadastrados.Este endpoint suporta paginação para carregar registros de forma eficiente.< br />
            Utilize os parâmetros de query < strong > page</strong > e < strong > limit</strong > para especificar a pagina e o número de registros por página
            respectivamente. < br />
            Exemplo: <strong>/api/pedidos?page=1&limit=10</strong><br />
            Resposta esperada:<br />
            <code className='block mb-4'>
                <pre className="bg-gray-100 text-sm p-4 rounded overflow-x-auto">


                    {
`{
    "data": [
        {
            "id": 1,
            "clienteId": 1,
            "produtos": [
                { "id": 1, "quantidade": 2, "preco": 3500.00 },
                { "id": 2, "quantidade": 1, "preco": 50.00 }
            ],
            "total": 7050.00
        },
        {
            "id": 2,
            "clienteId": 2,
            "produtos": [
                { "id": 1, "quantidade": 1, "preco": 3500.00 }
            ],
            "total": 3500.00
        }
    ],
    "meta": {
        "page": 1,
        "limit": 10,
        "total": 250
    }
}`
                    }
                </pre>
            </code>

            <strong>POST /api/pedidos</strong> <br />
            Cria um novo pedido.O pedido não será cadastrado, porém a api retornará o status 200 com os dados enviados na requisição, e um ID aleatório. < br />
            Corpo da requisição: <br />
            <code className='block mb-4'>
                <pre className="bg-gray-100 text-sm p-4 rounded overflow-x-auto">
                    {
`{
    "clienteId": 1,
    "produtos": [
        { "id": 1, "quantidade": 2 },
        { "id": 2, "quantidade": 1 }
    ]
}`
                    }
                </pre>
            </code>
            <br />
            Resposta esperada: <br />
            <code className='block mb-4'>
                <pre className="bg-gray-100 text-sm p-4 rounded overflow-x-auto">

                    {`{
    "id": 1,
    "clienteId": 1,
    "produtos": [
        { "id": 1, "quantidade": 2, "preco": 3500.00 },
        { "id": 2, "quantidade": 1, "preco": 50.00 }
    ],
    "total": 7050.00
}`
                    }
                </pre>
            </code>
            <br />
            <br />
            <strong>PUT /api/pedidos/:id</strong> <br />
            Atualiza um pedido pelo ID.O pedido não será atualizado, porém a api retornará o status 204. < br />
            Corpo da requisição: <br />
            <code className=''>
                <pre className="bg-gray-100 text-sm p-4 rounded overflow-x-auto">

                    {`{
    "id": 1,
    "produtos": [
        { "id": 1, "quantidade": 1 }
    ]
}`}
                </pre>
            </code>
            <br />
            <br />
            <strong>DELETE /api/pedidos/:id</strong> <br />
            Exclui um pedido pelo ID. O pedido não será excluído, porém a api retornará o status 204.
            < br />
            <br />        </>
    )
}
