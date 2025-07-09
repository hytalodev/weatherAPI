// components/CityList.tsx
import CityCard from './CityCard';

interface CityListProps {
  cities: any[];
}

const CityList: React.FC<CityListProps> = ({ cities }) => {
  return (
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">
      {cities.map((city, index) => (
        <CityCard key={index} city={city} />
      ))}
    </div>
  );
};

export default CityList;
