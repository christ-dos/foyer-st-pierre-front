import { count } from "console";
import Ticket from "../HomePage/components/Ticket";
import CashRegister from "./components/CashRegister";

const HomePage = () => {

    return (
        <div className='container-fluid d-sm-flex bg-dark'>
            <CashRegister />
        </div>
    );
}
export default HomePage;