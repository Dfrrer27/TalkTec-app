import "../pages/styles/home-styles.css";
import { shortcutOne, shortcutTwo, shortcutThree, shortcutFour, shortcutFive, shortcutSix, shortcutSeven, shortcutEight } from "../ImportImages";


const LeftSidebar = () => {
  return (
    // left-Sidebar
    <div className="left-sidebar">
    <div className="shortcut-links">
        <p>Carreras</p>
        <a href="#"><img src={shortcutOne} />Tecnología Digital</a>
        <a href="#"><img src={shortcutTwo} />Mecánica y Aviación</a>
        <a href="#"><img src={shortcutThree} />Minería, Procesos Químicos y Metalúrgicos</a>
        <a href="#"><img src={shortcutFour} />Mecatrónica</a>
        <a href="#"><img src={shortcutFive} />Electricidad y Electrónica</a>
        <a href="#"><img src={shortcutSix} />Gestión y Producción</a>
        <a href="#"><img src={shortcutSeven} />Seguridad y Salud en el Trabajo</a>
        <a href="#"><img src={shortcutEight} />Tecnología Agrícola</a>
    </div>
    </div>
  )
}

export default LeftSidebar