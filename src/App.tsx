import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './HearderAndFooter/Footer';
import Header from './HearderAndFooter/Header';
import HomePage from './HomePage/HomePage';

function App() {

  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
