import '../estilos/componentes/paginas/Contacto.css'
import React from "react";

const Contacto = (props)=> {
    return (
        <div className="holder">
        <div className="contacto_directo">
            <h2>CONTACTO DIRECTO</h2>
            <p>Puede contactarse con nosotros vía telefónica o por mail a cualquiera de nuestras sucursales o por
                nuestro formulario web.
            </p>
        </div>
        <div className="contacto">
            <div className="form">
                <h2>En qué podemos ayudarte?</h2>
                <form action="" method="" class="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name=""/>
                    </p>

                    <p>
                        <label for="email">Correo</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="mensaje">Consulta</label>
                        <textarea name=""></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar"/>
                    </p>
                </form>
            </div>
            <div class="datos">
                    <h2>Casa Central</h2>
                    <ul>
                        <li><i className="fa-solid fa-phone icono"></i> (011)442-43355</li>
                        <li><i className="fa-solid fa-phone icono "></i> (011)44243356</li>
                        <li><i className="fa-solid fa-phone icono"></i> (011)44242357</li>
                        <li><i className="fa-solid fa-phone icono"></i> (011)44243358</li>
                        <li><i className="fa-solid fa-envelope icono"></i> contacto@cargo_expres.com.ar</li>
                        <li><i className="fa-brands fa-whatsapp icono"></i> 1145982563</li>
                        <li><i className="fa-brands fa-instagram icono"></i> cargo_expres</li>
                       
                    </ul>
                </div>
        </div>
        <div className="casaCentral">
        <p><i className="fa-solid fa-location-dot icono"></i> Av. Dr. Arturo Frondizi 85. CP 1629. Pilar. Pcia de Buenos Aires</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26329.38941672491!2d-58.9812740524783!3d-34.422343302421275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sparque%20industrial%20pilar!5e0!3m2!1ses!2sar!4v1690574028965!5m2!1ses!2sar" style={{ width: 960, height: 500, border: 0 }}></iframe>
        </div>
    </div>
    );
}

export default Contacto;



/* > */