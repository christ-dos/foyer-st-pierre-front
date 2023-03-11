import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
    return (
        <header
            className='container-fluid
                d-flex justify-content-center align-items-end text-white'
            id="header"
            style={{ height: '80px', backgroundColor: '#7c0008' }}
        >
            <h1>Foyer St Pierre App</h1>
        </header>
    );
}

export default Header;