import express from 'express'
import city from './routes/clima.route.js';

const app = express()

// Constante da porta que irá roda o Servidor
const PORT = 3000;

app.use(express.json());

// ROTA GET NO "/"
app.use("/", city);
app.use("/pesquisa/:nome", city);
app.use("/agradaveis", city);
app.use("/quentes", city);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(404).json({ message: "Ocorreu um erro no servidor." });
});

// Notificação de inicialização
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
