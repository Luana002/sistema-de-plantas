import {useState} from 'react';
import Btn from '../components/Button';

function RegisterPlants() {
  const [name, setName] = useState("");
  const [type, setType] = useState("Ornamental");
  const [light, setLight] = useState("Sol");
  const [watering, setWatering] = useState("Diária");
  const [description, setDescription] = useState("");

  const handleRegister = async () => {
    const plantData = {
      name: name,
      light: light,
      type: type,
      watering: watering,
      description: description
    };
    
    try {
      const response = await fetch("https://psychic-space-invention-4j7vqr4r56p43qprw-3001.app.github.dev/plants", {
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
      }
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#ffffff"
  };
  const styleContainer = {
    display:"flex",
    flexDirection: "column",
    //alignItems: "center",
    backgroundColor: "#5f8d5a",
    width: "500px",
    padding: "25px",
    gap: "12px",
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
    color: "white",
  };
  const allInput = {
    height: "30px", // altura
    width: "100%",
    borderRadius: "5px",
    border: "none",
    padding: "0 5px",
    boxSizing: "border-box"
  };

  return (
    <>
    <div style={pageStyle}>
      <h1 style={{marginTop:"50px"}}>
        Cadastro
      </h1>
      <div style={styleContainer}>

        {/*<hr />*/}

        <label style={{alignSelf: "flex-start"}}>Nome da planta</label>
        <input type="text"
        style={allInput}
        value={name} 
        onChange={(e) => setName(e.target.value)}
        />

        <label>Tipo de iluminação</label>
        <select name="Iluminação" id="" 
        style={allInput}
        value={light}
        onChange={(e) => setLight(e.target.value)}
        >
          <option>Sol</option>
          <option>Meia-sombra</option>
          <option>Sombra</option>
        </select>

        <label htmlFor="">Tipo</label>
        <select
        style={allInput} 
        value={type} 
        onChange={(e) => setType(e.target.value)}>
          <option>Ornamental</option>
          <option>Medicinal</option>
          <option>Suculenta</option>
          <option>Cacto</option>
          <option>Árvore</option>
          <option>Arbusto</option>
          <option>Hortaliça</option>
          <option>Frutífera</option>
          <option>PANC(Planta Alimentícia Não Convencional)</option>
        </select>

        <label htmlFor="">Frequência de Rega</label>
        <select
        style={allInput}
        value={watering}
        onChange={(e) => setWatering(e.target.value)}
        >
          <option>Diária</option>
          <option>Frequente (2 a 3 vezes por semana)</option>
          <option>Moderada (1 vez por semana)</option>
          <option>Rara (A cada 15 dias ou menos)</option>
          <option>Apenas quando o solo estiver seco</option>
        </select>

        <label>Descrição (opcional)</label>
        <textarea style={{...allInput, height: "200px", paddingTop: "5px", resize: "none"}}
        placeholder="Conte mais sobre essa planta..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />

        <Btn
          onClick={handleRegister}
          color= "#0a3407"
          hoverColor='#c4932b'
          style={{
            alignSelf:"center",
            marginTop:'20px', 
            height: '40px', 
            width:"250px",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            textAlign:"center"
          }}
        >
          Cadastrar sua planta</Btn>

      </div>
    </div>
    </>
  );
}

export default RegisterPlants;