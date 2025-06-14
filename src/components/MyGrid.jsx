
import styles from "./MyGrid.module.css";
import React from "react"; 
export function MyGrid() {
  return (
  
    <div className={styles.container}>
      <header className={styles.header1}>
        <lora> <h1>  As Jornadas Visuais</h1></lora>
      </header>
      
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src="https://fastly.picsum.photos/id/1067/200/300.jpg?hmac=9UpH9GvB6swkUWpIG1N53lIk9vdO4YcIwlH59M8er18" alt="Horizonte Urbano" />
          <h1>Horizonte Urbano ao Amanhecer</h1>
          <p>O horizonte está lindo e iluminado pelo sol, criando um efeito de luz suave e dourada.</p>
        </div>
        <div className={styles.card}>
          <img src="https://fastly.picsum.photos/id/1018/200/300.jpg?hmac=IrYgAIczHOxOgmWliW3MlASD3LdAJ_aHAdh5f2aY9Sw" alt="Caminho Entre Montanhas" />
          <h1>Caminho Entre Montanhas</h1>
          <p>Montanhas cobertas por um verde vibrante e atmosfera misteriosa.</p>
        </div>
        <div className={styles.card}>
          <img src="https://fastly.picsum.photos/id/251/200/300.jpg?hmac=9xXOWzHXFkhqJDfiXSZARyy0pDmdAyazrrJw6VNgoKc" alt="Caminho Verde" />
          <h1>Caminho Verde</h1>
          <p>Um caminho de terra serpenteia entre os morros, levando a um grupo denso de árvores.</p>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src="https://fastly.picsum.photos/id/69/200/300.jpg?hmac=Fi013AQLlcWNitMk_zPUagjtpMSBYGKXEfPstBEXLJA" alt="Caminhos Paralelos" />
          <h1>Caminhos Paralelos</h1>
          <p>Os trilhos são cercados por postes e fios de eletricidade, criando um efeito visual marcante.</p>
        </div>
        <div className={styles.card}>
          <img src="https://fastly.picsum.photos/id/522/200/300.jpg?hmac=6-KFAVAX70eulRbHj_faT1bRFPGrXhPiDHXe6zPaH-4" alt="A Energia da Cidade" />
          <h1>A Energia da Cidade</h1>
          <p>Vários carros circulam pela avenida, incluindo um táxi amarelo. O céu está limpo, com algumas nuvens.</p>
        </div>
      </div>

      <footer className={styles.footer}>
      
        <p>IFRN - Campus Macau | Técnico em Informática</p>
        <p>Programação para Internet 2025 | Prof. Guilherme Leal Santos</p>
        <div className={styles.socialIcons}>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-solid fa-comment-dots"></i>
        </div>
      </footer>
    </div>
  );
}
