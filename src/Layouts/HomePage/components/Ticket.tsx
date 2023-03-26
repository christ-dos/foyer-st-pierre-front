import React from 'react';
import '../../HomePage/css/ticket.css';
import { ItemTicket } from './CashRegister';



const Ticket: React.FC<{
    items: ItemTicket[], total: number, count: number,
    handleDeleteItemTicket: any
}> = (props) => {
    const timestamp: number = Date.now();
    const date: Date = new Date(timestamp);
    let ticketNumber = props.count;

    return (
        <div className="ticket">
            <div className="ticket-header d-flex flex-column 
                justify-content-center align-items-center">
                <h3 className="ticket-title">Ticket de Caisse</h3>
                <p>{`N° ${date.valueOf()}/${ticketNumber}`}</p>
                <p>{`le ${date.toLocaleString()}`}</p>
            </div>
            <div className="ticket-body">
                <div className="ticket-items">
                    {props.items.map((item, index) => (
                        <div key={item.id} className="ticket-item">
                            <span className='col-1'>{item.quantite}</span>
                            <span className='col-6'>{item.description}</span>
                            <span className='col-3'>{item.totalSommeArticle}€ </span>
                            <button
                                className=" col-1 ms-2 btn btn-outline-danger py-0
                                    d-flex justify-content-center align-items-center"
                                type={"button"}
                                id="deleteProduit"
                                onClick={() => props.handleDeleteItemTicket(item)}
                            >
                                X
                            </button>


                        </div>
                    ))}
                </div>
            </div>
            <div className="ticket-footer">
                <span>Total : <b>{props.total.toFixed(2)} €</b></span>
            </div>
        </div >
    );
};

export default Ticket;