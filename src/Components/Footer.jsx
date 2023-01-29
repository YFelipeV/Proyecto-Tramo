import { MyFooterItem } from './MyFooterItem';
import { MyFooterLink } from './MyFooterLink';
import { MyFooterContactLink } from './MyFooterContactLink';
import { MyFooterTitle } from './MyFooterTitle';

import facebook from '../assets/icons/facebook.svg';
import youtube from '../assets/icons/youtube.svg';
import twitter from '../assets/icons/twitter.svg';
import ins from '../assets/icons/instagram.svg';
import wasap from '../assets/icons/whatsapp.svg';
import telefono from '../assets/icons/telephone.svg';
import geo from '../assets/icons/geo.svg';
import email from '../assets/icons/email.svg';

function Footer() {
  return (
    <>
      <div style={{ height: '250px', overflow: 'hidden' }}>
        <svg
          viewBox='0 0 500 150'
          preserveAspectRatio='none'
          style={{ height: '100%', width: '100%' }}
        >
          <path
            d='M-1.58,23.19 C327.99,297.53 371.44,-79.44 501.80,87.32 L500.00,150.00 L0.00,150.00 Z'
            style={{ stroke: 'none', fill: '#161627' }}
          ></path>
        </svg>
      </div>

      <footer className='footer w-100 m-0 p-0'>
        <div className='footer__container   '>
          <div className='row d-flex'>
            <div className='col-12 col-md-6 col-xl-4 text-center text-md-start newsletter '>
              <MyFooterTitle>TRAMO S.A.S</MyFooterTitle>
              <ul className='footer__list my-4 text-center'>
                <MyFooterItem image={facebook} />
                <MyFooterItem image={ins} />
                <MyFooterItem image={twitter} />
                <MyFooterItem image={wasap} />
                <MyFooterItem image={youtube} />
              </ul>
              <div className='eslogan-footeer mt-3'>
                <p>
                  "Llegamos a todos los rincones <br></br> del pais, para
                  sacarte de apuros en cualquier situación"
                </p>
              </div>
            </div>

            <div className='col-12 col-md-6 col-xl-4 text-center text-md-start '>
              <MyFooterTitle>Navegación</MyFooterTitle>
              <ul className='footer__list'>
                <MyFooterLink goingTo={'/'}>Inicio</MyFooterLink>
                <MyFooterLink goingTo={'/about'}>
                  Acerca de nosotros
                </MyFooterLink>
                <MyFooterLink goingTo={'/'}>Testimonios</MyFooterLink>
                <MyFooterLink goingTo={'/'}>Ayuda</MyFooterLink>
                <MyFooterLink goingTo={'/'}>Desarrolladores</MyFooterLink>
              </ul>
            </div>

            <div className='col-12 col-md-6 col-xl-4 text-center text-md-start '>
              <MyFooterTitle>Contáctanos</MyFooterTitle>

              <ul className='footer__list'>
                <MyFooterContactLink logoImg={geo}>
                  Crra 5 #6-67 CTPI SENA Norte
                </MyFooterContactLink>

                <MyFooterContactLink logoImg={email}>
                  TramoAdmin@gmail.com
                </MyFooterContactLink>

                <MyFooterContactLink logoImg={telefono}>
                  +57 3235234567
                </MyFooterContactLink>

                <MyFooterContactLink logoImg={telefono}>
                  +57 3235234567
                </MyFooterContactLink>
              </ul>
            </div>
          </div>
          <hr className='footer__divider'></hr>

          <div className='footer__bottom w-100 text-center'>
            <p className='copyright text-center'>
              &copy; 2022 <span className='h6 text-white-50'>TRAMO</span>. Todos
              los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
