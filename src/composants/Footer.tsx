import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
    return (
        <footer
            className='container-fluid bg-danger d-flex justify-content-center align-items-end'
            id="footer"
            style={{ height: '80px' }}
        >
            <p className=''>&copy; 2023 Foyer St Pierre. Tous droits réservés.</p>
        </footer>
    );
}

export default Footer;