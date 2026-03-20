import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CardPlant from '../components/CardPlant.jsx';
import RegisterPlants from './RegisterPlants.jsx';
import Button from '../components/Button.jsx';
import Navbar from '../components/Navbar.jsx';
import useGetPlants from '../hooks/useGetPlants';
import '../pages/Home.css';

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

        <h3 id='styleText' >
        Como utilizar: Basta ir em "cadastrar nova planta", e inserir as informações da Planta,
        quando salvar, a planta que voce adicionou vai aparecer aqui em baixo na tela inicial.
        Voce vai poder editar alguma planta ou excluir.     
        </h3>

        <div id='styleDiv'>
            <h1 id='twoText'>Suas plantas</h1>

            <div id='divBtn'>
                <Button 
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

        <CardPlant plants={plants} loading={loading} />
        </>
    );
}

export default Home;