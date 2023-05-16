import { useEffect, useState } from "react";
import "./Navbar.scss";
import { useWindowScroll } from "react-use";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [userMenu, setUserMenu] = useState(false);

  const { pathname } = useLocation();

  const { y } = useWindowScroll();

  const currentUser = {
    id: 1,
    username: "jeff",
    isSeller: true,
  };

  useEffect(() => {
    y > 0 ? setIsScrolling(true) : setIsScrolling(false);
  }, [y]);

  return (
    <div
      className={isScrolling || pathname !== "/" ? "navbar active" : "navbar"}
    >
      <div className="navbar__container">
        <div className="navbar__main">
          <div className={isScrolling ? "navbar__logo active" : "navbar__logo"}>
            <Link className="link" to="/">
              TradeOnline
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="link navbar__link">TradeOnline Negocios</Link>
            </li>
            <li>
              <Link className="link navbar__link">Explorar</Link>
            </li>
            <li>
              <Link className="link navbar__link">Español</Link>
            </li>
            {!currentUser?.isSeller && (
              <li>
                <Link className="link navbar__link">Hazte vendedor</Link>
              </li>
            )}
            {!currentUser && (
              <li>
                <Link className="link navbar__link">Iniciar sesión</Link>
              </li>
            )}
            {!currentUser && (
              <li>
                <Link
                  className={
                    isScrolling ? "navbar__button active" : "link navbar__button"
                  }
                >
                  Unirse
                </Link>
              </li>
            )}
            {currentUser && (
              <li>
                <div
                  className="user"
                  onClick={() => setUserMenu((prev) => !prev)}
                >
                  <img src="" alt="" />
                  <Link className="link user__name">
                    {currentUser?.username}
                  </Link>
                  {userMenu && (
                    <div className="options">
                      {currentUser?.isSeller && (
                        <>
                          <Link classname="link" to="/myGigs">
                            Gigs
                          </Link>
                          <Link classname="link" to="/add">
                            Add New Gig
                          </Link>
                        </>
                      )}
                      <Link classname="link" to="/orders">
                        Orders
                      </Link>
                      <Link classname="link" to="/messages">
                        Messages
                      </Link>
                      <Link classname="link" to="/">
                        Logout
                      </Link>
                    </div>
                  )}
                </div>
              </li>
            )}
          </ul>
        </div>

        {isScrolling ||
          (pathname !== "/" && (
            <>
              <hr />
              <div className="navbar__menu">
                <Link className="link navbar__menu__link">Gráficas y Diseño</Link>
                <Link className="link navbar__menu__link">Video y Animación</Link>
                <Link className="link navbar__menu__link">Escrito y traducción</Link>
                <Link className="link navbar__menu__link">Servicios I.A.</Link>
                <Link className="link navbar__menu__link">Marketing Digital</Link>
                <Link className="link navbar__menu__link">Música y Audio</Link>
                <Link className="link navbar__menu__link">Programación</Link>
                <Link className="link navbar__menu__link">Negocios</Link>
                <Link className="link navbar__menu__link">Estilo de vida</Link>
              </div>
              <hr />
            </>
          ))}
      </div>
    </div>
  );
};

export default Navbar;
