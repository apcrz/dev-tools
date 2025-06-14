export default function Clientes() {
    return (
        <>


                    <p className="mb-4">
                        O endpoint de clientes permite criar, listar, atualizar e deletar informações sobre clientes.
                        Você pode testar as funcionalidades básicas de CRUD (Create, Read, Update e Delete) no seu frontend.
                    </p>
                    <strong>GET /api/clientes</strong> <br />
                    Retorna a lista de clientes cadastrados. Este endpoint suporta paginação para carregar registros de forma eficiente.<br />
                    Utilize os parâmetros de query <strong>page</strong> e <strong>limit</strong> para especificar a pagina e o número de registros por página
                    respectivamente. <br />
                    Este endpoint suporta também filtro por nome, email e telefone. Utilize os parâmetros de query <strong>nome</strong>, <strong>email</strong> e <strong>telefone</strong> para filtrar os registros. <br />
                    Exemplo: <strong>/api/clientes?page=1&limit=10&nome=joao&email=email.com&telefone=119</strong> <br />
                    Este endpoint terá um total de 500 registros fixos.<br />
                    Resposta esperada: <br />
                    <code className="block mb-4">
                        <pre className="bg-gray-100 text-sm p-4 rounded overflow-x-auto">
                            {
`{
    "data": [
        {
            "id": 1,
            "nome": "João Silva",
            "email": "joao.silva@email.com",
            "telefone": "11987654321"
        },
        {
            "id": 2,
            "nome": "Maria Oliveira",
            "email": "maria.oliveira@email.com",
            "telefone": "11912345678"
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

                    <br />
                    <br />
                    <strong>POST /api/clientes</strong> <br />
                    Cadastra um cliente pelo ID. O cliente não será cadastrado, porém a api retornará o status 201 com os dados enviados na requisição, e um ID aleatório. <br />
                    Corpo da requisição: <br />
                    <code className="block mb-4">
                        <pre className="bg-gray-100 text-sm p-4 rounded overflow-x-auto">
{`{
    "nome": "João Silva",
    "email": "joao.silva@email.com",
    "telefone": "11987654321"
}`}
                        </pre>
                    </code>
                    <br />
                    Resposta esperada: <br />
                    <code>
                        <pre className="bg-gray-100 text-sm p-4 rounded overflow-x-auto">

{`{
    "id": 1,
    "nome": "João Silva",
    "email": "joao.silva@email.com",
    "telefone": "11987654321"
}`}
                        </pre>
                    </code>
                    <br />
                    <br />
                    
                    <strong>PUT /api/clientes/:id</strong> <br />
                    Atualiza um cliente pelo ID. O cliente não será atualizado, porém a api retornará o status 204. <br />
                    Corpo da requisição: <br />
                    <code className="block mb-4">
                        <pre className="bg-gray-100 text-sm p-4 rounded overflow-x-auto">

{`{
    "nome": "João S.",
    "email": "joao.s@email.com"
}`}
                        </pre>
                    </code>
                    <br />
                    <br />
                    <strong>DELETE /api/clientes/:id</strong> <br />
                    Exclui um cliente pelo ID. O cliente não será exclído, porém a api retornará o status 204.
                    <br />
                    <br />
        </>
    )
}
