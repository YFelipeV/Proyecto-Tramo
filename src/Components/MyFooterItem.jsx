

export function MyFooterItem({image}) {
  return (
    <li className='footer__list-item me-2'>
      <a href='#' className='footer__list-link'>
        <img src={image} width='24px' className='ms-2' alt=''></img>
      </a>
    </li>
  );
}
