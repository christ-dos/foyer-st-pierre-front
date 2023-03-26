import { FunctionComponent } from "react";

import { NavBar } from "./components/NavBar";

const Header: FunctionComponent = () => {
    return (
        <header
            className='container-fluid  text-white'
            id="header"
            style={{ backgroundColor: '#7c0008' }}
        >
            <NavBar />
            <section className="row ">
                <div className="col-5 d-flex align-items-end">
                    
                </div>
                {/** <div className="col-7 ">
                    <figure className="mt-3">
                        <img src="./images/basketeur.png"
                            alt="logo"
                            className=""
                            style={{ objectFit: 'cover', maxHeight: '150px', borderRadius: '50%' }}></img>
                    </figure>
                </div> */}
            </section>
        </header>
    );
}

export default Header;