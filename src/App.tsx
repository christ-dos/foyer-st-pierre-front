import './App.css';
import Ticket from './composants/Ticket';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from './composants/Footer';
import Header from './composants/Header';

function App() {
  const items = ['1 canette Coca 1 € X', 'Article 2', 'Article 3', 'Article 4', 'Article 5'];
  const total = 30;
  let count = 1;
  return (
    <div className="App">
      <Header />
      <div className='container-fluid d-sm-flex'>
        <div className='col-12 col-sm-9'>
          <p className='bg-warning'> ceci est un paragraphe</p>
        </div>
        <div className='col-12 col-sm-3 d-flex justify-content-center align-items-center'
          style={{ height: '420px', backgroundColor: '#ccc' }}>
          <Ticket items={items} total={total} count={count++} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
