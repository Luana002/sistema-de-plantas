import './CardPlant.css';

//Componente que exibe uma lista de plantas cadastradas
const CardPlant = ({plants, loading}) => {
    if (loading) return <p style={{textAlign:'center', marginTop: '250px'}}>Carregando...</p>;

return (
    <ul id='styleUl'>
            {Array.isArray(plants) && plants.length > 0 ? (
                plants.map((plant, index) => (
                    <li id='styleLi' key={plant.id || index}>
                        <p><strong>Nome:</strong> {plant.name}</p> 
                        <p><strong>Tipo:</strong> {plant.type}</p> 
                        <p><strong>Tipo de iluminação:</strong> {plant.light}</p> 
                        <p><strong>frequencia de rega:</strong> {plant.watering}</p> 
                        <p><strong> Descrição:</strong> {plant.description || "Sem descrição"}</p>
                    </li>
                ))
            ) : (
                !loading && <p style={{textAlign:'center'}}>Nenhuma planta encontrada.</p>
            )}
    </ul>
    );
};

export default CardPlant;