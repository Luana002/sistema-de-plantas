import { useNavigate } from 'react-router-dom';
import '../pages/Login.css';
import Navbar from '../components/Navbar.jsx';
import Button from '../components/Button.jsx';

function Login() {
    const navigate = useNavigate();

    function entrar() {
        navigate("/home");
    }

    return(
        <div className="Login">
            <header className="login-header">
                <Navbar/>
                <h1>Adicione sua planta aqui!</h1>
                <Button 
                style={{marginTop: '100px'}}
                onClick={entrar}>Entrar</Button>
            </header>
        </div>
    );
}

export default Login;