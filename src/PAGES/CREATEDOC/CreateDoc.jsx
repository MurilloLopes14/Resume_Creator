import styles from "./createDoc.module.css";
import { useFetch } from "../../HOOKS/useFetch";
import { useState } from "react";

export const CreateDoc = () => {
  const url = "http://localhost:3000/documents";
  const { httpConfig, loading } = useFetch(url);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [sucess, setSucess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const document = {
      name,
      age,
      description,
      mail,
      phone,
    };

    httpConfig(document, "POST");

    setName("");
    setAge("");
    setDescription("");
    setMail("");
    setPhone("");
    setSucess(true);
  };

  if (sucess) {
    setSucess(false);
    alert("Sucesso no envio!");
  }

  return (
    <>
      <div className={styles.container}>
        <h1>Crie seu currículo profissional!</h1>
        <h2>Preencha todos os campos e envie seu formulário.</h2>
        {loading && <h2>Carregando Dados...</h2>}
        <form onSubmit={handleSubmit}>
          <div className={styles.name_age}>
            <label>Nome: </label>
            <input
              className={styles.name}
              type="text"
              placeholder="Escreva seu nome"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Idade: </label>
            <input
              className={styles.age}
              type="number"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <label>Descrição: </label>
          <textarea
            name="description"
            cols="60"
            rows="10"
            placeholder="Coloque os feitos de sua carreira profissional e de estudos"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className={styles.phone_mail}>
            <label>E-mail: </label>
            <input
              className={styles.mail}
              type="email"
              placeholder="emailprincipal@hotmail.com"
              required
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <label>Phone: </label>
            <input
              className={styles.phone}
              type="text"
              placeholder="11 123456789"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={styles.submit}>
            <input className={styles.button} type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    </>
  );
};
