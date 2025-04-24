import { Router } from "express";
import climaController from "../controllers/climaController.js";

const city = Router();

// Rotas utilizadas da API
city.get("/", climaController.listaCidades);
city.get("/pesquisa/:nome", climaController.pesquisaCidade); 
city.get("/agradaveis", climaController.cidadesAgradaveis);
city.get("/quentes", climaController.cidadesQuentes);

export default city;