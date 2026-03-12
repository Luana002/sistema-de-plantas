import Btn from '../components/Button';

function RegisterPlants() {
  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#ffffff"
  };
  const styleContainer = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#a45757",
    widht: "600px",
    padding: "25px",
    gap: "12px",
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
    color: "white"
  };
  const allInput = {
    height: "30px", // altura
    width: "600px",
    borderRadius: "5px",
    border: "none",
    padding: "0 5px",
    boxSizing: "border-box"
  };

  return (
    <>
    <div style={pageStyle}>
      <h1 style={{}}>
        Cadastro
      </h1>
      <div style={styleContainer}>

        <hr />

          <label>Nome da planta</label>
          <input type="text" style={allInput}/>

        <label>Tipo de iluminação</label>
        <select name="Iluminação" id="" style={allInput}>
          <option>Sol</option>
          <option>Sombra</option>
        </select>

        <label htmlFor="">Tipo</label>
        <select name="" id="" style={allInput}>
          <option>Ornamental</option>
          <option>Medicinal</option>
          <option>Suculenta</option>
          <option>Árvore</option>
        </select>

        <label>Descrição (opcional)</label>
        <textarea style={{...allInput, height: "200px", paddingTop: "5px", resize: "none"}}
        placeholder="Conte mais sobre essa planta..."
        />

        <Btn
          color= "#2b2b2b"
          hoverColor='#000'
          style={{marginTop:'20px', height: '40px'}}
        >
          Cadastrar sua planta</Btn>

      </div>
    </div>
    </>
  );
}

export default RegisterPlants;