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
                <h2>Formulario</h2>
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
                    <h2>Contactos</h2>
                    <ul>
                        <li><i className="fa-solid fa-phone icono"></i> (011)442-43355</li>
                        <li><i className="fa-solid fa-phone icono "></i> (011)44243356</li>
                        <li><i className="fa-solid fa-phone icono"></i> (011)44242357</li>
                        <li><i className="fa-solid fa-phone icono"></i> (011)44243375</li>
                        <li><i className="fa-solid fa-envelope icono"></i> contacto@cargo_expres.com.ar</li>
                        <li><i className="fa-solid fa-location-dot icono"></i> Juncal 2569.Ciudad Autonoma de Buenos Aires. CP 7896</li>
                        <li><i className="fa-brands fa-whatsapp icono"></i> 1145982563</li>
                        <li><i className="fa-brands fa-instagram icono"></i> cargo_expres</li>
                       
                    </ul>
                </div>
        </div>
    </div>
    );
}

export default Contacto;



/* > */