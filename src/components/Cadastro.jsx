<<<<<<< HEAD
import styles from "./Cadastro.module.css";
import { useState } from "react";
import { onRegister } from "react";

export function Cadastro({ onRegister }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (onRegister) onRegister({ nome, email, senha });
=======
import { useState } from "react";
import styles from "./Cadastrar.module.css";
import { Link, useNavigate } from "react-router";

export function Cadastrar() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleCadastro(e) {
    e.preventDefault();
    if (nome && email && senha) {
      alert(`Usuário ${nome} cadastrado com sucesso!`);
      navigate("/login");
    } else {
      alert("Preencha todos os campos.");
    }
>>>>>>> fae4fa9 (Cooomiiit)
  }

  return (
    <div className={styles.container}>
<<<<<<< HEAD
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
        </label>
        <label>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
=======
      <h2>Cadastrar Usuário</h2>
      <form onSubmit={handleCadastro} className={styles.form}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
      <p>
        Já tem conta? <Link to="/login">Entrar</Link>
      </p>
>>>>>>> fae4fa9 (Cooomiiit)
    </div>
  );
}