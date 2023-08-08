import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginContext from "../../Context/LoginProvider";
import { useSelector } from "react-redux";

const Header = (props) => {
    const navigate = useNavigate();
    const { isLoggedIn, logout } = useContext(LoginContext);
    const cart = useSelector(x=>x.cart)
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">{props.appName.name}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    {!isLoggedIn && <ul class="navbar-nav">

                        <li class="nav-item">
                            <Link className="nav-link" to="/">Login</Link>
                        </li>

                        <li class="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>

                    </ul>}
                    {isLoggedIn &&
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li class="nav-item">
                              <a href="#">Cart Items : {cart.totalProducts}</a>
                            </li>
                            <li class="nav-item">
                              <a href="#">Total Amount : {cart.totalValue}</a>
                            </li>

                            <li class="nav-item">
                                <button class="btn btn-primary" onClick={e => {
                                    logout();
                                    navigate("/");
                                }}>Logout</button>
                            </li>
                        </ul>
                    }

                </div>
            </div>
        </nav>
    );
}

export default Header;