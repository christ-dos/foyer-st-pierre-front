import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-dark main-color'>
                <div className="container-fluid d-flex align-items-end">
                    <span className=" col-2 navbar-brand fs-4">
                        <figure className="d-flex justify-content-center">
                            <img src="./images/basketeur.png"
                                alt="logo"
                                className=""
                                style={{ objectFit: 'cover', maxHeight: '110px', borderRadius: '50%' }}></img>
                        </figure>

                        Foyer St Pierre
                    </span>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
                        aria-controls='navbarNavDropdown' aria-expanded='false'
                        aria-label='Toogle Navigation'
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className=" col-10 collapse navbar-collapse"
                        id="navbarNavDropdown">
                        <ul className='navbar-nav '>
                            <li className='nav-item'>
                                <NavLink to={"/"} className="nav-link">
                                    Accueil
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className="nav-link"
                                    to={"#"}>
                                    Admin
                                </NavLink >
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item m-1">
                                <Link type='button'
                                    className="btn btn-outline-light"
                                    to={'/login'}>Connexion
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}