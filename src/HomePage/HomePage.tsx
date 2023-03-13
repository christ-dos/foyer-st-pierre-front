import { count } from "console";
import Ticket from "../HomePage/components/Ticket";
import CashRegister from "./components/CashRegister";

const HomePage = () => {

    return (
        <div className='container-fluid bg-dark'>
            <CashRegister />
        </div>
    );
}
export default HomePage;