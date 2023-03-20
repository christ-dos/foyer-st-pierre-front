import { MouseEventHandler } from "react";
import { Produit } from "../../models/Produit";
import './../../HomePage/css/key.css'

export const Key: React.FC<{ produit: Produit, handleKeyPress: MouseEventHandler }> = (props) => {

    return (
        <div id="touche" className=" p-1">
            <button
                key={props.produit.id}
                value={props.produit.id}
                className="btn btn-block text-light overflow-elipsis"
                onClick={props.handleKeyPress}
            >
                <figure className="mt-1 mb-0">
                    <img
                        key={props.produit.id}
                        src={props.produit.urlPicture}
                        alt="Boisson"
                    />
                </figure>
                {props.produit.description}
            </button>
        </div>
    );
}