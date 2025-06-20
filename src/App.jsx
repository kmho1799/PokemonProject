import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const url = "https://pokeapi.co/api/v2/pokemon/?limit=1008&offset=0";

  useEffect(() => {
    fetchPokeData();
  }, []);

  const fetchPokeData = async () => {
    try {
      const response = await axios.get(url);
      console.log(response.data.results);
      setPokemons(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <article className="pt-6">
      <header className="flex flex-col gap-2 w-full px-4 z-50">
        Input form
      </header>
      <section className="pt-6 flex flex-col justify-content items-center overflow-auto z-0"></section>
    </article>
  );
}

export default App;
