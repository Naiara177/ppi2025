export function SitePrincipal({ usuario }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Bem-vindo(a), {usuario}!</h1>
      <p>Agora você está logado e pode acessar o conteúdo do site.</p>
      {/* Aqui você coloca o seu carrinho, produtos etc */}
    </div>
  );
}
