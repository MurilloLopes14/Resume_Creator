import styles from "./home.module.css";

export const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="description">
          <h1 className={styles.title}>Seja bem-vindo!</h1>
          <h4>
            Olá, esta é uma aplicação feita com React.js e JSON server, com o
            objetivo de realizar a criação de e armazenamento de um currículo
            para fins de experiência. Feito por Murillo de Oliveira Lopes.
          </h4>
          <h2>Sobre a proposta:</h2>
          <h4>
            Nesta apliação você entenderá como seria a criação de um currículo a
            base de um pequeno software de criação de documentos. (OBS: Não se
            esqueca de ativar o json server para que a aplicação funcione).
          </h4>
        </div>
        <h1 className={styles.title}>
          É importante que seu currículo contenha:
        </h1>
        <ul>
          <li className={styles.info}>
            <h3>Nome:</h3>
            <h4>As pessoas precisam saber do seu nome completo.</h4>
          </li>
          <li className={styles.info}>
            <h3>Idade:</h3>
            <h4>
              Os profissionais que forem te avaliar preciam saber a sua idade
              para conhecer mais sobre você.
            </h4>
          </li>
          <li className={styles.info}>
            <h3>Descrição:</h3>
            <h4>
              É aqui onde você vai colocar sua carreira, os cursos técnicos que
              já fex ou está fazendo, se você sabe falar alguma língua além da
              sua nativa, entre outras coisas que falem mais sobre você e seu
              jeito profissional de ser.
            </h4>
          </li>
          <li className={styles.info}>
            <h3>Contato:</h3>
            <h4>
              Para aqueles que se interessarem no seu perfil, é bom que eles
              tenham algum modo de entrar em contato com você.
            </h4>
          </li>
        </ul>
      </div>
    </>
  );
};
