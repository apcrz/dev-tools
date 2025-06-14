'use client';

import React from 'react';
import { Tabs } from "flowbite-react";

const ApiFakePage: React.FC = () => {
    return (
        <div className='justify-center h-full'>
            <h1 className='text-4xl font-bold text-center mb-5'>Gerador de Senhas</h1>
            <p>
                Esta funcionalidade permite que o usuário possa obter dados de uma API Rest fake, que pode retornar dados de clientes, produtos e pedidos. O objetivo é ser uma ferramenta útil para desenvolvimento frontend enquanto o backend não estiver pronto.
            </p>

            <h2 className='text-2xl font-bold mt-5'>Como usar</h2>
            <p className='my-5'>
                Acesse as rotas descritas nas abas abaixo no seu frontend ou através de um cliente HTTP como o Postman. As requisições não são salvas no banco de dados, mas retornam os dados enviados na requisição com um ID aleatório. Isso permite que você teste a integração do frontend com a API sem se preocupar com a persistência dos dados. <br />
            </p>
            <Tabs aria-label="Tabs with icons" variant="underline">
                <Tabs.Item active title="Autenticação">
                    <p className="mb-4">
                        O endpoint de autenticação permite simular o login de usuários. Use este recurso para testar a autenticação em seu frontend. <br />
                        A API aceita qualquer email e senha. <br />
                        Se o campo <strong>simulateError</strong> for enviado como <strong>true</strong>, a API retornará um erro 401. <br />
                    </p>
                    <strong> POST /api/auth/login</strong> <br />
                    Corpo da requisição: <br />
                    <code className="block mb-4">
                        <pre className="bg-gray-100 text-sm p-4 rounded overflow-x-auto">
                            {
`{
    "email": "joao.silva@email.com",
    "senha": "123456"
}`
                            }
                        </pre>
                    </code>
                    Resposta esperada: <br />
                    <code className="block mb-4">
                        <pre className="bg-gray-100 text-sm p-4 rounded overflow-x-auto">
                            {
`{
    "token": "jwt-token" 
}`}
                        </pre>
                    </code>
                    <br />
                    <br />
                    Simulação do erro: <br />
                    <code className='block mb-4'>
                        <pre className="bg-gray-100 text-sm p-4 rounded overflow-x-auto">
                            {
`{
    "email": "joao.silva@email.com",
    "senha": "123456",
    "simulateError": true
}`}
                        </pre>
                    </code>
                    Resposta esperada: <br />
                    <code className="block mb-4">
                        <pre className="bg-gray-100 text-sm p-4 rounded overflow-x-auto">
                            {
`{
    "message": "Usuário ou senha inválidos"
}`}
                        </pre>
                    </code>
                </Tabs.Item>
                <Tabs.Item title="Clientes">
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
                </Tabs.Item>

                <Tabs.Item title="Produtos">
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
                </Tabs.Item>

                <Tabs.Item title="Pedidos">
                    <p className="mb-4">
                        O endpoint de pedidos permite criar, listar, atualizar e excluir pedidos.
                        Cada pedido está vinculado a um cliente e inclui uma lista de produtos e o total calculado.
                    </p>
                    <strong>GET /api/pedidos</strong> <br />
                    Retorna a lista de pedidos cadastrados. Este endpoint suporta paginação para carregar registros de forma eficiente.<br />
                    Utilize os parâmetros de query <strong>page</strong> e <strong>limit</strong> para especificar a pagina e o número de registros por página
                    respectivamente. <br />
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
}`

                            }
                        </pre>
                    </code>

                    <strong>POST /api/pedidos</strong> <br />
                    Cria um novo pedido. O pedido não será cadastrado, porém a api retornará o status 200 com os dados enviados na requisição, e um ID aleatório. <br />
                    Corpo da requisição: <br />
                    <code className='block mb-4'>
                        <pre className="bg-gray-100 text-sm p-4 rounded overflow-x-auto">


{`{
    "clienteId": 1,
    "produtos": [
        { "id": 1, "quantidade": 2 },
        { "id": 2, "quantidade": 1 }
    ]
}`}
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
}`}
                            </pre>
                        </code>
                    <br />
                    <br />
                    <strong>PUT /api/pedidos/:id</strong> <br />
                    Atualiza um pedido pelo ID. O pedido não será atualizado, porém a api retornará o status 204. <br />
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
                    <br />
                    <br />
                </Tabs.Item>
            </Tabs>
        </div>
    );
};

export default ApiFakePage;