import '../estilos/componentes/paginas/QuienesSomos.css'
import React from "react";
import { NavLink } from "react-router-dom";

const QuienesSomos = (props)=> {
    return (
        <div className="holder"> 
        <div className='navIzq1'>
    <nav>
            <div className='navIzq3'>
        <ul className="holder-izq">
            <li><NavLink to="/quienes" className={({isActive}) => isActive ? "activo" : undefined } >Quienes Somos</NavLink></li>
            <li><NavLink to="/historia" className={({isActive}) => isActive ? "activo" : undefined } >Historia</NavLink></li>
        </ul>
        </div></nav>
    </div>
    <div>
        <h2 className='tituloQuienesSomos'>quienes somos</h2>
        <div className="quienesSomos">

            
             <div className="quienes">
                
                 <p>CARGO EXPRES  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a accusantium harum suscipit
                     quae,
                     natus dicta. Quam veritatis nemo esse? Labore inventore excepturi eius, voluptate nobis enim a
                     dolores natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a accusantium harum suscipit
                     quae,
                     natus dicta. Quam veritatis nemo esse? Labore inventore excepturi eius, voluptate nobis enim a
                     dolores natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a accusantium harum suscipit
                     quae,
                     natus dicta. Quam veritatis nemo esse? Labore inventore excepturi eius, voluptate nobis enim a
                     dolores natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a accusantium harum suscipit
                     quae,
                     natus dicta. Quam veritatis nemo esse? Labore inventore excepturi eius, voluptate nobis enim a
                     dolores natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 </p>
             </div>
             <div className="quienes">
             <img className='foto_personas' src="images/quienesSomos/hombre-sombrero-tiro-medio.jpg" alt="Personas"/>
             </div>

     </div>
     </div>

     </div>




    );
}

export default QuienesSomos;