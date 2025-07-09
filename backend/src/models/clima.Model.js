export class Climas {
    constructor(cidade, temperatura, umidade, vento, sensacaoTermica, condicaoTempo) {
        this.cidade = cidade;
        this.temperatura = temperatura;
        this.umidade = umidade;
        this.vento = vento;
        this.sensacaoTermica = sensacaoTermica;
        this.condicaoTempo = condicaoTempo; // Novo campo
    }

    mostraClima() {
        return `Cidade: ${this.cidade} | Temperatura: ${this.temperatura}° C | Umidade: ${this.umidade}% 
        | Vento: ${this.vento}km/h | Sensação Termica: ${this.sensacaoTermica}° C | Condição do Tempo: ${this.condicaoTempo}`;
    }

    // Método para determinar a notificação com base na temperatura
    notificarCondicoes() {
        if (this.temperatura < 20) {
            return "Bom para caminhar";
        } else if (this.temperatura >= 20 && this.temperatura <= 30) {
            return "Temperatura agradável";
        }
        return "Muito Quente";
    }

    // Banco de dados Mocado
    static getCidades() {
        return [
            new Climas("São Paulo", 24, 65, 10, 23, "ensolarado"),
            new Climas("Rio de Janeiro", 30, 70, 12, 29, "nublado"),
            new Climas("Belo Horizonte", 26, 60, 8, 25, "chuva"),
            new Climas("Salvador", 28, 75, 10, 27, "ensolarado"),
            new Climas("Brasília", 22, 50, 15, 21, "nublado"),
            new Climas("Curitiba", 20, 80, 5, 19, "chuva"),
            new Climas("Fortaleza", 32, 65, 14, 31, "ensolarado"),
            new Climas("Manaus", 34, 85, 8, 33, "chuva"),
            new Climas("Recife", 29, 78, 10, 28, "nublado"),
            new Climas("Porto Alegre", 23, 60, 12, 22, "ensolarado")
        ];
    }
}
