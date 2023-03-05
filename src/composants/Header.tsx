import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
    return (
        <header
            className='container-fluid bg-danger d-flex justify-content-center align-items-end'
            id="header"
            style={{ height: '80px' }}
        >
            <h1>Foyer St Pierre App</h1>
        </header>
    );
}

export default Header;