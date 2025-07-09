// components/CityCard.tsx
interface CityCardProps {
  city: {
    cidade: string;
    temperatura: number;
    umidade: number;
    vento: number;
    sensacaoTermica: number;
    uv: number;
    notificacao: string;
  };
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
  return (
    <div className="border-2 border-gray-800 bg-[#003049] text-[#f1f1f1] p-4 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl hover:text-[#bde0fe]">
      <h2 className="text-xl font-semibold">{city.cidade}</h2>
      <p>Temperatura: {city.temperatura}°C</p>
      <p>Umidade: {city.umidade}%</p>
      <p>Vento: {city.vento} km/h</p>
      <p>Sensação Térmica: {city.sensacaoTermica}°C</p>
      <p>UV: {city.uv}</p>
      <p className="font-bold">{city.notificacao}</p>
    </div>
  );
};

export default CityCard;
