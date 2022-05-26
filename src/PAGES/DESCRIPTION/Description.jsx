import styles from "./description.module.css";

import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../HOOKS/useFetch";

export const Description = () => {
  const { id } = useParams();

  const url = "http://localhost:3000/documents/" + id;

  const { data: items } = useFetch(url);

  return (
    <>
      <div className={styles.container}>
        <Link to="/docs">Voltar</Link>
        {items && (
          <ul className={styles.list}>
            <li className={styles.item}>
              <h2>Nome: {items.name}</h2>
              <h2>Idade: {items.age}</h2>
              <h2>Descrição: {items.description}</h2>
              <h2>Telefone: {items.phone}</h2>
              <h2>E-mail: {items.mail}</h2>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};
