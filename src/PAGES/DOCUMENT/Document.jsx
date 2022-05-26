import styles from "./document.module.css";

import { Link } from "react-router-dom";
import { useFetch } from "../../HOOKS/useFetch";

export const Document = () => {
  const url = "http://localhost:3000/documents";

  const { data: docs, httpConfig } = useFetch(url);

  const handleDelete = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <>
      <h1 className={styles.title}>Currículos:</h1>
      <div className={styles.box}>
        {docs &&
          docs.map((doc) => (
            <li key={doc.id} className={styles.list}>
              <h2>Nome: {doc.name}</h2>
              <p>Idade: {doc.age}</p>
              <div className={styles.info_del}></div>
              <Link to={`/docs/${doc.id}`}>Mais detalhes</Link>
              <input
                type="button"
                value="Deletar"
                onClick={() => handleDelete(doc.id)}
              />
            </li>
          ))}
      </div>
    </>
  );
};
