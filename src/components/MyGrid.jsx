import styles from './MyGrid.module.css';

export function MyGrid() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Grid Component</h1>
      <p className={styles.description}>
        This is a simple grid layout using CSS modules.
      </p>

      <div className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Card 1</h2>
            <p>This is the content of card 1.</p>
          </div>
          <div className={styles.card}>
            <h2>Card 2</h2>
            <p>This is the content of card 2.</p>
          </div>
          <div className={styles.card}>
            <h2>Card 3</h2>
            <p>This is the content of card 3.</p>
          </div>
          <div className={styles.card}>
            <h2>Card 4</h2>
            <p>This is the content of card 4.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
