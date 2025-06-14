export default function Auth() {
    return (
        <>
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
}`
                    }
                </pre>
            </code>
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
        </>
    );
}