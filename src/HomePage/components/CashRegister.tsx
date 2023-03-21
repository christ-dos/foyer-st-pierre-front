import React, { useEffect, useState } from 'react';
import { Produit } from '../../models/Produit';
import { CashRegisterPanel } from './CashRegisterPanel';
import { PaymentComponent } from './PaymentComponent';
import Ticket from './Ticket';

export type ItemTicket = {
    id: string,
    description: string,
    quantite: number,
    totalSommeArticle: number,
    prixVente: number
}

function CashRegister(): JSX.Element {
    const [total, setTotal] = useState<number>(0);
    const [payment, setPayment] = useState<number>(0);
    const [monnaie, setMonnaie] = useState<number>(0);
    const [produits, setProduits] = useState<Produit[]>([]);
    const [produitsTicket, setProduitsTicket] = useState<Set<ItemTicket>>(new Set([]));


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

    let count = 1;

    useEffect(() => {
        setProduits(articles)
        // console.log(produits);

    }, [])

    const handleDeleteItemTicket = (item: ItemTicket) => {
        console.log("id: " + item.id);
        const itemsArray = Array.from(produitsTicket)

        const indexASupprimer = itemsArray.findIndex(produit => produit.id === item.id)
        if (indexASupprimer !== -1) {
            if (itemsArray[indexASupprimer].totalSommeArticle === 1) {
                itemsArray.splice(indexASupprimer, 1);
            } else {
                const itemRecherche = itemsArray.find(el => el.id === item.id);
                if (itemRecherche != null) {
                    const newItem = {
                        id: itemRecherche.id,
                        quantite: (itemRecherche.quantite - 1),
                        prixVente: itemRecherche.prixVente,
                        description: itemRecherche.description,
                        totalSommeArticle: (itemRecherche.totalSommeArticle - itemRecherche.prixVente),
                    }
                    itemsArray.splice(indexASupprimer, 1, newItem);
                }
            }
        }
        setProduitsTicket(new Set([...itemsArray]));
        setTotal(total - item.prixVente);
    }


    const additionnerTotalTicket = (produit: Produit | ItemTicket) => {
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

    const handlePayment = (payment: number): number => {
        const change = payment - total;
        //alert(`Change: ${change.toFixed(2)}`);
        setMonnaie(change);
        return change
    };

    const handleSaveTicket = () => {
        // on creera un nouvel objet de type ticket
        //avec la liste des articles vendu pour mettre a jour les stocks
        //le total du ticket et la date de la vente
        //on enregistrera le ticket ds la BDD
       

        setTotal(0);
        setPayment(0);
        setMonnaie(0)
        setProduitsTicket(new Set);
    }

    return (
        <>
            <div className='container-fluid d-md-flex 
                min-lg-vh-100 justify-content-md-center'>
                <div className='row  d-flex justify-content-center'>
                    <div className='col-12 col-md-7 col-lg-8'>
                        <CashRegisterPanel handleKeyPress={handleKeyPress} />
                    </div>
                    <div className='row col-12 col-md-5 col-lg-4 d-flex 
                             align-items-start mt-3'>
                        <div className="col-12 d-flex justify-content-center">
                            <Ticket items={[...produitsTicket]}
                                total={total} count={count++}
                                handleDeleteItemTicket={handleDeleteItemTicket} />
                        </div>
                        < div className="col-12 mt-1 mb-3 pe-0 ">
                            <PaymentComponent total={+total}
                                handlePayment={handlePayment}
                                monnaie={monnaie}
                                handleSaveTicket={handleSaveTicket} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default CashRegister;
