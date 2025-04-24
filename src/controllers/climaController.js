import { Climas } from "../models/climaModel.js";

class ClimaController {
    listaCidades(req, res) {
        try {
            // Retornar a lista de cidades usando o método estático
            res.json(Climas.getCidades());
        } catch (error) {
            res.status(404).json({ message: "Erro ao listar cidades." });
        }
    }

    pesquisaCidade(req, res) {
        try {
            const { nome } = req.params; // Obter o nome da cidade a partir dos parâmetros da requisição
            const cidades = Climas.getCidades();
            const cidadeEncontrada = cidades.find(cidade => cidade.cidade.toLowerCase() === nome.toLowerCase());

            if (cidadeEncontrada) {
                const resposta = {
                    ...cidadeEncontrada,
                    notificacao: cidadeEncontrada.notificarCondicoes() // Adicionando a notificação
                };
                res.json(resposta); // Retornar a cidade
            }
                
                res.status(404).json({ message: "Cidade não encontrada." }); // Retornar erro se a cidade não for encontrada
        
            } catch (error) {
            res.status(404).json({ message: "Erro ao pesquisar cidade." });
        }
    }

    cidadesAgradaveis(req, res) {
        try {
            const cidades = Climas.getCidades();
            const cidadesFiltradas = cidades.filter(cidade => {
                const notificacao = cidade.notificarCondicoes();
                return notificacao === "Bom para caminhar" || notificacao === "Temperatura agradável";
            }); 

            res.json(cidadesFiltradas); // Retorna apenas as cidades com climas agradaveis.
        } catch (error) {
            res.status(404).json({ message: "Erro ao filtrar cidades agradáveis." });
        }
    }

    // Método de filtra apenas cidades com altas temperaturas
    cidadesQuentes(req, res){
        const cidades = Climas.getCidades()
        const filtraCidade = cidades.filter(cidade => {
            const notificacao = cidade.notificarCondicoes();
            return notificacao === "Muito Quente";
        })

        res.json(filtraCidade);
    }
}

export default new ClimaController();