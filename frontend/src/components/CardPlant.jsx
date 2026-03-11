function CardPlant() {
    const pageCenter = {
    minHeight: "calc(100vh - 100px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
    };

    const cardStyle = {
    backgroundColor: "#2e2e2e",
    width: "400px",
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
    };

    return (

        <div style={pageCenter}>
            <div style={cardStyle}>
                <h1></h1>
            </div>
        </div>
    );
}

export default CardPlant;