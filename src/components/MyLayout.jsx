import React from 'react';
import styles from './MyLayout.module.css';

export function MyLayout() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>Header</header>
      
      <div className={styles.content}>
        <aside className={styles.asideLeft}>Aside Left</aside>

        <main className={styles.main}>
          {/* Criando os cards dentro do main */}
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className={styles.card}>
              <h2>Card {num}</h2>
              <p>Descrição do Card {num}</p>
            </div>
          ))}
        </main>

        <aside className={styles.asideRight}>Aside Right</aside>
      </div>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
