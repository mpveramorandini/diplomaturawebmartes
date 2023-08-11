import "../../estilos/componentes/layout/Footer.css";
import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <div class="datos-footer">
        <div className="datoUno">
          <ul>
            <li> En qué podemos ayudarte? </li>
             <li> Contactanos!</li> {/*cuando paso la mano me llevara a la seccion contacto */}
            <li> Llamanos al 0810-888-2270</li>
          </ul>
        </div>
        <div className="datoDos">
          <ul>
            <li>Casa Central (011)442-43355 - Lineas rotativas</li>
            <li>
              Av. Dr. Arturo Frondizi 85. CP 1629. Pilar. Pcia de Buenos Aires
            </li>
          </ul>
        </div>
        <div className="datoTres">
          <ul>
            <li>Escribinos! contacto@cargo_expres.com.ar</li>
            <li>Whatsapp: 1145982563</li>
          </ul>
        </div>
      </div>
      <div className="redes">
        <ul className="social-icons">
          <li>
            <a href="https://www.instagram.com/" target="_blanck">
              <i class="fa-brands fa-instagram fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="_blanck">
              <i class="fa-brands fa-facebook fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/" target="_blanck">
              <i class="fa-brands fa-twitter fa-lg"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-abajo">
        <p> Cargo Expres - Derechos Reservados © </p>
      </div>
    </footer>
  );
};



export default Footer; 

