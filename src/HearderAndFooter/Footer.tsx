import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
    return (
        <footer
            className='container-fluid
            d-flex justify-content-center align-items-end text-white'
            id="footer"
            style={{ height: '80px', backgroundColor: '#7c0008' }}
        >
            <p className=''>&copy; 2023 Foyer St Pierre. Tous droits réservés.</p>
        </footer>
    );
}

export default Footer;