import React, { MouseEventHandler } from 'react';
import { Key } from './Key';

const Keyboard: React.FC<{ handleKeyPress: MouseEventHandler, produits: any[] }> = (props) => {
    const buttons: string | any[] = [];
    

    for (const produit of props.produits) {
        buttons.push(
            < Key produit={produit} handleKeyPress={props.handleKeyPress} />
        );

    }

    // Diviser le tableau de boutons en 5 rangées de 6 boutons chacune
    const rows = [];
    for (let i = 0; i < 6; i++) {
        const start = i * 6;
        const end = start + 6;
        rows.push(buttons.slice(start, end));
    }

    // Afficher les rangées de boutons dans un tableau
    return (
        <table>
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
    );
}

export default Keyboard;