import {useState, useEffect} from 'react';

function useRegisterPlants() {
  const [name, setName] = useState("");
  const [type, setType] = useState("Ornamental");
  const [light, setLight] = useState("Sol");
  const [watering, setWatering] = useState("Diária");
  const [description, setDescription] = useState("");
//CREATE
  const handleRegister = async () => {
    const apiBaseUrl = getApiBaseUrl();

    try {
      const getRes = await fetch(`${apiBaseUrl}/plants`);
      const plants = await getRes.json();

      const nextId = plants.length > 0 //verificar se a lista esta vazia ou não
      ? Math.max(...plants.map(p => Number(p.id))) + 1
      : 0;

    const plantData = {
      id: String(nextId),
      name,
      light,
      type,
      watering,
      description
    };
    
      const response = await fetch(`${apiBaseUrl}/plants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
      });

      if (response.ok) {
        alert("Sua planta foi cadastrada com sucesso!");
        setName("");
        setDescription("");
      } else {
        alert(`Não foi possível cadastrar. Erro ${response.status}.`);
      }
        } catch (error) {
        console.error("Erro ao salvar:", error);
        alert("Erro ao conectar com o servidor.");
        }
    };
    
    return {
        name,
        setName,
        type,
        setType,
        light,
        setLight,
        watering,
        setWatering,
        description,
        setDescription,
        handleRegister,
        };
}

export default useRegisterPlants;