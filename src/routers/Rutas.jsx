import { useRoutes } from 'react-router'
import Inicio from '../pages/Inicio'
import Productos from '../pages/Productos'
import Nosotros from '../pages/Nosotros'
import Contacto from '../pages/Contacto'
import NoEncontrado from '../pages/NoEncontrado'

// useRoutes : Retorna el componente que cambia las vistas segun 
// es un hook, o sea una funcion

const Rutas = () => {

    const hookRutas = useRoutes([
        {
            path: '/',
            element: <Inicio />
        },
        {
            path: '/productos',
            element: <Productos />
        },
        {
            path: '/nosotros',
            element: <Nosotros />
        },
        {
            path: '/contacto',
            element: <Contacto />
        },

        {
            path: '*',
            element: <NoEncontrado />
        },


    ])
    return hookRutas
}
export default Rutas;
