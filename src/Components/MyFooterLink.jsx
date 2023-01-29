import { Link } from 'react-router-dom';

import back from '../assets/icons/back.svg';

export function MyFooterLink({children,goingTo}) {
  return (
    <li className='footer__list-item'>
      <img src={back} alt=''></img>
      <Link to={goingTo} className='footer__list-link ms-3'>
        {children}
      </Link>
    </li>
  );
}
