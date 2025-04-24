export class Climas {
    constructor(cidade, temperatura, umidade, vento, sensacaoTermica, uv) {
        this.cidade = cidade;
        this.temperatura = temperatura;
        this.umidade = umidade;
        this.vento = vento;
        this.sensacaoTermica = sensacaoTermica;
        this.uv = uv;
    }

    mostraClima() {
        return `Cidade: ${this.cidade} | Temperatura: ${this.temperatura}° C | Umidade: ${this.umidade}% 
        | Vento: ${this.vento}km/h | Sensação Termica: ${this.sensacaoTermica}° C | UV: ${this.uv}`;
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
            new Climas("São Paulo", 24, 65, 10, 23, 5),
            new Climas("Rio de Janeiro", 30, 70, 12, 29, 7),
            new Climas("Belo Horizonte", 26, 60, 8, 25, 6),
            new Climas("Salvador", 28, 75, 10, 27, 8),
            new Climas("Brasília", 22, 50, 15, 21, 4),
            new Climas("Curitiba", 20, 80, 5, 19, 3),
            new Climas("Fortaleza", 32, 65, 14, 31, 9),
            new Climas("Manaus", 34, 85, 8, 33, 10),
            new Climas("Recife", 29, 78, 10, 28, 6),
            new Climas("Porto Alegre", 23, 60, 12, 22, 5)
        ];
    }
}