import {useState} from 'react';
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
        <input type="text" style={allInput}/>

        <label>Tipo de iluminação</label>
        <select name="Iluminação" id="" style={allInput}>
          <option>Sol</option>
          <option>Meia-sombra</option>
          <option>Sombra</option>
        </select>

        <label htmlFor="">Tipo</label>
        <select name="" id="" style={allInput}>
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
        <select name="" id="" style={allInput}>
          <option value="">Diária</option>
          <option value="">Frequente (2 a 3 vezes por semana)</option>
          <option value="">Moderada (1 vez por semana)</option>
          <option value="">Rara (A cada 15 dias ou menos)</option>
          <option value="">Apenas quando o solo estiver seco</option>
        </select>

        <label>Descrição (opcional)</label>
        <textarea style={{...allInput, height: "200px", paddingTop: "5px", resize: "none"}}
        placeholder="Conte mais sobre essa planta..."
        />

        <Btn
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