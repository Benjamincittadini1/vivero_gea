import { NavLink } from "react-router-dom"
const Menu = () => {
    return(
      
      <>
        <NavLink to="/" exact>Inicio</NavLink>
        <NavLink to="/description/interior">Interior</NavLink>
        <NavLink to="/description/exterior">Exterior</NavLink>
      </>
    )
}

export default Menu