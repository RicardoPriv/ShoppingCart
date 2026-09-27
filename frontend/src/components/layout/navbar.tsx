import "/src/styles/layout/navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav id="navbar-container">
      <div id="company-name">Flux</div>
      <div id="page-links-container">
        <Link to="/" id="home-page">Home</Link>
        <Link to="/shop" id="shop-page">Shop</Link>
        <Link to="/" id="cart-page">Cart</Link>
      </div>
    </nav>
  )

}

export default Navbar;
