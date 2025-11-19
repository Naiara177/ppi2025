import styles from "./ProductList.module.css";
import { useCart } from "../context/CartContext";

export default function ProductList() {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "iPhone 5s",
      price: 199.99,
      desc: "The iPhone 5s is a classic smartphone known for its compact design.",
      image: "https://i.imgur.com/5f1y3YQ.png"
    },
    {
      id: 2,
      name: "iPhone 6",
      price: 299.99,
      desc: "Stylish and capable smartphone with a larger display.",
      image: "https://i.imgur.com/9BtjKzG.png"
    },
    {
      id: 3,
      name: "iPhone 13 Pro",
      price: 1099.99,
      desc: "Cutting-edge smartphone with a powerful camera system.",
      image: "https://i.imgur.com/EN14K9A.png"
    },
    {
      id: 4,
      name: "iPhone X",
      price: 899.99,
      desc: "Flagship device featuring OLED display and Face ID.",
      image: "https://i.imgur.com/UU5mG3F.png"
    },
    {
      id: 5,
      name: "Oppo A57",
      price: 249.99,
      desc: "Mid-range smartphone known for sleek design and good performance.",
      image: "https://i.imgur.com/SVIe0Pn.png"
    }
  ];

  return (
    <div className={styles.grid}>
      {products.map((p) => (
        <div key={p.id} className={styles.card}>
          <img src={p.image} alt={p.name} className={styles.image} />

          <h2>{p.name}</h2>
          <p className={styles.desc}>{p.desc}</p>

          <span className={styles.price}>${p.price}</span>

          <button onClick={() => addToCart(p)}>ADD TO CART</button>
        </div>
      ))}
    </div>
  );
}
