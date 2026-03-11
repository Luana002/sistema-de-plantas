import { useNavigate } from 'react-router-dom';
import CardPlant from '../components/CardPlant.jsx';
import RegisterPlants from './RegisterPlants.jsx';

function Home() {
    const navigate = useNavigate();

    function register() {
        navigate("/RegisterPlants");
    }
	return(
        <>
        <div className='nav'>
            <div className="links">
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </div>
        </div>
        <h3>Sua lista</h3>
        <button onClick={register}>Cadastrar Nova Planta</button>
        <CardPlant/>
        </>
    );
}

export default Home;