import { MouseEventHandler } from "react";

export const Key: React.FC<{ produit: any, handleKeyPress: MouseEventHandler }> = (props) => {



    return (
        <button
            key={props.produit.id}
            value={props.produit.id}
            className="btn btn-block text-light"
            style={{
                boxShadow: '5px 5px 5px #ccc',
                width: '172px', height: '140px',
                fontSize: '1.2rem',
                backgroundColor: props.produit?.categorie === 1 ? ('#cd6c1e') : ('#ccc')
            }}
            onClick={props.handleKeyPress}
        >
            <figure>
                <img
                    key={props.produit.id}
                    src={props.produit.urlPicture}
                    alt="image de boisson"
                    style={{ objectFit: 'cover', maxWidth: '100%', maxHeight: '100%' }}
                    height="80px"
                />
            </figure>
            {props.produit.description}
        </button>
    );
}