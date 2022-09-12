import "./styles.css";

export default function App() {
  return (
    <header>
      <div className="logo">
        <p>Logo</p>
      </div>
      <nav>
        <ul className="nav__links">
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
