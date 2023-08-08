import Link from 'next/link'
import "./header.scss"
const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <h3>Parfum</h3>
      </div>
      <div className="right">
        <Link href="/">Asosiy</Link>
        <Link href="/about">Biz haqimizda</Link>
        <Link href="/contact">Aloqa</Link>
        <Link href="/cart">Buyurtmalar tarixi</Link>
        {/* <Link href="/login">Login</Link>
        {isAuth ? (
          <Fragment>
            <Link href="/account">Account | {user?.firstName} </Link>
            <button onClick={() => dispatch(logout(router))}>Logout</button>
          </Fragment>
        ) : null} */}
      </div>
    </header>
  );
}

export default Header