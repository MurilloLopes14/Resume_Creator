import styles from "./notFound.module.css";
import notFound from "./notFound.png";

export const NotFound = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Ops! Parece que não há nada por aqui!</h1>
        <img src={notFound} alt="NotFound" />
      </div>
    </>
  );
};
