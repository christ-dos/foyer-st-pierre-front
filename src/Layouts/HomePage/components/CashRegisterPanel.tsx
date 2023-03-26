import { useEffect, useState } from "react";
import { Produit } from "../../../models/Produit";
import './../../HomePage/css/cashRegisterPanel.css';
import Keyboard from "./keyboard";
import { TabPanel } from "./TabPanel";

export const CashRegisterPanel: React.FC<{ handleKeyPress: any }> = (props) => {
    const [produits, setProduits] = useState<Produit[]>([]);
    const [activeTab, setActiveTab] = useState(0);

    const articles: Produit[] = [
        { id: 1, description: "Coca-ligth 33cl", prixVente: 1, typeProduit: 1, urlPicture: "/images/canette-coca.png" },
        { id: 2, description: "Coca 33cl", prixVente: 1, typeProduit: 1, urlPicture: "/images/canette-coca.png" },
        { id: 3, description: "Ice-tea 33cl", prixVente: 1, typeProduit: 1, urlPicture: "/images/canette-coca.png" },
        { id: 4, description: "7 Up 33cl", prixVente: 1, typeProduit: 1, urlPicture: "/images/canette-coca.png" },
        { id: 5, description: "Oasis 33cl", prixVente: 1, typeProduit: 1, urlPicture: "/images/canette-coca.png" },
        { id: 6, description: "bière1 33cl", prixVente: 1, typeProduit: 2, urlPicture: "./images/canette_biere.png" },
        { id: 7, description: "bière2 33cl", prixVente: 1, typeProduit: 2, urlPicture: "./images/canette_biere.png" },
        { id: 8, description: "bière3 33cl", prixVente: 1, typeProduit: 2, urlPicture: "./images/canette_biere.png" },
        { id: 9, description: "bière4 33cl", prixVente: 1, typeProduit: 2, urlPicture: "./images/canette_biere.png" },
        { id: 10, description: "kit kat", prixVente: 1, typeProduit: 3, urlPicture: "./images/kitKat.png" },
        { id: 11, description: "Chips", prixVente: 1, typeProduit: 3, urlPicture: "./images/chips.png" }
    ]

    useEffect(() => {
        setProduits(articles)
    },[])

    
    const handleTabClick = (tabIndex: number) => {
        setActiveTab(tabIndex);
    };

    function handlePanel(iteration: number) {
        const panels: JSX.Element[] = []
        for (let i = 0; i < iteration; i++) {
            panels.push(
                <div key={i} >
                    <TabPanel value={activeTab} index={i} >
                        {/*Mobile */}
                        <div className="row cash-register 
                            mt-3 d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none">
                            <Keyboard
                                handleKeyPress={props.handleKeyPress}
                                produits={produits} ligne={5} colonne={3} typeProduit={i + 1} />
                        </div>

                        {/*Small */}
                        <div className="row cash-register mt-3 d-none d-lg-none d-md-none d-xl-none d-xxl-none d-sm-block ">
                            <Keyboard
                                handleKeyPress={props.handleKeyPress}
                                produits={produits} ligne={5} colonne={4} typeProduit={i + 1} />
                        </div>

                        {/*Medium */}
                        <div className="row 
                            cash-register d-flex 
                            justify-content-center mt-3 
                            d-none d-lg-none d-xl-none d-xxl-none d-md-block">
                            <Keyboard
                                handleKeyPress={props.handleKeyPress}
                                produits={produits} ligne={7} colonne={3} typeProduit={i + 1} />
                        </div>

                        {/*desktop Large */}
                        <div className="cash-register 
                            mt-3 d-none d-xl-none d-xxl-none d-lg-block">
                            <Keyboard
                                handleKeyPress={props.handleKeyPress}
                                produits={produits}
                                ligne={5} colonne={4} typeProduit={i + 1} />
                        </div>

                        {/*desktop X-Large */}
                        <div className="cash-register mt-3 d-none d-xl-block">
                            <Keyboard
                                handleKeyPress={props.handleKeyPress}
                                produits={produits} ligne={4} colonne={5} typeProduit={i + 1} />
                        </div>
                    </TabPanel>
                </div>
            )
        }
        return (<div>{panels}</div>);
    }

    return (
        <div className="container px-0" id="panel">
            <div className=" d-flex">
                <nav className=" me-1 mt-4 ">
                    <div className="nav nav-tabs d-flex flex-column" id="nav-tab"
                        role="tablist">
                        <div className=" div-onglet ">
                            <button
                                className={`nav-link text-light
                                    d-flex justify-content-center
                                    ${activeTab === 0 ? 'active' : ''}`}
                                id="nav-tab-1"
                                type="button"
                                onClick={() => handleTabClick(0)}
                                style={{ width: '60px' }}
                            >
                                <span className="onglet"> Softs</span>
                            </button>
                        </div>
                        <div className="div-onglet">
                            <button
                                className={`nav-link text-light
                                d-flex justify-content-center 
                                border border-secondary  
                                ${activeTab === 1 ? 'active' : ''}`}
                                id="nav-tab-2"
                                type="button"
                                onClick={() => handleTabClick(1)}
                                style={{ width: '60px', }}
                            >
                                <span className="onglet">Alcools</span>
                            </button>
                        </div>
                        <div className="div-onglet">
                            <button
                                className={`nav-link text-light d-flex 
                                    justify-content-center border border-secondary
                                    ${activeTab === 2 ? 'active' : ''}`}
                                id="nav-tab-3"
                                type="button"
                                onClick={() => handleTabClick(2)}
                                style={{ width: '60px', }}
                            >
                                <span className="onglet">Snacks</span>
                            </button>
                        </div>
                    </div>
                </nav>
                <div className="keyboard mt-4 px-2 pb-2">
                    {handlePanel(3)}
                </div>
            </div>
        </div >
    );
}