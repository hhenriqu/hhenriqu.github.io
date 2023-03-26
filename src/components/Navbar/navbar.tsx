import { useEffect, useState } from 'react'
import './navbar.css'

function Navbar() {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    innerWidth < 768 && setIsMobile(true)
  }, [innerWidth])

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      {isMobile ? (
        !menuOpen ? (
          <div className="navbar">
            <img
              className="iconMenu"
              src="src\assets\icon\icon_menu_branco.png"
              alt="logo"
              onClick={handleMenuOpen}
            />
            <img
              className="logoNavbar"
              src="src\assets\logo_heliomoraes_branco.png"
              alt="logo"
            />
          </div>
        ) : (
          <>
            <div className="navbar--open">
              <img
                className="iconMenu"
                src="src\assets\icon\icon_menu_x_azulescuro.png"
                alt="logo"
                onClick={handleMenuOpen}
              />
              <img
                className="logoNavbar"
                src="src\assets\logo_heliomoraes_azul.png"
                alt="logo"
              />
            </div>

            <div className="expandedMenu">
              <p>HOME</p>
              <p>SOBRE</p>
              <p>CONHECIMENTO</p>
              <p>PROJETOS</p>
              <p>CONTATO</p>
            </div>
          </>
        )
      ) : (
        <div>
          <p>Quem sou Eu?</p>
        </div>
      )}
    </>
  )
}

export default Navbar
