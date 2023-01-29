import { Link } from "react-router-dom";

export function MyNavLink({children,goingTo}) {
  return (
    <li className='nav-item'>
      <Link
        className='nav-link fw-medium active fs-5 text-primary'
        aria-current='page'
        to={goingTo}
      >
        {children}
      </Link>
    </li>
  );
}
