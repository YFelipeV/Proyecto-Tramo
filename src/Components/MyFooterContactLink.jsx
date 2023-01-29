export function MyFooterContactLink({logoImg,children}) {
  return (
    <li className='footer__list-item'>
      <img src={logoImg} alt=''></img>
      <a href='' className='footer__list-link ms-1'>
        {children}
      </a>
    </li>
  );
}
