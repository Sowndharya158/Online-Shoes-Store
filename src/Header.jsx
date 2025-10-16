import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header>
        <nav>
          <div className="LogoContainer">
            <div>
              <ul>
                <li>
                  <img src="Logo.png" alt="Logo" width="auto" />
                </li>
                <li>
                  <h1 style={{ marginRight: "2rem" }}>ShoeMart</h1>
                </li>
              </ul>
            </div>
            <div>
              <div className="ham" onClick={() => setMenuOpen((val) => !val)}>
                <FontAwesomeIcon icon={faBars} />
              </div>
              <ul className={`items ${isMenuOpen ? "show" : ""}`}>
                <li>Home</li>
                <li>Products</li>
                <li>Categories</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
