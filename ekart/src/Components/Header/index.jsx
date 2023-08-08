import { Link } from "react-router-dom";

const Header = (props) => {
    return (
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">{props.appName.name}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                               <Link className="nav-link" to="/">Login</Link>
                            </li>
                            <li class="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li class="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Header;