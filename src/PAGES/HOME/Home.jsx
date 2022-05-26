import styles from "./home.module.css";

export const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="description">
          <h1 className={styles.title}>Seja bem-vindo!</h1>
          <h4>
            Olá, querido usuário, seja bem-vindo ao software de criação de
            currículos feito por nós da eletiva de Tecnologia e inovação, aqui
            você poderá entender melhor o que é um software e como criar o seu
            currículo para uso nas futuras ações para o mercado de trabalho!
          </h4>
          <h2>Sobre a proposta:</h2>
          <h4>
            Nesta aplicação, procuraremos mostrar ao usuário a maneira correta
            de se escrever um currículo profissional, onde o mesmo terá uma
            breve noção de como criar seu documento de uso pessoal para o
            mercado de trabalho.
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
