import { useState } from "react";

export function Login({ onSwitchToRegister, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Aqui você poderia validar com um backend
    if (email && senha) {
      alert("Login realizado com sucesso!");
      onLoginSuccess(email);
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Entrar</button>
      </form>
      <p>
        Não tem conta?{" "}
        <button onClick={onSwitchToRegister} style={styles.link}>
          Cadastre-se
        </button>
      </p>
    </div>
  );
}

const styles = {
  container: { maxWidth: 300, margin: "50px auto", textAlign: "center" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: { padding: "8px" },
  button: { padding: "8px", background: "blue", color: "#fff", border: "none" },
  link: { background: "none", border: "none", color: "blue", cursor: "pointer" }
};
