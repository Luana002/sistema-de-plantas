import CardPlant from '../components/CardPlant.jsx';

function Home() {
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
        <CardPlant/>
        </>
    );
}

export default Home;