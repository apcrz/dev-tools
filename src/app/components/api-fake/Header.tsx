export default function Header() {
    return (
        <>
            <p>
                Esta funcionalidade permite que o usuário possa obter dados de uma API Rest fake, que pode retornar dados de clientes, produtos e pedidos. O objetivo é ser uma ferramenta útil para desenvolvimento frontend enquanto o backend não estiver pronto.
            </p>

            <h2 className='text-2xl font-bold mt-5'>Como usar</h2>
            <p className='my-5'>
                Acesse as rotas descritas nas abas abaixo no seu frontend ou através de um cliente HTTP como o Postman. As requisições não são salvas no banco de dados, mas retornam os dados enviados na requisição com um ID aleatório. Isso permite que você teste a integração do frontend com a API sem se preocupar com a persistência dos dados. <br />
            </p>
        </>

    );
}