import { Link } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <h1>Kim Cuong</h1>
        </Link>
        <ToggleTheme />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/auth/register">Register</Link>
          <Link to="/auth/login">Login</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </div>
    </header>
  );
}
