import { arrows, help, logo, logoutimage, search, setting } from "../ImportImages"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { logout, userProfile } from "../api/users"
import "./styles/navbar-styles.css"

const Navbar = () => {
  
  const [theme, setTheme] = useState('light')
  const [menuOpen, setMenuOpen] = useState(false)
  const [userInfo, setUserInfo] = useState(null)
  const user = localStorage.getItem('name') 

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
    // Obtener detalles del usuario al cargar el componente
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const user = await userProfile(localStorage.getItem('name'));
      setUserInfo(user);
    } catch (error) {
      console.error('Error al obtener detalles del usuario', error);
    }
  };

  const toggleTheme = () => {
    const updatedTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
  }, [theme]);
  
  return (
    <>
      <nav>
        <Link className="nav-left" to='/home'>
          <img src={logo} alt="Logo-TalkTec" className="logo" />  
          <h2>TalkTec</h2>
        </Link>

        <div className="search-box">
            <img src={search}  />
            <input type="text" placeholder="Search" />
        </div>

        {/* aqui es el profile */}
      
        <div className="nav-right">

          <div className={`nav-user-icon online ${menuOpen ? 'settings-menu-height' : ''}`} onClick={toggleMenu}> {/* modificar onclick = onclick="settingsMenuToggle()" */}
            <img src={userInfo.avatar} />
          </div>
            
          {/* settings menu */}

          <div className={`settings-menu ${menuOpen   ? 'settings-menu-height' : ''}`}>

            <div id="dark-btn" className={`dark-btn ${theme === 'dark' ? 'dark-btn-on' : ''}`} onClick={toggleTheme}>
              <span></span>
            </div>

            <div className="settings-menu-inner">

              <div className="user-profile">
                <img src={userInfo.avatar} />
                  <div>
                    <p>{userInfo ? `${userInfo.name} ${userInfo.last_name}` : 'Cargando...'}</p>
                    <span><Link to={user}>Ver mi perfil</Link></span>
                  </div>
              </div>

              <hr />

              <div className="settings-links">
                <img src={setting} className="settings-icon" />
                <a href="#">Configuración <img src={arrows} width="10px" /></a>
              </div>

              <div className="settings-links">
                <img src={help} className="settings-icon" />
                  <a href="#">Ayuda<img src={arrows} width="10px" /></a>
              </div>

              <div className="settings-links">
                <img src={logoutimage} className="settings-icon" />
                <span onClick={ logout }>Logout</span>
              </div>

            </div>
              
          </div>
        
        </div>
    
      </nav>
    </>
  )
}

export default Navbar