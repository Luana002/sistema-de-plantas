function RegisterPlants() {
  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f0f0"
  };
  const styleContainer = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#a45757",
    widht: "100%",
    maxWidth: "800px",
    padding: "25px",
    gap: "12px",
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
    color: "white"
  };
  const allInput = {
    height: "30px",
    widht: "100%",
    borderRadius: "5px",
    border: "none",
    padding: "0 5px",
    boxSizing: "border-box"
  };

  return (
    <>
    <h1>Nova Planta</h1>

    <div style={pageStyle}>
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
        <input type="text" style={allInput}/>

      </div>
    </div>
    </>
  );
}

export default RegisterPlants;