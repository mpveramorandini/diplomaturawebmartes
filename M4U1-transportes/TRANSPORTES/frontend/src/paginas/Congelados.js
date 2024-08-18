import "../estilos/componentes/paginas/Encomiendas.css";
import React from "react";
import NavServicios from "../componentes/NavServicios";

const Congelados = (props) => {
  return (
    <div className="holder">
      <div className="navTop">
        <NavServicios />
      </div>
      <div>
        <h2 className="tituloEncomiendas">congelados</h2>

        <div className="encomiendasCaja">
          <p>
            CARGO EXPRES Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Dolore a accusantium harum suscipit quae, natus dicta. Quam
            veritatis nemo esse? Labore inventore excepturi eius, voluptate
            nobis enim a dolores natus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dolore a accusantium harum suscipit quae, natus
            dicta. Quam veritatis nemo esse? Labore inventore excepturi eius,
            voluptate nobis enim a dolores natus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Dolore a accusantium harum suscipit
            quae, natus dicta.
          </p>

          <img
            className="foto_caja"
            src="images/servicios/congelados.jpg"
            alt="Congelados"
          />
        </div>
      </div>
    </div>
  );
};

export default Congelados;
