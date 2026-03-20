import Btn from '../components/Button';
import './RegisterPlants.css';
import useRegisterPlants from '../hooks/useRegisterPlants';

function RegisterPlants() {
  const {
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
  } = useRegisterPlants();

  return (
    <>
      <div id="pageStyle">
        <h1 style={{ marginTop: '50px' }}>Cadastro</h1>

        <div id="styleContainer">
          <label style={{ alignSelf: 'flex-start' }}>Nome da planta</label>
          <input
            type="text"
            id="allInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Tipo de iluminação</label>
          <select
            name="Iluminação"
            id="allInput"
            value={light}
            onChange={(e) => setLight(e.target.value)}
          >
            <option>Sol</option>
            <option>Meia-sombra</option>
            <option>Sombra</option>
          </select>

          <label>Tipo</label>
          <select
            id="allInput"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
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

          <label>Frequência de Rega</label>
          <select
            id="allInput"
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
          <textarea
            id="allInput"
            style={{ height: '200px', paddingTop: '5px', resize: 'none' }}
            placeholder="Conte mais sobre essa planta..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Btn
            onClick={handleRegister}
            color="#0a3407"
            hoverColor="#c4932b"
            style={{
              alignSelf: 'center',
              marginTop: '20px',
              height: '40px',
              width: '250px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            Cadastrar sua planta
          </Btn>
        </div>
      </div>
    </>
  );
}

export default RegisterPlants;