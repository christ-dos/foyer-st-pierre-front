import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export const PaymentComponent: React.FC<{
    total: number, handlePayment: any,
    monnaie: number, handleSaveTicket: any
}> = (props) => {

    const [payment, setPayment] = useState("");
    const [rendreMonnaieIsClicked, setRendreMonnaieIsClicked] = useState(false);

    const isButtonValid = props.total > 0;
    const isButtonEnregistrerTicketValid = (props.monnaie === 0 && rendreMonnaieIsClicked) ||
        (props.monnaie > 0)

    useEffect(() => {
        /*let input = document.getElementById('sommePaye');
         console.log(input);
         console.log("value: ", input?.getAttribute('value'));
         if (!rendreMonnaieIsClicked) {
             input?.setAttribute('value', "")
             console.log("value: ", input?.getAttribute('value'));
         }*/

    }, [rendreMonnaieIsClicked])

    return (
        <>
            <div className="container mt-3 ">
                <div className="d-flex flex-row ">
                    <div className="col-6">
                        <button className="btn btn-primary btn-lg btn-block me-1 "
                            style={{ backgroundColor: '#d66a16', width: '98%' }}
                            disabled={!isButtonValid}>Compte
                        </button>
                    </div>
                    <div className="col-6">
                        <button type="button" className="btn btn-primary btn-lg"
                            data-bs-toggle="modal"
                            style={{ backgroundColor: '#d66a16', width: '98%' }}
                            data-bs-target="#calculMonnaieModal"
                            disabled={!isButtonValid}>
                            Payer €
                        </button>
                    </div>
                </div>
            </div>

            {/** <!-- Modal Rendu Monnaie -->*/}
            <div className="modal fade" id="calculMonnaieModal" tabIndex={-1} aria-labelledby="exampleModalLabel"
                aria-hidden="true" data-bs-backdrop='static'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header text-light"
                            style={{ backgroundColor: '#Ad0011' }}>
                            <h4 className="modal-title"
                                id="calculMonnaieModalLabel">Monnaie à rendre</h4>
                            <button type="button"
                                className="btn-close"
                                style={{ backgroundColor: "#ccc", color: 'white' }}
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body mt-2">
                            {props.monnaie < 0 &&
                                <p className="alert alert-danger"><FontAwesomeIcon icon={faTriangleExclamation} style={{ fontSize: '1.5rem', marginRight: '5px' }} /> La somme payée doit être supérieur à la somme due</p>
                            }
                            <div className="input-group mb-3">
                                <span className="input-group-text text-light bg-dark" >Total €</span>
                                <input type="text" className="form-control"
                                    value={props.total.toFixed(2)}
                                    aria-label="Amount (to the nearest dollar)"
                                    readOnly />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-dark text-light"
                                >Payé</span>
                                <input type="number"
                                    id="sommePaye"
                                    className="form-control col-7"
                                    aria-label="Amount (to the nearest dollar)"
                                    onChange={(e: any) => setPayment(e.target.value)}
                                    value={payment}
                                />
                                <button type="button"
                                    className="btn btn-sm btn-primary ms-1 rounded col-4"
                                    style={{ backgroundColor: '#d66a16' }}
                                    onClick={() => {
                                        props.handlePayment(payment);
                                        setRendreMonnaieIsClicked(true);
                                    }}
                                >
                                    A rendre
                                </button>
                            </div>
                            <div className="input-group  mt-4">
                                <span className="me-2 ms-1 lead"><i>Monnaie à rendre :</i></span>
                                {props.monnaie === 0 && !rendreMonnaieIsClicked ?
                                    (<></>)
                                    :
                                    (
                                        <p className="lead fw-bold"
                                            style={props.monnaie > 0 ? { color: '#d66a16' } : { color: 'red' }}>
                                            {props.monnaie} €
                                        </p>
                                    )

                                }
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"
                                data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn text-light"
                                data-bs-dismiss="modal"
                                style={{ backgroundColor: '#d66a16' }}
                                onClick={() => {
                                    props.handleSaveTicket();
                                    setRendreMonnaieIsClicked(false);
                                    setPayment('');
                                }}
                                disabled={!isButtonEnregistrerTicketValid}
                            >Enregistrer Ticket
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}