import styles from "./MyText.module.css";

export function MyText() {
  return (
    <div className={styles.container}>
    <div className={styles.div}>
      <h1 className={styles.title}>Meu Primeiro React App</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
        voluptatem eum ducimus aliquid quod repudiandae? Vel laborum nemo beatae
        eveniet minus consequuntur accusamus. Inventore praesentium libero quia
        illo, odio earum?
      </p>
    </div>
    </div>

  );
}
