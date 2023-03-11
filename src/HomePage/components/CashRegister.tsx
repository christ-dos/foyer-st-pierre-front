import React, { useEffect, useState } from 'react';
import Keyboard from './keyboard';
import Ticket from './Ticket';

function CashRegister(): JSX.Element {
    const [total, setTotal] = useState<number>(30);
    const [payment, setPayment] = useState<number>(0);
    const [items, setItems] = useState<string[]>([]);

    const produits = [
        { id: 1, description: "Coca-ligth 33cl", prix: 1, categorie: 1, urlPicture: "/images/canette-coca.png" },
        { id: 2, description: "Coca 33cl", prix: 1, categorie: 1, urlPicture: "/images/canette-coca.png" },
        { id: 3, description: "Ice-tea 33cl", prix: 1, categorie: 1, urlPicture: "/images/canette-coca.png" },
        { id: 4, description: "Coca 33cl", prix: 1, categorie: 1, urlPicture: "/images/canette-coca.png" },
        { id: 5, description: "Coca 33cl", prix: 1, categorie: 1, urlPicture: "/images/canette-coca.png" },
        { id: 6, description: "bière 33cl", prix: 1, categorie: 2, urlPicture: "./images/canette_biere.png" },
        { id: 7, description: "bière 33cl", prix: 1, categorie: 2, urlPicture: "./images/canette_biere.png" },
        { id: 8, description: "bière 33cl", prix: 1, categorie: 2, urlPicture: "./images/canette_biere.png" },
        { id: 9, description: "bière 33cl", prix: 1, categorie: 2, urlPicture: "./images/canette_biere.png" }

    ]

    let count = 1;
    const itemsAdded: string[] = [];



    const handleKeyPress = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const key = event.currentTarget.value;
        //itemsAdded.push(key);
        items.push(key);
        console.log(key);


        const amount = parseFloat(key);
        if (!isNaN(amount)) {
            const newTotal = total + amount;
            setTotal(parseFloat(newTotal.toFixed(2)));
        }
    };

    useEffect(() => {
        setItems(itemsAdded);

    }, []);

    const handlePayment = () => {
        const change = payment - total;
        alert(`Change: ${change.toFixed(2)}`);
        setTotal(0);
        setPayment(0);
    };

    return (
        <div className='container-fluid d-sm-flex bg-dark'>
            <div className='col-12 col-sm-9 min-vh-100'>
                <div className="cash-register">
                    <h1 className='text-white'>Caisse enregistreuse</h1>
                    <div className="total text-white">{`Total: ${total.toFixed(2)} €`}</div>
                    <div className="keyboard">
                        <button value="1" onClick={handleKeyPress}>1</button>
                        <button value="2" onClick={handleKeyPress}>2</button>
                        <button value="3" onClick={handleKeyPress}>3</button>
                        <button value="4" onClick={handleKeyPress}>4</button>
                        <button value="5" onClick={handleKeyPress}>5</button>
                        <button value="6" onClick={handleKeyPress}>6</button>
                        <button value="7" onClick={handleKeyPress}>7</button>
                        <button value="8" onClick={handleKeyPress}>8</button>
                        <button value="9" onClick={handleKeyPress}>9</button>
                        <button value="0" onClick={handleKeyPress}>0</button>
                        <button value="." onClick={handleKeyPress}>.</button>
                    </div>
                    <Keyboard
                        handleKeyPress={handleKeyPress}
                        produits={produits} />
                    <div className="payment">
                        <input type="number" value={payment} onChange={(event) => setPayment(parseFloat(event.target.value))} placeholder="Paiement" />
                        <button onClick={handlePayment}>Valider</button>
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-3 d-flex 
                justify-content-center align-items-center min-vh-100'
            >
                <Ticket items={items} total={total} count={count++} />
            </div>
        </div>

    );
}

export default CashRegister;
