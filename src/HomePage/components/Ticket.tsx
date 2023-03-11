import React from 'react';
import '../../css/ticket.css'



const Ticket: React.FC<{ items: any[], total: number, count: number }> = (props) => {
    const timestamp: number = Date.now();
    const date: Date = new Date(timestamp);
    let ticketNumber = props.count;
    console.log(props.items);


    return (
        <div className="ticket">
            <div className="ticket-header d-flex flex-column 
                justify-content-center align-items-center">
                <h3 className="ticket-title">Ticket de Caisse</h3>
                <p>{`N° ${date.valueOf()}/${ticketNumber}`}</p>
                <p>{`le ${date.toLocaleString()}`}</p>
            </div>
            <div className="ticket-body ">
                <div className="ticket-items">
                    {props.items.map((item, index) => (
                        <div key={index} className="ticket-item">
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="ticket-footer">
                <span>Total : <b>{props.total.toFixed(2)} €</b></span>
            </div>
        </div>
    );
};

export default Ticket;