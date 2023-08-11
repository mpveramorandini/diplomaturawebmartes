import '../estilos/componentes/paginas/Nosotros.css'
import React from "react";
import { Link } from 'react-router-dom';

const Nosotros = (props)=> {
    return (
        <div className="holder">
        <div className="nosotros"> 
             <div className="institucional">  
             <Link to="/quienes" className={({isActive}) => isActive ? "activo" : undefined } > <h3>quienes somos</h3></Link>
             {/* al hacer click me llevara a quienesSomos */}
                
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a accusantium harum suscipit
                     quae,
                     natus dicta. Quam veritatis nemo esse? Labore inventore excepturi eius, voluptate nobis enim a
                     dolores natus. Lorem ipsum dolor sit amet consectetur adipisicing elit...
                 </p>
             </div>
              <div className="institucional">
              <Link to="/historia" className={({isActive}) => isActive ? "activo" : undefined } > <h3>Reseña historica</h3></Link>
                 
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore a accusantium harum suscipit
                     quae,
                     natus dicta. Quam veritatis nemo esse? Labore inventore excepturi eius, voluptate nobis enim a
                     dolores natus. Lorem ipsum dolor sit amet consectetur adipisicing elit... 
                 </p>
             </div> 
         </div>
         <div className="nosotros">
         <div className="clientes">
         <h3>nuestros clientes</h3>
         <img className="foto_clientes" src="images/nosotros/cliente.jpg" alt="Clientes"/>
            </div>
     </div>

     </div>
    );
}

export default Nosotros;
