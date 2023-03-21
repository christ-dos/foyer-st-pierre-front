import { count } from "console";
import { NavBar } from "../HearderAndFooter/components/NavBar";
import Ticket from "../HomePage/components/Ticket";
import CashRegister from "./components/CashRegister";
import { CashRegisterPanel } from "./components/CashRegisterPanel";

const HomePage = () => {

    return (
        <div className='container-fluid bg-dark'>
            <CashRegister />
        </div>
    );
}
export default HomePage;