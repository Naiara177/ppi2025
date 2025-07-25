export function Product({ product, addToCart }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", width: "250px", textAlign: "center" }}>
      <img src={product.thumbnail} alt={product.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
      <h3>{product.title}</h3>
      <p>{product.description.slice(0, 50)}...</p>
      <strong>R$ {product.price}</strong>
      <br />
      <button onClick={() => addToCart(product)} style={{ marginTop: "0.5rem" }}>
        Adicionar ao carrinho
      </button>
    </div>
  );
}
