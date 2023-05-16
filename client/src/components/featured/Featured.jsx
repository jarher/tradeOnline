import './Featured.scss';
import {MdSearch} from "react-icons/md";

export default function Featured() {
  return (
    <div className="featured">
      <div className="featured__container">
        <div className="featured__texts">
          <h1 className="featured__title">
            Encuentra servicios <i>independientes</i> para tu negocio
          </h1>
          <div className="featured__search">
            <div className="search__input">
              <MdSearch className="search__icon" />
              <input
                type="text"
                placeholder='prueba "construyendo una app para móviles"'
              />
            </div>
            <button className="featured__search__button">Buscar</button>
          </div>
          <div className="featured__popular">
            <span>Popular:</span>
            <button>Diseño Web</button>
            <button>Wordpres</button>
            <button>Diseño de Logo</button>
            <button>Servicios I.A. </button>
          </div>
        </div>
        <div className="featured__img">
          <img src="./img/entrepeneur.png" />
        </div>
      </div>
    </div>
  );
}
