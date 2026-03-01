import { useNavigate } from 'react-router-dom';
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
                <Button onClick={entrar}>Entrar</Button>
            </header>
        </div>
    );
}

export default Login;