import {useState} from 'react';

function Button({ onClick, children = 'Entrar' }) {
    const [hover, setHover] = useState(false);

    const defaultStyles = {
        width: "300px",
        height: "50px",
        borderRadius: "50px",
        border: "none",
        color: 'white',
        backgroundColor: hover ? '#388E3C' : '#4CAF50',
        transition: '0.2',
        fontSize: "20px",
        marginTop: "100px",
        cursor: "pointer"
    };

  return (
    <button style={defaultStyles} 
    onClick={onClick}
    onMouseEnter={()=> setHover(true)}
    onMouseLeave={()=> setHover(false)}
    >
      {children}
    </button>
  );
}

export default Button;