import { useNavigate } from 'react-router-dom';
import CardPlant from '../components/CardPlant.jsx';
import RegisterPlants from './RegisterPlants.jsx';
import Button from '../components/Button.jsx';
import Navbar from '../components/Navbar.jsx';

function Home() {
    const navigate = useNavigate();

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
        
        <CardPlant/>
        </>
    );
}

export default Home;