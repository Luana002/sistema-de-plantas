import {useState} from 'react';

function Button({ onClick, children = 'Entrar', color = '#4CAF50', hoverColor = '#388E3C', width, margin, style  }) {
    const [hover, setHover] = useState(false);

    const defaultStyles = {
        height: "50px",
        borderRadius: "50px",
        border: "none",
        color: 'white',
        backgroundColor: hover ? hoverColor : color,
        transition: '0.3s',
        fontSize: "20px",
        cursor: "pointer",
        
         width: width || "400px",
         marginTop: margin || "0px",

         ...style
    };

  return (
    <button 
      style={defaultStyles} 
      onClick={onClick}
      onMouseEnter={()=> setHover(true)}
      onMouseLeave={()=> setHover(false)}
    >
      {children}
    </button>
  );
}

export default Button;