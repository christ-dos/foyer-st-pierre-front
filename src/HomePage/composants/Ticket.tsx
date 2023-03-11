import React from 'react';
import '../css/ticket.css'

type TicketProps = {
    items: string[];
    total: number;
    count: number;
}

const Ticket: React.FC<TicketProps> = ({ items, total }) => {
    const timestamp: number = Date.now();
    const date: Date = new Date(timestamp);

    return (
        <div className="ticket">
            <div className="ticket-header d-flex flex-column justify-content-center align-items-center">
                <h3 className="ticket-title">Ticket de caisse n°</h3>
                <p>{date.toLocaleDateString()}</p>
            </div>
            <div className="ticket-body">
                <div className="ticket-items">
                    {items.map((item, index) => (
                        <div key={index} className="ticket-item">
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="ticket-footer">
                <span>Total : <b>{total} €</b></span>
            </div>

        </div>
    );
};

export default Ticket;