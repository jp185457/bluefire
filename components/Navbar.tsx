import Link from 'next/link';
import Image from 'next/image';
import style from '../styles/Navbar.module.css';
import logoBlue from '../lib/assets/logos/logo-blue.png';

function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <Link href="/">
          <Image src={logoBlue} width={100} height={80} />
        </Link>
      </div>
      <Link href="/">
        <a className={style.anchor}>Home</a>
      </Link>
      <Link href="/GraphqlMenu">
        <a className={style.anchor}>GraphQL</a>
      </Link>
      <Link href="/RestMenu">
        <a className={style.anchor}>REST</a>
      </Link>
    </nav>
  );
}

export default Navbar;
