import styles from "./MyGrid.module.css";
import React from "react"; 

export function MyGrid() {
  return (
    <div className={styles.container}>
      
      {/* Cabeçalho */}
      <header className={styles.header1}>
        <h1>As Jornadas Visuais</h1>
      </header>
      
      {/* Grid de imagens */}
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src="https://fastly.picsum.photos/id/1067/200/300.jpg?hmac=9UpH9GvB6swkUWpIG1N53lIk9vdO4YcIwlH59M8er18" alt="Horizonte Urbano" />
          <h2>Horizonte Urbano ao Amanhecer</h2>
          <p>O horizonte está lindo e iluminado pelo sol, criando um efeito de luz suave e dourada.</p>
        </div>
        <div className={styles.card}>
          <img src="https://fastly.picsum.photos/id/1018/200/300.jpg?hmac=IrYgAIczHOxOgmWliW3MlASD3LdAJ_aHAdh5f2aY9Sw" alt="Caminho Entre Montanhas" />
          <h2>Caminho Entre Montanhas</h2>
          <p>Montanhas cobertas por um verde vibrante e atmosfera misteriosa.</p>
        </div>
        <div className={styles.card}>
          <img src="https://fastly.picsum.photos/id/251/200/300.jpg?hmac=9xXOWzHXFkhqJDfiXSZARyy0pDmdAyazrrJw6VNgoKc" alt="Caminho Verde" />
          <h2>Caminho Verde</h2>
          <p>Um caminho de terra serpenteia entre os morros, levando a um grupo denso de árvores.</p>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <img src="https://fastly.picsum.photos/id/69/200/300.jpg?hmac=Fi013AQLlcWNitMk_zPUagjtpMSBYGKXEfPstBEXLJA" alt="Caminhos Paralelos" />
          <h2>Caminhos Paralelos</h2>
          <p>Os trilhos são cercados por postes e fios de eletricidade, criando um efeito visual marcante.</p>
        </div>
        <div className={styles.card}>
          <img src="https://fastly.picsum.photos/id/522/200/300.jpg?hmac=6-KFAVAX70eulRbHj_faT1bRFPGrXhPiDHXe6zPaH-4" alt="A Energia da Cidade" />
          <h2>A Energia da Cidade</h2>
          <p>Vários carros circulam pela avenida, incluindo um táxi amarelo. O céu está limpo, com algumas nuvens.</p>
        </div>
      </div>

      {/* Rodapé */}
      <footer className={styles.footer}>
        <p>IFRN - Campus Macau | Técnico em Informática</p>
        <p>Programação para Internet 2025 | Naiara Barros Lourenço</p>
        <div className={styles.socialIcons}>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-solid fa-comment-dots"></i>
        </div>
      </footer>
      
    </div>
  );
}
