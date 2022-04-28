import { Routes, Route, Link } from "react-router-dom";
import "./nav.scss";
const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link to="/">Главная</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/search">Поиск</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/random">Случайный</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/statistics">Статистика</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
