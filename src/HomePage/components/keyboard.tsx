import React, { MouseEventHandler } from 'react';
import { Produit } from '../../models/Produit';
import { Key } from './Key';

const Keyboard: React.FC<{
    handleKeyPress: MouseEventHandler, produits: any[],
    ligne: number, colonne: number, typeProduit: number
}> = (props) => {
    const buttons: string | any[] = [];

    for (const produit of props.produits) {
        if (produit.typeProduit === props.typeProduit) {
            buttons.push(
                < Key produit={produit} handleKeyPress={props.handleKeyPress} key={produit.id} />
            );
        }
    }

    const filterListe = props.produits.filter((produit: Produit) =>
        produit.typeProduit === props.typeProduit
    )

    if (filterListe.length < 30) {
        const difference = 30 - filterListe.length;
        let count = props.produits.length + 1

        for (let index = 0; index < difference; index++) {
            const produit = { id: (count), description: "...", prixVente: 0, typeProduit: 0, urlPicture: "" }
            buttons.push(
                < Key produit={produit} handleKeyPress={props.handleKeyPress} key={count++} />
            );
        }
    }

    // Diviser le tableau de boutons en fonction de la taille des ecrans

    const rows = [];
    for (let i = 0; i < props.ligne; i++) {
        const start = i * props.colonne;
        const end = start + props.colonne;
        rows.push(buttons.slice(start, end));
    }

    // Afficher les rangées de boutons dans un tableau
    return (
        <>
            {/*Desktop lg*/}
            <table className='col-12 col-sm-12 col-md-9'>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index} >
                            {row.map((button) => (
                                <td key={button.key}>
                                    {button}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    );
}

export default Keyboard;
