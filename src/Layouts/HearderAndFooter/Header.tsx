import { FunctionComponent } from "react";

import { NavBar } from "./components/NavBar";

const Header: FunctionComponent = () => {
    return (
        <header
            className='container-fluid  text-white '
            id="header"
            style={{ backgroundColor: '#7c0008' }}
        >
            <section>
                <NavBar />
            </section>
        </header>
    );
}

export default Header;