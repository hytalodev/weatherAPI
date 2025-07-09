import { Climas } from "../models/clima.Model.js";

class ClimaController {
    // Code block, which will display the cities.
    listaCidades(req, res) {
        try {
            res.json(Climas.getCidades());
        } catch (error) {
            res.status(500).json({ message: "Erro ao listar cidades." });
        }
    }

    // Code block to filter/search cities.
    pesquisaCidade(req, res) {
        try {
            const { nome } = req.params;
            const cidades = Climas.getCidades();
            const cidadeEncontrada = cidades.find(cidade => cidade.cidade.toLowerCase() === nome.toLowerCase());

            if (cidadeEncontrada) {
                const resposta = {
                    //Slow Object with mocked data.
                    ...cidadeEncontrada,
                    notificacao: cidadeEncontrada.notificarCondicoes()
                };
                return res.json(resposta);
            }
                
            res.status(404).json({ message: "Cidade não encontrada." });
        } catch (error) {
            res.status(500).json({ message: "Erro ao pesquisar cidade." });
        }
    }

    // Code block, which filters the city with pleasant climates.
    cidadesAgradaveis(req, res) {
        try {
            const cidades = Climas.getCidades();
            const cidadesFiltradas = cidades.filter(cidade => {
                const notificacao = cidade.notificarCondicoes();
                return notificacao === "Bom para caminhar" || notificacao === "Temperatura agradável";
            }); 

            res.json(cidadesFiltradas);
        } catch (error) {
            res.status(500).json({ message: "Erro ao filtrar cidades agradáveis." });
        }
    }

    // Code block, which filters the city with hot climates.
    cidadesQuentes(req, res) {
        try {
            const cidades = Climas.getCidades();
            const filtraCidade = cidades.filter(cidade => {
                const notificacao = cidade.notificarCondicoes();
                return notificacao === "Muito Quente";  //Returns the city that has this condition.
            });

            res.json(filtraCidade);
        } catch (error) {
            res.status(500).json({ message: "Erro ao filtrar cidades quentes." });
        }
    }
}

export default new ClimaController();