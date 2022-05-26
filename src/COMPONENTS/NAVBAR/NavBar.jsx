import styles from "./navBar.module.css";
import doc from "./doc.png";

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div className={styles.container}>
        <img src={doc} alt="document" />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/docs">Currículos</Link>
          <Link to="/create">Crie seu currículo</Link>
        </nav>
      </div>
    </>
  );
};
