import React from "react";

const Home = (props)=> {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/home.jpg" width="960"  alt="Carga"/>
            </div>
            <div className="columnas">
                <div className="columna">
                    <h2>Personas </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a accusantium harum suscipit quae,
                        natus dicta. Quam veritatis nemo esse? Labore inventore excepturi eius, voluptate nobis enim a
                        dolores natus.
                    </p>
                </div>
                    <div className="columna">
                    <h2>PYMES </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt saepe optio dignissimos, temporibus
                        sed rem labore esse eveniet nam quo natus at harum culpa reprehenderit consequatur ratione? Nostrum,
                        exercitationem expedita!
                    </p>
                </div>
                <div className="columna">
                    <h2>Corporativos </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt saepe optio dignissimos, temporibus
                        sed rem labore esse eveniet nam quo natus at harum culpa reprehenderit consequatur ratione? Nostrum,
                        exercitationem expedita!
                    </p>
                </div>
                </div>
        </main>
    );
}

export default Home;