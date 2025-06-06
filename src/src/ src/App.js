import React from 'react';
import './App.css';

function App() {
  return (
    <div className="layout">
      <header className="header">Header</header>
      
      <aside className="left-aside">Aside Esquerdo</aside>
      <header className="secondary-header">Header Secundário</header>
      <aside className="right-aside">Aside Direito</aside>
      
      <main className="main-content">
        <div className="cards-container">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="card">
              <h3 className="card-title">Card {item}</h3>
              <p className="card-description">
                Descrição do card {item}. Exemplo de conteúdo.
              </p>
            </div>
          ))}
        </div>
      </main>
      
      <footer className="main-footer">Footer Principal</footer>
      <footer className="secondary-footer">Footer Secundário</footer>
    </div>
  );
}

export default App;