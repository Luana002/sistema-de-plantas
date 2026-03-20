import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CardPlant from '../components/CardPlant.jsx';
import RegisterPlants from './RegisterPlants.jsx';
import Button from '../components/Button.jsx';
import Navbar from '../components/Navbar.jsx';
import useGetPlants from '../hooks/useGetPlants';

const API_URL = "http://localhost:3001/plants";

function Home() {
    const navigate = useNavigate();
    const { plants, loading, error } = useGetPlants();
    
    function register() {
        navigate("/RegisterPlants");
    }

	return(
        <>
       <Navbar/>

        <h3 style={{
            display: "flex",
            backgroundColor:"#9dcfa0", 
            height:"50px",
            alignItems: "center",
            padding: "0 20px",
            fontSize: "16px",
            fontWeight: "normal", 
            fontFamily: "Balsamiq Sans, sans-serif"
        }}>
        Como utilizar: Basta ir em "cadastrar nova planta", e inserir as informações da Planta,
        quando salvar, a planta que voce adicionou vai aparecer aqui em baixo na tela inicial.
        Voce vai poder editar alguma planta ou excluir.     
        </h3>

        <div style={{ 
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
            height: "60px"
            }}>
            <h1 style={{ 
                margin: "0",
                fontFamily:"Calistoga, serif"
            }}>Suas plantas</h1>

            <div style={{
                position: "absolute",
                right: "100px"
            }}><Button 
                    onClick={register}
                    color='#01928f'
                    hoverColor='#b10f0f'
                    width="250px"
                    margin="0"
                    //style={{display:'block', marginLeft:'auto'}}
                >Cadastrar nova planta
                </Button>
            </div>
        </div>
        
        <ul style={{marginTop: '30px', listStyle: 'none'}}>
            {Array.isArray(plants) && plants.length > 0 ? (
                plants.map((plant, index) => (
                    <li key={plant.id || index}>
                        <strong>Nome:</strong> {plant.name} |
                        <strong>Tipo:</strong> {plant.type} |
                        <strong>Tipo de iluminação:</strong> {plant.light} |
                        <strong>frequencia de rega:</strong> {plant.watering} |
                        <strong> Descrição:</strong> {plant.description || "Sem descrição"}
                    </li>
                ))
            ) : (
                !loading && <p style={{textAlign:'center'}}>Nenhuma planta encontrada.</p>
            )}
        </ul>

        <CardPlant/>
        </>
    );
}

export default Home;