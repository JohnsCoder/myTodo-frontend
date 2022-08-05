import { Link } from "react-router-dom";
import "../styles/components/header.css";
function Header() {
  return (
    <header className="top_header">
      <h1>
        <Link to="/">Todo List</Link>
      </h1>
    </header>
  );
}

export default Header;
