import logo from '../assets/icons/horizontal.jpg';
import { MyNavLink } from './MyNavLink';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <nav
          className='navbar d-flex navbar-expand-lg navbar-light fixed-top pt-3 bg-white'
          data-navbar-on-scroll='data-navbar-on-scroll'
        >
          <div className='container-fluid'>
            <Link
              className=' w-sm-100 w-md-25 logonav position-md-absolute left-md-5'
              to='/'
            >
              <img
                src={logo}
                alt=''
                className='position-md-relative w-sm-100 w-md-75'
              ></img>
            </Link>
            <button
              className='navbar-toggler collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >{/*tienes que manejar estados para cambiar las aria controls de arriba porque sino la accesibilidad no esta haciendo nada*/}
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse mt-4 mt-lg-0'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav ms-auto pt-2 pt-lg-0'>             
                <MyNavLink goingTo={'/'}>
                  Inicio
                </MyNavLink>

                <MyNavLink goingTo={'/about'}>
                  Acerca de Nosotros
                </MyNavLink>

                <MyNavLink goingTo={'/'}>
                  Testimonios
                </MyNavLink>

                <MyNavLink goingTo={'/contactos'}>
                  Contactos
                </MyNavLink>
              </ul>
              <div className='ps-lg-5'>
                <a className='btn btn-lg btn-primary rounded-pill order-0 fs-5 me-5'>
                  Inicio Sesion
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
