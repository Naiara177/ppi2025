import styles from "./MyGrid.module.css";


export function MyGrid() {
  return (
    <div className={styles.container}>
      <header className={styles.header1}>
        <h1>l'm just a girl </h1> 
      </header>

      <div className={styles.grid}>
        <div className={styles.card}>
          <img  src="https://fastly.picsum.photos/id/1067/200/300.jpg?hmac=9UpH9GvB6swkUWpIG1N53lIk9vdO4YcIwlH59M8er18"/>
          <h2>Card 1</h2>
          <p>Texto sobre a imagem</p>
        </div>
        <div className={styles.card}>
          <img src="//fastly.picsum.photos/id/1018/200/300.jpg?hmac=IrYgAIczHOxOgmWliW3MlASD3LdAJ_aHAdh5f2aY9Sw" />
          <h2>Card 2</h2>
          <p>Texto sobre a imagem</p>
           width="200" 
           height="300"
        </div>
        <div className={styles.card}>
          <img src="//fastly.picsum.photos/id/251/200/300.jpg?hmac=9xXOWzHXFkhqJDfiXSZARyy0pDmdAyazrrJw6VNgoKc" />
          <h2>Card 3</h2>
          <p>Texto sobre a imagem</p>
           width="200" 
           height="100"
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src="//fastly.picsum.photos/id/69/200/300.jpg?hmac=Fi013AQLlcWNitMk_zPUagjtpMSBYGKXEfPstBEXLJA"  />
          <h2>Card 4</h2>
          <p>Texto sobre a imagem</p> 
           width="200" 
           height="300"
        </div>
        <div className={styles.card}>
          <img src="https://fastly.picsum.photos/id/522/200/300.jpg?hmac=6-KFAVAX70eulRbHj_faT1bRFPGrXhPiDHXe6zPaH-4"  />
          <h2>Card 5</h2>
          <p>Texto sobre a imagem</p>
        </div>
        </div>
      <footer className={styles.footer}>
        <p>IFRN - Campus Macau | Técnico em Informática</p>
        <p>Programação para Internet 2025 | Prof. Guilherme Leal Santos</p>
      </footer>
    </div>
  );
}
