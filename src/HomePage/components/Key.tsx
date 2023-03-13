import { MouseEventHandler } from "react";
import { Produit } from "../../models/Produit";
import './../../HomePage/css/key.css'

export const Key: React.FC<{ produit: Produit, handleKeyPress: MouseEventHandler }> = (props) => {

    return (
        <div id="touche" className=" p-1">
            <button
                key={props.produit.id}
                value={props.produit.id}
                className="btn btn-block text-light"
                style={{
                    backgroundColor: props.produit?.typeProduit === 1 ? ('#cd6c1e') : ('#ccc')
                }}
                onClick={props.handleKeyPress}
            >
                <figure className="">
                    <img
                        key={props.produit.id}
                        src={props.produit.urlPicture}
                        alt="image de boisson"
                    />
                </figure>
                {props.produit.description}
            </button>
        </div>
    );
}