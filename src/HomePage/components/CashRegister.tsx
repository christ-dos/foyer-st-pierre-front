import React, { useEffect, useState } from 'react';
import { Produit } from '../../models/Produit';
import Keyboard from './keyboard';
import Ticket from './Ticket';

type ItemTicket = {
    id: string,
    description: string,
    quantite: number,
    totalSommeArticle: number,
    prixVente: number
}

function CashRegister(): JSX.Element {
    const [total, setTotal] = useState<number>(0);
    const [payment, setPayment] = useState<number>(0);
    const [produits, setProduits] = useState<Produit[]>([]);
    const [produitsTicket, setProduitsTicket] = useState<Set<ItemTicket>>(new Set([]));
    // const [items, setItems] = useState<Set<ItemTicket>>(new Set([]));

    const articles: Produit[] = [
        { id: 1, description: "Coca-ligth 33cl", prixVente: 1, typeProduit: 1, urlPicture: "/images/canette-coca.png" },
        { id: 2, description: "Coca 33cl", prixVente: 1, typeProduit: 1, urlPicture: "/images/canette-coca.png" },
        { id: 3, description: "Ice-tea 33cl", prixVente: 1, typeProduit: 1, urlPicture: "/images/canette-coca.png" },
        { id: 4, description: "Coca 33cl", prixVente: 1, typeProduit: 1, urlPicture: "/images/canette-coca.png" },
        { id: 5, description: "Coca 33cl", prixVente: 1, typeProduit: 1, urlPicture: "/images/canette-coca.png" },
        { id: 6, description: "bière 33cl", prixVente: 1, typeProduit: 2, urlPicture: "./images/canette_biere.png" },
        { id: 7, description: "bière 33cl", prixVente: 1, typeProduit: 2, urlPicture: "./images/canette_biere.png" },
        { id: 8, description: "bière 33cl", prixVente: 1, typeProduit: 2, urlPicture: "./images/canette_biere.png" },
        { id: 9, description: "bière 33cl", prixVente: 1, typeProduit: 2, urlPicture: "./images/canette_biere.png" }

    ]

    let count = 1;

    useEffect(() => {
        setProduits(articles)
        // console.log(produits);

    }, [])


    const additionnerTotalTicket = (produit: any) => {
        if (!isNaN(produit.prixVente)) {
            const newTotal = total + produit.prixVente;
            setTotal(parseFloat(newTotal.toFixed(2)));
        }
    }

    const handleKeyPress = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const key = event.currentTarget.value;

        const elementExist = [...produitsTicket].find((el) => el.id === key)
        if (elementExist) {

            elementExist.quantite += 1;
            elementExist.totalSommeArticle = elementExist.prixVente * elementExist.quantite;
            setProduitsTicket((produitsTicket) => new Set([...produitsTicket, elementExist]));

            additionnerTotalTicket(elementExist);

        }

        for (const produit of produits) {
            if (+key === produit.id && !elementExist) {
                const newItem = { id: key, quantite: 1, prixVente: produit.prixVente, description: produit.description, totalSommeArticle: 1 }
                setProduitsTicket((produitsTicket) => new Set([...produitsTicket, newItem]));

                additionnerTotalTicket(produit);
            }
        }
    };

    const handlePayment = () => {
        const change = payment - total;
        alert(`Change: ${change.toFixed(2)}`);
        setTotal(0);
        setPayment(0);
    };

    return (
        <div className='container d-sm-flex bg-dark min-lg-vh-100'>
            <div className='col-12 col-sm-9 '>
                <div className="row cash-register mt-3">
                    <Keyboard
                        handleKeyPress={handleKeyPress}
                        produits={produits}
                    />
                </div>
            </div>
            <div className='col-12 col-sm-3 d-flex 
                justify-content-center align-items-center min-vh-100'
            >
                <Ticket items={[...produitsTicket]} total={total} count={count++} />
            </div>
            <div className="col-12 payment conatiner">
                <input type="number" value={payment}
                    onChange={(event) => setPayment(parseFloat(event.target.value))} placeholder="Paiement" />
                <button onClick={handlePayment}>Valider</button>
            </div>
        </div>

    );
}

export default CashRegister;
