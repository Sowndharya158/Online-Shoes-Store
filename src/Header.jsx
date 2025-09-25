function Header() {
  return (
    <>
      <header>
        <nav>
          <div className="LogoContainer">
            <ul>
              <li>
                <img src="Logo.png" alt="Logo" width="auto" />
              </li>
              <li>
                <h1 style={{ marginRight: "2rem" }}>ShoeMart</h1>
              </li>
              <li>Home</li>
              <li>Products</li>
              <li>Categories</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
