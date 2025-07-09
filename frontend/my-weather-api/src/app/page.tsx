"use client";
import { useEffect, useState } from 'react';
import Header from './components/Header';
import CityList from './components/Citylist';
import Footer from './components/Footer';

const Home = () => {
  const [pleasantCities, setPleasantCities] = useState([]);
  const [hotCities, setHotCities] = useState([]);
  const [allCities, setAllCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const pleasantResponse = await fetch('http://localhost:3000/agradaveis');
        const hotResponse = await fetch('http://localhost:3000/quentes');
        const allResponse = await fetch('http://localhost:3000/');

        const pleasantData = await pleasantResponse.json();
        const hotData = await hotResponse.json();
        const allData = await allResponse.json();

        setPleasantCities(pleasantData);
        setHotCities(hotData);
        setAllCities(allData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCities();
  }, []);

  return (
    <>
      <Header />
      <main className="bg-[#457b9d] min-h-screen text-[#f1f1f1]">
        <section id="pleasant" className="my-8">
          <h2 className="text-2xl font-bold">Cidades Agradáveis</h2>
          <CityList cities={pleasantCities} />
        </section>
        <section id="hot" className="my-8">
          <h2 className="text-2xl font-bold">Cidades Quentes</h2>
          <CityList cities={hotCities} />
        </section>
        <section id="all" className="my-8">
          <h2 className="text-2xl font-bold">Todas as Cidades</h2>
          <CityList cities={allCities} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
