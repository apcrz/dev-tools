export default function Produtos() {
    return (
        <>

<p className="mb-4">
                        O endpoint de produtos permite gerenciar informações relacionadas a itens disponíveis no sistema,
                        como nome, preço e estoque. Use este recurso para simular catálogos ou listas de produtos.
                    </p>
                    <strong>GET /api/produtos</strong> <br />
                    Retorna a lista de produtos cadastrados. Este endpoint suporta paginação para carregar registros de forma eficiente.<br />
                    Utilize os parâmetros de query <strong>page</strong> e <strong>limit</strong> para especificar a pagina e o número de registros por página
                    respectivamente. <br />
                    Este endpoint suporta também filtro por nome e preço. Utilize os parâmetros de query <strong>nome</strong> e <strong>preco</strong> para filtrar os registros. <br />
                    Exemplo: <strong>
                        /api/produtos?page=1&limit=10&nome=notebook
                    </strong> <br />
                    Resposta esperada:<br />
                    <code className="block mb-4">
                        <pre className="bg-gray-100 text-sm p-4 rounded overflow-x-auto">

                            {
`{
    "data": [
        {
            "id": 1,
            "nome": "Notebook",
            "preco": 3500.00,
            "estoque": 15
        },
        {
            "id": 2,
            "nome": "Mouse",
            "preco": 50.00,
            "estoque": 100
        }
    ],
    "meta": {
        "page": 1,
        "limit": 10,
        "total": 100
    }
}`
                            }
                        </pre>
                    </code>
                    <strong>POST /api/produtos</strong> <br />
                    Cadastra um produto. O produto não será cadastrado, porém a api retornará o status 200 com os dados enviados na requisição, e um ID aleatório<br />
                    Corpo da requisição: <br />
                    <code className="block mb-4">
                        <pre className="bg-gray-100 text-sm p-4 rounded overflow-x-auto">

                            {
`{
    "nome": "Notebook",
    "preco": 3500.00,
    "estoque": 15
}`
                            }
                        </pre>
                    </code>
                    <br />
                    Resposta esperada: <br />
                    <code className="block mb-4">
                        <pre className="bg-gray-100 text-sm p-4 rounded overflow-x-auto">

{`{
    "id": 1,
    "nome": "Notebook",
    "preco": 3500.00,
    "estoque": 15
}`}
                        </pre>
                    </code>
                    <br />
                    <br />
                    <strong>PUT /api/produtos/:id</strong> <br />
                    Atualiza um produto pelo ID. O produto não será atualizado, porém a api retornará o status 204. <br />
                    Corpo da requisição: <br />
                    <code className="block mb-4">
                        <pre className="bg-gray-100 text-sm p-4 rounded overflow-x-auto">

{`{
    "preco": 3200.00
}`}
                        </pre>
                    </code>
                    <br />
                    <br />
                    <strong>DELETE /api/produtos/:id</strong> <br />
                    Exclui um produto pelo ID. O produto não será excluído, porém a api retornará o status 204.
                    <br />
                    <br />
        </>
    );
}